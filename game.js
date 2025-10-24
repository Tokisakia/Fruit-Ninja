// --- DOM 元素 ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const instructionsButton = document.getElementById('instructionsButton');
const instructionsModal = document.getElementById('instructionsModal');
const closeInstructionsButton = document.getElementById('closeInstructionsButton');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreElement = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');

// --- 游戏状态变量 ---
let fruits = [];
let explosions = [];
let score = 0;
let gameRunning = false;
let isSlicing = false;
let slicePoints = []; // 存储切割轨迹点
const gravity = 0.2; // 统一的重力

// --- 音效 (如果有音频文件，请取消注释) ---
// const cutSound = new Audio('cut.mp3');
// const bombSound = new Audio('bomb.mp3');

// function playSound(sound) {
//     sound.currentTime = 0; // 允许连续播放
//     sound.play().catch(e => console.error("音效播放失败:", e));
// }

// --- 基础类 ---

class Fruit {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;

        // 【更新】根据目标抛射高度计算初始速度
        // 目标: 抛射的最高点 (Y坐标) 在 0 (屏幕顶) 和 canvas.height * 0.5 (屏幕一半) 之间
        const targetPeakY = Math.random() * (canvas.height * 0.5);
        // 距离 = 起点 (canvas.height + 50) - 终点 (targetPeakY)
        const distanceToPeak = (canvas.height + 50) - targetPeakY; 
        // 使用物理公式 v^2 = 2 * a * d 计算初始速度
        // v = sqrt(2 * a * d)
        // (v 必须是负数才能向上)
        this.vy = -Math.sqrt(2 * gravity * distanceToPeak);
        
        // 水平速度 (Range: -4 to 4)
        this.vx = (Math.random() - 0.5) * 8; 

        this.radius = Math.random() * 10 + 60; // 随机大小 (用作通用尺寸)
        
        // 随机水果颜色 (增加了几种)
        this.color = ['#28a745', '#ffc107', '#dc3545', '#fd7e14', '#6f42c1'][Math.floor(Math.random() * 5)];
        
        // 【新增】形状和旋转
        const shapes = ['circle', 'square', 'triangle'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = 0; // 初始旋转
        this.rotationSpeed = (Math.random() - 0.5) * 0.1; // 旋转速度
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += gravity; // 重力加速度
        this.rotation += this.rotationSpeed; // 【新增】更新旋转
    }

    draw() {
        ctx.fillStyle = this.color;

        // 【更新】保存画布状态并应用旋转
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const size = this.radius; // 使用 radius 作为通用尺寸

        ctx.beginPath();
        switch (this.shape) {
            case 'circle':
                ctx.arc(0, 0, size, 0, Math.PI * 2);
                break;
            case 'square':
                // 绘制一个以 (0,0) 为中心的方形
                ctx.rect(-size, -size, size * 2, size * 2);
                break;
            case 'triangle':
                // 绘制一个以 (0,0) 为中心的三角形
                ctx.moveTo(0, -size);
                ctx.lineTo(size, size);
                ctx.lineTo(-size, size);
                ctx.closePath();
                break;
        }
        ctx.fill();

        // 【更新】恢复画布状态
        ctx.restore();
    }
}

class Bomb extends Fruit {
    constructor() {
        super();
        this.color = '#333'; // 炸弹颜色
        this.radius = 30; // 固定大小
        this.shape = 'circle'; // 【更新】炸弹固定为圆形
        this.rotationSpeed = (Math.random() - 0.5) * 0.02; // 炸弹缓慢旋转
    }
}

class Explosion {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];
        this.life = 30; // 爆炸持续帧数

        for (let i = 0; i < 20; i++) { // 粒子数量
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 5, // 粒子速度
                vy: (Math.random() - 0.5) * 5,
                radius: Math.random() * 3 + 1,
                alpha: 1
            });
        }
    }

    isAlive() {
        return this.life > 0;
    }

    update() {
        this.life--;
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha = this.life / 30; // 粒子随时间淡出
        });
    }

    draw() {
        this.particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });
        ctx.globalAlpha = 1; // 重置透明度
    }
}

// --- 游戏核心功能 ---

function addFruit() {
    if (Math.random() < 0.85) { // 85% 是水果
        fruits.push(new Fruit());
    } else {
        fruits.push(new Bomb());
    }
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`得分: ${score}`, 20, 40);
}

// 绘制切割轨迹
function drawSlice() {
    if (slicePoints.length < 2) return;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(slicePoints[0].x, slicePoints[0].y);
    for (let i = 1; i < slicePoints.length; i++) {
        ctx.lineTo(slicePoints[i].x, slicePoints[i].y);
    }
    ctx.stroke();

    // 让轨迹变短
    slicePoints.shift();
}

function updateGame() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. 更新和绘制爆炸
    explosions.forEach(exp => exp.update());
    explosions.forEach(exp => exp.draw());
    explosions = explosions.filter(exp => exp.isAlive());

    // 2. 更新和绘制水果
    fruits.forEach(fruit => fruit.update());
    fruits.forEach(fruit => fruit.draw());

    // 3. 移除出界的水果
    fruits = fruits.filter(fruit => fruit.y < canvas.height + 100);

    // 4. 绘制得分
    drawScore();

    // 5. 绘制切割轨迹
    drawSlice();

    // 6. 随机添加新水果
    if (Math.random() < 0.03) { 
        addFruit();
    }

    requestAnimationFrame(updateGame);
}

function startGame() {
    // 重置游戏状态
    score = 0;
    fruits = [];
    explosions = [];
    gameRunning = true;
    
    // 切换界面
    startScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');
    canvas.style.display = 'block';

    // 调整画布大小并开始游戏
    resizeCanvas();
    addFruit();
    updateGame();
}

function endGame() {
    gameRunning = false;
    canvas.style.display = 'none';
    gameOverScreen.classList.add('active');
    finalScoreElement.textContent = `你的得分: ${score}`;
}

// --- 事件监听 ---

// 1. 按钮点击
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

instructionsButton.addEventListener('click', () => {
    instructionsModal.classList.add('active');
});

closeInstructionsButton.addEventListener('click', () => {
    instructionsModal.classList.remove('active');
});

// 2. 窗口大小调整 (实现全屏)
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
// 初始设置画布大小 (虽然在 startGame 时会再调一次，但先调好)
resizeCanvas(); 

// 3. 切割输入 (替换原来的 'click')
// 使用 pointer 事件兼容鼠标和触摸
canvas.addEventListener('pointerdown', (e) => {
    if (!gameRunning) return;
    isSlicing = true;
    slicePoints = [{ x: e.clientX, y: e.clientY }];
});

canvas.addEventListener('pointerup', () => {
    isSlicing = false;
    slicePoints = [];
});

canvas.addEventListener('pointerleave', () => {
    isSlicing = false;
    slicePoints = [];
});

canvas.addEventListener('pointermove', (e) => {
    if (!isSlicing || !gameRunning) return;

    const x = e.clientX;
    const y = e.clientY;
    slicePoints.push({ x, y });

    // 检查是否切割到
    // 从后往前遍历，这样删除时不会影响索引
    for (let i = fruits.length - 1; i >= 0; i--) {
        const fruit = fruits[i];
        const dx = fruit.x - x;
        const dy = fruit.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // 碰撞检测仍然使用半径 (radius)
        if (distance < fruit.radius) {
            // 切到了!
            if (fruit instanceof Bomb) {
                // 切到炸弹
                // playSound(bombSound); // (取消注释以播放音效)
                endGame();
            } else {
                // 切到水果
                score += 10;
                // playSound(cutSound); // (取消注释以播放音效)
                
                // 创建爆炸效果
                explosions.push(new Explosion(fruit.x, fruit.y, fruit.color));
                
                // 移除水果
                fruits.splice(i, 1);
            }
        }
    }
});

// --- 初始显示 ---
// 页面加载时，不自动开始游戏，而是显示开始菜单
startScreen.classList.add('active');