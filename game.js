// ==========================================
// 🌟 1. 动态价值表 (按区间浮动)
// ==========================================
const allItemValues = {
    "Uzi": [12000, 18000], "Car15": [25000, 35000], "R93狙击步枪": [60000, 80000],
   "便携军用雷达": [2150000, 2150000],
  "曼德尔超算单元": [2000000, 2000000],
  "高速磁盘阵列": [1800000, 1800000],
  "刀片服务器": [1450000, 1450000],
  "飞行记录仪": [1750000, 1750000],
  "笔记本电脑": [2000000, 2000000],
  "军用信息终端": [931000, 969000],
  "军用电台": [931000, 969000],
  "摄影机": [666400, 693600],
  "军用无人机": [568400, 591600],
  "军用控制终端": [372400, 387600],
  "显卡": [323400, 336600],
  "电子脚镣": [882000, 918000],
  "定位接收器": [181300, 188700],
  "恒星敏感器": [186200, 193800],
  "大型电台": [529200, 550800],
  "脑机头戴设备": [200900, 209100],
  "军用卫星通讯仪": [195020, 202980],
  "单反相机": [136220, 141780],
  "军用望远镜": [93100, 96900],
  "镜头": [195020, 202980],
  "军用弹道计算机": [90160, 93840],
  "卫星电话": [83300, 86700],
  "高速固态硬盘": [73500, 76500],
  "CPU": [63700, 66300],
  "数码相机": [73500, 76500],
  "可编程处理器": [107800, 112200],
  "手机": [63700, 66300],
  "军用网络模块": [67620, 70380],
  "脑机控制端子": [61740, 64260],
  "军用热像仪": [70560, 73440],
  "已损坏的热像仪": [46060, 47940],
  "广角镜头": [45080, 46920],
  "专业声卡": [40180, 41820],
  "ASOS电脑主板": [46060, 47940],
  "固态硬盘": [37240, 38760],
  "GS5手柄": [34300, 35700],
  "便携音响": [24500, 25500],
  "内存条": [22540, 23460],
  "HIFI声卡": [30380, 31620],
  "收音机": [22540, 23460],
  "间谍笔": [20580, 21420],
  "电子干扰器": [11760, 12240],
  "太阳能板": [37240, 38760],
  "液晶显示屏": [21560, 21560],
  "电子温度计": [17640, 18360],
  "U盘": [10780, 11220],
  "军用移动电源": [8820, 9180],
  "摄像头": [10780, 11220],
  "继电器": [8820, 9180],
  "存储卡": [6860, 7140],
  "音频播放器": [8820, 9180],
  "电源": [4900, 5100],
  "DVD光驱": [3920, 4080],
  "键盘": [2940, 3060],
  "风冷散热器": [2940, 3060],
  "超高频读卡器": [1960, 2040],
  "电容": [1960, 2040],
  "机械硬盘": [1960, 2040],
  "印刷电路板": [1960, 2040],
  "手机电池": [1960, 2040],
  "鼠标": [980, 1020],
  "复苏呼吸机": [5000000, 5000000],
  "ECMO": [3300000, 3300000],
  "自动体外除颤器": [1470000, 1470000],
  "医疗机械人": [1330000, 1330000],
  "呼吸机": [470000, 470000],

  // 金品 ±2%
  "便携氧气筒": [156800, 163200],
  "静脉定位器": [78400, 81600],
  "心脏支架": [75460, 78540],
  "哮喘吸入器": [84280, 87720],
  "血氧仪": [61740, 64260],
  "体内除颤器": [56840, 59160],
  "滤毒罐": [60760, 63240],

  // 紫品 ±2%
  "离心机": [59780, 62220],
  "生化培养箱": [54880, 57120],
  "血压仪": [38220, 39780],
  "人工膝关节": [23520, 24480],
  "无菌敷料包": [27440, 28560],

  // 蓝品 ±2%
  "医疗无人机": [34300, 35700],
  "骨锯": [28420, 29580],
  "电子显微镜": [14700, 15300],
  "听诊器": [15680, 16320],
  "医用酒精": [10780, 11220],
  "额温枪": [10780, 11220],

  // 绿品 ±2%
  "输液工具": [2940, 3060],
  "小药瓶": [1960, 2040],
  "注射器": [1960, 2040],
  "手术镊子": [1960, 2040],
  "盐溶液": [1960, 2040],
  "牙膏": [1960, 2040],

  // 白品 ±2%
  "试管": [1960, 2040],
  "外科手套": [980, 1020],
  "手术剪刀": [980, 1020],
	
    "强化碳纤维板": [2150000, 2150000],
  "军用炮弹": [1460000, 1460000],
  "超声波切割刀": [200000, 200000],
  "军用炸药": [133280, 138720],
  "紫外线灯": [90160, 93840],
  "液压破门器": [81340, 84660],
  "陆军万用表": [65660, 68340],
  "移动电缆": [166600, 173400],
  "自旋手锯": [49000, 51000],
  "粉碎钳": [39200, 40800],
  "联名手电筒": [24500, 25500],
  "植物样本": [18620, 19380],
  "聚乙烯纤维": [31360, 32640],
  "特种钢": [24500, 25500],
  "水泥": [50960, 53040],
  "电钻": [31360, 32640],
  "油漆": [27440, 28560],
  "破障锤": [37240, 38760],
  "芳纶纤维": [24500, 25500],
  "火药": [22540, 23460],
  "枪械零件": [17640, 18360],
  "高精度卡尺": [15680, 16320],
  "转换插座石工锤": [10780, 11220],
  "手锯": [12740, 13260],
  "水平仪": [10780, 11220],
  "压力计": [3920, 4080],
  "原木木板": [3920, 4080],
  "电动爆破锤": [2940, 3060],
  "角磨机": [2940, 3060],
  "喷漆": [3920, 4080],
  "LED灯管": [2940, 3060],
  "螺丝刀电笔": [2940, 3060],
  "模拟温度计": [1960, 2040],
  "尖嘴钳": [1960, 2040],
  "插座": [1960, 2040],
  "电线": [1960, 2040],
  "波纹软管": [1960, 2040],
  "扳手": [1960, 2040],
  "羊角锤": [1960, 2040],
  "钉子直角尺": [1960, 2040],
  "工具刀": [1960, 2040],
  "油漆刷": [1960, 2040],
  "胶带": [1960, 2040],
  "精密工具组": [1960, 2040],
  "防水胶布": [1960, 2040],
  "网线": [980, 1020],
  "音波测距卷尺": [980, 1020],
   "扫拖一体机器人": [2030000, 2030000],
  "强力吸尘器": [1450000, 1450000],
  "奥荊薇娅稥槟": [340000, 340000],
  "钻石鱼子酱": [180000, 180000],

  // 金品 ±2%
  "盒装挂耳咖啡": [362600, 377400],
  "飞行员眼镜": [80360, 83640],
  "蓝宝石龙舌兰": [80360, 83640],
  "咖啡": [70560, 73440],
  "纯金打火机": [60760, 63240],
  "营养粥罐头": [57820, 60180],
  "海鲜粥罐头": [56840, 59160],

  // 紫品 ±2%
  "胶囊咖啡机套组": [41160, 42840],
  "小糖人姜饼人": [22540, 23460],
  "鳄鱼蛋": [22540, 23460],
  "清新橘味能量凝胶": [31360, 32640],
  "生津柠檬茶": [16660, 17340],

  // 蓝品 ±2%
  "阿萨拉时尚周刊": [16660, 17340],
  "摩卡咖啡壸": [15680, 16320],
  "木雕烟斗": [16660, 17340],
  "军用罐头": [13720, 14280],
  "三角洲特种部队：刺刀特遣队": [11760, 12240],
  "维生素泡腾片": [10780, 11220],
  "英弎袋泡茶": [14700, 15300],
  "大豆蛋白粉包": [12740, 13260],
  "可乐": [12740, 13260],
  "香喷喷炒面": [8820, 9180],
  "糖三角": [12740, 13260],
  "三角洲特种部队：黑鹰坠落-战队之刃": [9800, 10200],

  // 绿品 ±2%
  "调料套组": [6860, 7140],
  "阿萨拉新闻周刊": [5880, 6120],
  "袋装咖啡豆": [5880, 6120],
  "阿萨拉娱乐月刊": [4900, 5100],
  "酒店宣传海报": [3920, 4080],
  "野外能量棒": [2940, 3060],
  "当地再制咖啡": [2940, 3060],
  "强力胶": [2940, 3060],
  "迷你氢电池": [1960, 2040],
  "电火机": [1960, 2040],
  "苹果": [1960, 2040],
  "无糖缓释能量棒": [980, 1020],
  "纯净水": [1960, 2040],

  // 白品 ±2%
  "胡椒甁": [1960, 2040],
  "基础蛋白粉": [980, 1020],
  "干脆面": [980, 1020],
  "酸奶": [980, 1020],
    "非洲之心": [13000000, 13000000],
  "黄金鳄鱼头雕像": [550000, 550000],
  "天圆地方": [480000, 480000],
  "黄金瞪羚": [440000, 440000],
  "化石": [330000, 330000],
  "金条": [330000, 330000],
  "赛伊德怀表": [230000, 230000],
  "名贵机械表": [220000, 220000],
  "鎏金卡牌": [180000, 180000],

  // 金品 ±2%
  "麦小鼠": [98000, 102000],
  "小珍珠": [88200, 91800],
  "金币": [56840, 56840],
  "八音盒": [54880, 57120],
  "金笔": [60760, 63240],
  "阿萨拉特色酒杯": [58800, 61200],
  "功绩勋章": [70560, 73440],
  "陶俑": [88200, 91800],
  "座钟": [186200, 193800],

  // 紫品 ±2%
  "后妈耳环": [10780, 11220],
  "图腾箭矢": [11760, 12240],
  "优雅咖啡杯": [11760, 12240],
  "牛角": [15680, 16320],
  "黄金饰章": [20580, 21420],
  "海盗弯刀": [28420, 29580],
  "酒壶": [24500, 25500],
  "提灯": [30380, 31620],
  "仪式匕首": [88200, 91800],
  "马赛克灯台": [117600, 122400],

  // 蓝品 ±2%
  "初级子弹零件": [17640, 18360],
  "望远镜": [10780, 11220],
  "女郎": [14700, 15300],
  "鸟雕": [9800, 10200],
    "绝密服务器": [2080000, 2080000],
  "云存储阵列": [1460000, 1460000],
  "已封存音源": [500000, 500000],
  "潮汐监狱地图-4": [370000, 370000],
  "量子存储": [290000, 290000],
  "实验数据": [240000, 240000],
  "Alpha脑机实验数据-渡鸦": [180000, 180000],

  // 金品 ±2%
  "阵列服务器": [833000, 867000],
  "军用地图匣": [147000, 153000],
  "脑机relink医疗报告": [166600, 173400],
  "A作战计划书": [98000, 102000],
  "潮汐监狱地图-3": [77420, 80580],
  "航天测试数据": [73500, 76500],
  "资料：设计图纸": [69580, 72420],
  "藏秘筒": [56840, 59160],
  "潮汐监狱地图-2": [26460, 27540],
  "潮汐监狱地图-1": [13720, 14280],

  // 紫品 ±2%
  "加密路由器": [49000, 51000],
  "残缺的档案": [25480, 25480],
  "阿萨拉卫队机密档案": [26460, 27540],
  "袖珍录像带": [18620, 19380],
  "军事情报": [11760, 12240],

  // 蓝品 ±2%
  "军情录音": [28420, 28420],
  "情报文件": [14700, 15300],
  "商业文件": [7840, 8160],

  // 绿品 ±2%
  "私密笔记簿": [4900, 5100],
  "签章联运单": [4900, 5100],
  "个人信笺": [3920, 4080],
  "建筑图纸5号": [3920, 4080],
  "建筑图纸1号": [3920, 4080],

  // 白品 ±2%
  "军情照片": [1960, 2040],
  "人像照片": [1960, 2040],
  "当地小报": [1960, 2040],
  "物流信息单": [980, 1020],
  "资料残页": [980, 1020],
   "微型反应炉": [5862000, 5862000],
  "试制聚变供能单元": [2126000, 2126000],
  "动力电池组": [2180000, 2180000],
  "装甲车电池": [6700000, 6700000],
  "高能瓦斯罐": [520000, 520000],

  // 金品 ±2%
  "燃料电池": [382200, 397800],
  "电子氟化液": [215600, 224400],
  "高性能燃油": [143080, 148920],
  "固体燃料": [66640, 69360],

  // 紫品 ±2%
  "电动车电池": [88200, 91800],
  "军用露营灯": [45080, 46920],
  "燃气喷灯": [33320, 34680],
  "便携生存套组": [25480, 26520],
  "信号棒": [22540, 23460],

  // 蓝品 ±2%
  "轻型户外炉具": [22540, 23460],
  "燃气罐": [21560, 22440],
  "低级燃料": [13720, 13720],
  "狩猎火柴": [8820, 9180],
  "多用途电池": [8820, 9180],

  // 绿品 ±2%
  "充电电池组": [2940, 3060],
  "9V电池": [2940, 3060],

  // 白品 ±2%
  "盒装蜡烛": [1960, 2040]
};

// ==========================================
// 🌟 2. 核心掉落池 (按分类和稀有度拆分)
// ==========================================
const itemPools = {
    "电子物品": {
        "红": ["便携军用雷达", "曼德尔超算单元", "高速磁盘阵列", "刀片服务器", "飞行记录仪", "笔记本电脑", "军用信息终端", "军用电台", "摄影机", "军用无人机", "军用控制终端", "显卡", "电子脚镣", "定位接收器", "恒星敏感器"],
        "金": ["大型电台", "脑机头戴设备", "军用卫星通讯仪", "单反相机", "军用望远镜", "镜头", "军用弹道计算机", "卫星电话", "高速固态硬盘", "CPU", "数码相机", "可编程处理器", "手机", "军用网络模块", "脑机控制端子"],
        "紫": ["军用热像仪", "已损坏的热像仪", "广角镜头", "专业声卡", "ASOS电脑主板", "固态硬盘", "GS5手柄", "便携音响", "内存条", "HIFI声卡", "收音机", "间谍笔", "电子干扰器"],
        "蓝": ["太阳能板", "液晶显示屏", "电子温度计", "U盘", "军用移动电源", "摄像头", "继电器", "存储卡", "音频播放器"],
        "绿": ["电源", "DVD光驱", "键盘", "风冷散热器", "超高频读卡器", "电容", "机械硬盘", "印刷电路板", "手机电池"],
        "白": ["鼠标"]
    },
    "工艺藏品": {
        "红": ["鎏金卡牌", "名贵机械表", "赛伊德怀表", "金条", "化石", "黄金瞪羚", "天圆地方", "黄金鳄鱼头雕像", "非洲之心"],
        "金": ["小珍珠", "金币", "八音盒", "金笔", "阿萨拉特色酒杯", "功绩勋章", "陶俑", "座钟", "本地特色首饰","麦小鼠"],
        "紫": ["后妈耳环", "图腾箭矢", "优雅咖啡杯", "牛角", "黄金饰章", "海盗弯刀", "酒壶", "风情水壶", "提灯", "仪式匕首", "马赛克灯台"],
        "蓝": ["初级子弹零件", "望远镜", "女郎", "鸟雕"]
    },
	"医疗道具": {
        "红": ["复苏呼吸机", "ECMO", "自动体外除颤器", "医疗机械人", "呼吸机"],
        "金": ["便携氧气筒", "静脉定位器", "心脏支架", "哮喘吸入器", "血氧仪", "体内除颤器", "滤毒罐"],
        "紫": ["离心机", "生化培养箱", "血压仪", "人工膝关节", "无菌敷料包"],
        "蓝": ["医疗无人机", "骨锯", "电子显微镜", "听诊器", "医用酒精", "额温枪"],
        "绿": ["输液工具", "小药瓶", "注射器", "手术镊子", "盐溶液", "牙膏"],
        "白": ["试管", "外科手套", "手术剪刀"]
    },
    "工具材料": {
       "红": ["强化碳纤维板", "军用炮弹", "超声波切割刀"],
       "金": ["军用炸药", "紫外线灯", "液压破门器", "陆军万用表", "移动电缆"],
       "紫": ["自旋手锯", "粉碎钳", "联名手电筒", "植物样本", "聚乙烯纤维", "特种钢"],
       "蓝": ["水泥", "电钻", "油漆", "破障锤", "芳纶纤维", "火药", "枪械零件", "高精度卡尺", "转换插座石工锤"],
       "绿": ["手锯", "水平仪", "压力计", "原木木板", "电动爆破锤", "角磨机", "喷漆", "LED灯管", "螺丝刀电笔", "模拟温度计", "尖嘴钳", "插座", "电线", "波纹软管", "扳手"],
       "白": ["羊角锤", "钉子直角尺", "工具刀", "油漆刷", "胶带", "精密工具组", "防水胶布", "网线", "音波测距卷尺"]
    },
    "家居物品": {
        "红": ["扫拖一体机器人", "强力吸尘器", "奥荊薇娅稥槟", "钻石鱼子酱"],
        "金": ["盒装挂耳咖啡", "飞行员眼镜", "蓝宝石龙舌兰", "咖啡", "纯金打火机", "营养粥罐头", "海鲜粥罐头"],
        "紫": ["胶囊咖啡机套组", "小糖人姜饼人", "鳄鱼蛋", "清新橘味能量凝胶", "生津柠檬茶"],
        "蓝": ["阿萨拉时尚周刊", "摩卡咖啡壸", "木雕烟斗", "军用罐头", "三角洲特种部队：刺刀特遣队", "维生素泡腾片", "英弎袋泡茶", "大豆蛋白粉包", "可乐", "香喷喷炒面", "糖三角", "三角洲特种部队：黑鹰坠落-战队之刃"],
        "绿": ["调料套组", "阿萨拉新闻周刊", "袋装咖啡豆", "阿萨拉娱乐月刊", "酒店宣传海报", "野外能量棒", "当地再制咖啡", "强力胶", "迷你氢电池", "电火机", "苹果", "无糖缓释能量棒", "纯净水"],
        "白": ["胡椒甁", "基础蛋白粉", "干脆面", "酸奶"]
    },
    "资料情报": {
        "红": ["绝密服务器", "云存储阵列", "Alpha脑机实验数据-渡鸦", "阵列服务器", "潮汐监狱地图-4"],
        "金": ["量子存储", "脑机relink医疔报告", "A作战计划书", "潮汐监狱地图-3", "潮汐监狱地图-2", "阿萨拉卫队机密档案"],
        "紫": ["潮汐监狱地图-1", "军用地图匣", "航天测试数据", "藏秘筒", "军事情报"],
        "蓝": ["实验数据", "资料：设计图纸", "加密路由器", "袖珍录像带", "军情录音", "建筑图纸5号"],
        "绿": ["残缺的档案", "情报文件", "商业文件", "私密笔记簿", "建筑图纸1号"],
        "白": ["签章联运单", "个人信笺", "军情照片", "人像照片", "当地小报", "物流信息单", "资料残页"]
    },
    "能源燃料": {
        "红": ["高能瓦斯罐","微型反应炉", "试制聚变供能单元", "动力电池组"],
        "金": [ "固体燃料","燃料电池", "高性能燃油","装甲车电池", "电子氟化液"],
        "紫": [ "轻型户外炉具", "多用途电池","军用露营灯","信号棒", "燃气喷灯","便携生存套组", "电动车电池"],
        "蓝": [ "燃气罐","狩猎火柴", "电动车电池",  "低级燃料"],
        "绿": [ "9V电池", "充电电池组"],
        "白": [  "盒装蜡烛"]
    },
	"武器道具": {
        "红": ["R93狙击步枪"],
        "金": ["Car15"],
        "紫": ["Uzi"]
    }
};

// ==========================================
// 📦 3. 容器掉落规则配置
// ==========================================
const containerRules = {
    "大保险": { type: "byQuality", categories: ["工艺藏品"], rates: { "蓝": 50, "紫": 30, "金": 15, "红": 4.9, "终极红": 0.1 } },
    "小保险": { type: "byQuality", categories: ["工艺藏品"], rates: { "蓝": 60, "紫": 25, "金": 12, "红": 2.95, "终极红": 0.05 } },
    "服务器": { type: "byQuality", categories: ["电子物品"], rates: { "白": 20, "绿": 30, "蓝": 30, "紫": 15, "金": 4, "红": 1 } },
    "普通密码电脑": { type: "byFixedItems", items: [ { name: "机械硬盘", rate: 30 }, { name: "U盘", rate: 30 }, { name: "电子干扰器", rate: 15 }, { name: "内存条", rate: 15 }, { name: "固态硬盘", rate: 6 }, { name: "高速固态硬盘", rate: 2 }, { name: "实验数据", rate: 1 }, { name: "量子存储", rate: 1 } ] },
    "电脑主机": { type: "byQuality", categories: ["电子物品"], rates: { "白": 30, "绿": 30, "蓝": 20, "紫": 15, "金": 4, "红": 1 } },
    "动力武器盒子": { type: "byQuality", categories: ["武器道具"], rates: { "紫": 60, "金": 30, "红": 10 } },
    "弹药箱": { type: "byFixedItems", items: [ { name: "Uzi子弹", rate: 60, price: 1000 }, { name: "Car15子弹", rate: 30, price: 2000 }, { name: "R93狙击步枪子弹", rate: 10, price: 5000 } ] },
    "工具柜": { type: "byQuality", categories: ["工具材料"], rates: { "白": 50, "绿": 30, "蓝": 9, "紫": 6, "金": 4.5, "红": 0.5 } },
    "收纳盒": { type: "byQuality", categories: ["工具材料", "家居物品", "能源燃料"], rates: { "白": 40, "绿": 30, "蓝": 19, "紫": 6, "金": 4.5, "红": 0.5 } },
    "白色衣服": { type: "byQuality", categories: ["家居物品"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4.5, "红": 0.5 } },
    "医疗包": { type: "byQuality", categories: ["医疗道具"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4.5, "红": 0.5 } },
    "医疗堆": { type: "byQuality", categories: ["医疗道具"], rates: { "白": 20, "绿": 40, "蓝": 10, "紫": 15, "金": 12, "红": 3 } },
    "旅行包": { type: "byQuality", categories: ["家居物品", "工具材料", "能源燃料"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4, "红": 1 } },
    "手提箱": { type: "byQuality", categories: ["资料情报"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4.5, "红": 0.5 } },
    "高级储物箱": { type: "byQuality", categories: ["家居物品", "工具材料", "资料情报"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4, "红": 1 } },
    "高级行李箱": { type: "byQuality", categories: ["家居物品"], rates: { "白": 40, "绿": 30, "蓝": 13, "紫": 12, "金": 4, "红": 1 } },
    "航空箱": { type: "byQuality", categories: ["电子物品", "医疗道具", "工具材料", "家居物品","能源燃料" ,"资料情报"], rates: { "白": 30, "绿": 30, "蓝": 23, "紫": 10, "金": 5, "红": 1 } },
    "鸟窝": { type: "byQuality", categories: ["电子物品", "医疗道具", "工具材料", "家居物品"], rates: { "白": 30, "绿": 30, "蓝": 23, "紫": 10, "金": 5, "红": 1 } },
    "下水井盖": { type: "byQuality", categories: ["电子物品", "医疗道具", "工具材料", "家居物品", "资料情报"], rates: { "白": 30, "绿": 30, "蓝": 23, "紫": 10, "金": 5, "红": 1 } }
};

// ==========================================
// 🗺️ 4. 地图节点、连线与容器分布数据
// ==========================================
// 【已完美替换为你提供的精细化路线与固定出生点】
const spawns = [
    "西楼垃圾桶门前", "西楼管道一号位", "西侧管道内", "西侧管道外", "水泥厂宿舍", "河滩", "西侧撤离流放位",
    "东楼外货车侧面", "东楼外卡车通道", "大坝顶", "游客中心南侧流放位", "游客中心大门口", "游客西侧马路", "变电站南侧土坡"
];

const mapGraph = {
    "西楼垃圾桶门前": ["行政楼西", "军营", "水泥厂", "东楼外卡车通道"],
    "西楼管道一号位": ["行政楼西", "军营", "行政楼北侧集装箱"],
    "西侧撤离流放位": ["施工工地", "河滩", "水泥厂"],
    "河滩": ["水泥厂", "施工工地", "小桥"],
    "水泥厂宿舍": ["水泥厂", "河滩", "军营", "西侧管道外"],
    "西侧管道内": ["军营", "西侧管道外"],
    "西侧管道外": ["西侧管道内", "水泥厂宿舍", "施工工地"],
    "东楼外货车侧面": ["东楼停车场", "养护站", "变电站", "东楼外卡车通道"],
    "东楼外卡车通道": ["东楼停车场", "东楼外货车侧面", "西楼垃圾桶门前", "变电站"],
    "大坝顶": ["坝顶狙击点", "游客中心大门口", "养护站"],
    "游客中心南侧流放位": ["游客中心", "游客西侧马路"],
    "游客中心大门口": ["游客中心", "大坝顶", "养护站"],
    "游客西侧马路": ["游客中心", "野营基地", "养护站", "游客中心南侧流放位", "变电站南侧土坡"],
    "变电站南侧土坡": ["变电站", "备用电站", "野营基地", "游客西侧马路"],
    "行政楼西": ["西楼垃圾桶门前", "西楼管道一号位"],
    "行政楼东": ["东楼停车场"],
    "军营": ["西楼垃圾桶门前", "西楼管道一号位", "西侧管道内", "水泥厂宿舍"],
    "水泥厂": ["西楼垃圾桶门前", "西侧撤离流放位", "河滩", "水泥厂宿舍"],
    "施工工地": ["西侧撤离流放位", "河滩", "西侧管道外", "水泥厂宿舍"], // 已修复你的重复项
    "小桥": ["河滩", "备用电站"],
    "行政楼北侧集装箱": ["西楼管道一号位", "东楼停车场"],
    "东楼停车场": ["东楼外货车侧面", "东楼外卡车通道", "行政楼北侧集装箱", "行政楼东"],
    "变电站": ["东楼外货车侧面", "东楼外卡车通道", "变电站南侧土坡"],
    "备用电站": ["变电站南侧土坡", "小桥"],
    "野营基地": ["游客中心", "变电站南侧土坡"],
    "游客中心": ["游客中心南侧流放位", "游客中心大门口", "游客西侧马路"],
    "养护站": ["东楼外货车侧面", "大坝顶", "游客中心大门口", "游客西侧马路"],
    "坝顶狙击点": ["行政楼北侧集装箱","东楼停车场","大坝顶", "行政楼东"]
};

const mapLoots = {
    "军营": [ {name: "土坡帐篷-医疗包", type: "医疗包"}, {name: "土坡帐篷-弹药箱", type: "弹药箱"}, {name: "活动板房-密码电脑", type: "普通密码电脑"}, {name: "活动板房-杂物盒", type: "收纳盒"} ],
    "水泥厂": [ {name: "宿舍-杂物盒1", type: "收纳盒"}, {name: "宿舍-杂物盒2", type: "收纳盒"}, {name: "高架平台-航空箱", type: "航空箱"}, {name: "高架平台-武器盒1", type: "动力武器盒子"}, {name: "高架平台-武器盒2", type: "动力武器盒子"}, {name: "主体房-航空箱", type: "航空箱"}, {name: "办公室-白色衣服", type: "白色衣服"}, {name: "办公室-电脑主机", type: "电脑主机"} ],
    "变电站": [ {name: "一楼办公室-白色衣服", type: "白色衣服"}, {name: "二楼书桌-服务器", type: "服务器"}, {name: "技术室-大保险箱", type: "大保险"}, {name: "技术室-服务器1", type: "服务器"}, {name: "技术室-服务器2", type: "服务器"}, {name: "技术室-白色衣服1", type: "白色衣服"}, {name: "技术室-白色衣服2", type: "白色衣服"} ],
    "备用电站": [ {name: "发电机房-航空箱", type: "航空箱"}, {name: "发电机房-杂物盒", type: "收纳盒"}, {name: "宿舍-小保险箱", type: "小保险"}, {name: "宿舍-电脑主机", type: "电脑主机"}, {name: "宿舍-杂物盒", type: "收纳盒"} ],
    "游客中心": [ {name: "一楼办公室-电脑主机", type: "电脑主机"}, {name: "一楼大厅-高级行李箱1", type: "高级行李箱"}, {name: "一楼出口-高级行李箱2", type: "高级行李箱"}, {name: "一楼大厅沙发-手提箱1", type: "手提箱"}, {name: "一楼大厅-手提箱2", type: "手提箱"}, {name: "二楼贵宾室-高级行李箱", type: "高级行李箱"}, {name: "二楼贵宾室-小保险箱", type: "小保险"} ],
    "行政楼北侧集装箱": [ {name: "露天——航空箱", type: "航空箱"}, {name: "集装箱内—航空箱", type: "航空箱"}, {name: "医疗包", type: "医疗包"}, {name: "医疗堆", type: "医疗堆"}, {name: "杂物盒", type: "收纳盒"}, {name: "白色衣服", type: "白色衣服"} ],
    "野营基地": [ {name: "医疗包", type: "医疗包"}, {name: "杂物盒", type: "收纳盒"} ],
    "养护站": [ {name: "杂物盒", type: "收纳盒"} ],
    "施工工地": [ {name: "杂物盒", type: "收纳盒"} ],
    "东楼停车场": [ {name: "厂房—航空箱", type: "航空箱"},{name: "东厂房—杂物盒", type: "收纳盒"} ,{name: "损坏的汽车——下水井盖", type: "下水井盖"} ],
    "坝顶狙击点": [ {name: "杂物盒", type: "收纳盒"},{name: "白色集装箱——旅行包", type: "旅行包"},{name: "狙击平台—鸟窝", type: "鸟窝"} ],
    "河滩": [ {name: "方形管道——旅行包", type: "旅行包"},{name: "地下管道—鸟窝", type: "鸟窝"}  ],
    "小桥": [ {name: "杂物盒", type: "收纳盒"} ]
};

const complexBuildings = {
    "行政楼西": { "一楼": [ {name: "大厅-工具柜", type: "工具柜"},{name: "服务机房-服务器", type: "服务器"} ], "二楼": [ {name: "阳台房-电脑主机", type: "电脑主机"}, {name: "阳台房-小保险", type: "小保险"}, {name: "二楼走廊-工具柜", type: "工具柜"}, {name: "拉闸房-服务器", type: "服务器"} ], "负一楼": [ {name: "闭塞房间-高级储物箱", type: "高级储物箱"}, {name: "闭塞房间-白色衣服", type: "白色衣服"}, {name: "地下控制室-电脑主机", type: "电脑主机"} ], "connections": ["一楼", "二楼", "负一楼"] },
    "行政楼东": { "一楼": [ {name: "接待室-高级行李箱", type: "高级行李箱"}, {name: "办公室-白色衣服", type: "白色衣服"}, {name: "沙发-医疗包", type: "医疗包"}, {name: "设备房-白色衣服", type: "白色衣服"} ], "二楼": [ {name: "经理室-手提箱1", type: "手提箱"}, {name: "经理室-手提箱2", type: "手提箱"}, {name: "暗房-普通密码电脑", type: "普通密码电脑"} ], "负一楼": [ {name: "负一楼-旅行包", type: "旅行包"}, {name: "露天电脑台-普通密码电脑", type: "普通密码电脑"} ], "connections": ["一楼", "二楼", "负一楼"] }
};

// ==========================================
// ⚙️ 5. 游戏状态与核心逻辑
// ==========================================
let player = { hero: '', kit: '', hp: 100, steps: 30, armor: 0, helmet: 0, currentLocation: '', currentFloor: '', inventory: [], maxInv: 15 };
let lootedContainers = [];
let pendingItems = []; 
let isCombat = false; 
let isBossAlive = false; 
let bossPresentThisGame = false; 
let currentEnemyType = "normal"; 

// 游戏初始化
window.onload = function() {
    // 🌟 加上你需要的首页背景图
    document.body.style.backgroundImage = "url('三角洲行动.png')";
    
    const user = localStorage.getItem('delta_user');
    if (user) {
        document.getElementById('logged-user').innerText = user;
        showScreen('screen-main-menu');
    }
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showLoginBox() { 
    showScreen('screen-login'); 
}

function handleLogin() {
    // 🌟 加上了 .trim() 防止玩家不小心打了空格
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    
    if (user === '' || pass === '') {
        alert('请输入账户和密码！');
        return;
    }
    
    localStorage.setItem('delta_user', user);
    document.getElementById('logged-user').innerText = user;
    showScreen('screen-main-menu');
}

function logout() {
    localStorage.removeItem('delta_user');
    // 🌟 登出时清空输入框，保护隐私
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showScreen('screen-login');
}

function openStorage() {
    showScreen('screen-storage');
    switchStorageTab('电子物品'); 
    let storageKey = `delta_storage_${localStorage.getItem('delta_user') || 'default_user'}`;
    let storage = JSON.parse(localStorage.getItem(storageKey)) || [];
    let total = storage.reduce((sum, item) => sum + (item.val || 0), 0);
    document.getElementById('total-storage-val').innerText = total;
}

function getCategory(itemName) {
    for (const [cat, pools] of Object.entries(itemPools)) {
        for (const [qual, items] of Object.entries(pools)) {
            if (items.includes(itemName)) return cat;
        }
    }
    if (["Uzi", "Car15", "R93狙击步枪", "Uzi子弹", "Car15子弹", "R93狙击步枪子弹"].includes(itemName)) return "武器道具";
    return "其他"; 
}

function switchStorageTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.innerText === tabName) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const storageKey = `delta_storage_${localStorage.getItem('delta_user') || 'default_user'}`;
    const storage = JSON.parse(localStorage.getItem(storageKey)) || [];
    const itemCounts = {};

    storage.forEach(item => {
        if (getCategory(item.name) === tabName) {
            if (!itemCounts[item.name]) itemCounts[item.name] = { count: 0, val: item.val };
            itemCounts[item.name].count++;
        }
    });

    const container = document.getElementById('storage-items-container');
    container.innerHTML = '';
    for (const [name, data] of Object.entries(itemCounts)) {
        container.innerHTML += `
            <div class="storage-item">
                <div class="count">x${data.count}</div>
                <div>${name}</div>
                <span class="item-val">$${data.val}</span>
            </div>
        `;
    }
}

// 【修复：去掉了动态生成 spawns 的代码，保证使用你配置的固定出生点】
function selectMap(mapName) {
    showScreen('screen-hero');
}

function selectHero(name) { player.hero = name; showScreen('screen-kit'); }

function selectKit(name) {
    player.kit = name;
    if (name === '平衡套') { player.armor = 50; player.helmet = 30; player.maxInv = 15; }
    else if (name === '生存套') { player.armor = 60; player.helmet = 35; player.maxInv = 15; }
    else if (name === '火力套') { player.armor = 60; player.helmet = 35; player.maxInv = 10; }
    
    if (Math.random() < 0.5) complexBuildings["行政楼西"]["二楼"].push({name: "阳台房-大保险箱", type: "大保险"});
    else complexBuildings["行政楼东"]["二楼"].push({name: "经理室-大保险箱", type: "大保险"});

    bossPresentThisGame = Math.random() < 0.50; 
    isBossAlive = bossPresentThisGame;

    const randSpawn = spawns[Math.floor(Math.random() * spawns.length)];
    player.currentLocation = randSpawn;
    player.currentFloor = complexBuildings[randSpawn] ? "一楼" : "";
    
    initGameUI();

    initNpcCombat();
    updateHeroImage();
    showScreen('screen-game');
    log(`你作为【${player.hero}】在【${randSpawn}】复活，开始行动！`);
    updateBackground(randSpawn); 
}

function initGameUI() {
    document.getElementById('ui-hero').innerText = player.hero;
    document.getElementById('ui-kit').innerText = player.kit;
    document.getElementById('ui-inv-max').innerText = player.maxInv;
    updateStatusUI();
}

function updateHeroImage() {
    const heroImg = document.getElementById('current-hero-img');
    if (!heroImg) return;

    // 根据你代码中 player.hero 的值来匹配对应的图片文件名
    // 假设你的图片文件名分别是 luna.png, kai.png, vyron.png
    let imgSrc = "";
    
    switch(player.hero) {
        case "露娜":
            imgSrc = "hero_luna.png"; // 替换为你实际的图片文件名
            break;
        case "红狼":
            imgSrc = "hero_redwolf.png";
            break;
        case "蜂医":
            imgSrc = "hero_beemedic.png";
            break;
        default:
            imgSrc = "placeholder.jpg"; 
    }

    if (imgSrc) {
        heroImg.src = imgSrc;
        heroImg.style.display = "block"; // 选完人后显示图片
    }
}

// 在你切换到 screen-game 的那个函数里，记得调用一下它：
// function startGame() {
//    ... 其他逻辑
//    updateHeroImage(); 
//    showScreen('screen-game');
// }

function updateBackground(location) {
    const bgm = document.getElementById('boss-bgm');
    const isInAdminBuilding = (location === "行政楼西" || location === "行政楼东");
    
    if (isInAdminBuilding && isBossAlive) {
        if (bgm.paused) {
            bgm.play().catch(e => console.log("音频播放被拦截。"));
        }
    } else {
        bgm.pause();
        bgm.currentTime = 0; 
    }
	
    // 顺手把你可能存在的背景图也加进去了
    const locationsWithBg = [
        "行政楼西", "行政楼东", "东楼停车场","水泥厂", "河滩", "西侧管道内", "西侧管道外", "施工工地", 
        "西侧撤离流放位", "军营", "变电站", "备用电站", "游客中心", "行政楼北侧集装箱", 
        "野营基地", "养护站", "坝顶狙击点", "小桥", "西楼垃圾桶门前", "西楼管道一号位", 
        "水泥厂宿舍", "东楼外货车侧面", "东楼外卡车通道", "大坝顶", "游客中心南侧流放位", 
        "游客中心大门口", "游客西侧马路", "变电站南侧土坡"
    ];

    if (locationsWithBg.includes(location)) {
        document.body.style.backgroundImage = `url('${location}.png')`;
    } else {
        document.body.style.backgroundImage = "none";
    }
} 

// ==========================================
// 🎨 6. UI 更新与交互逻辑
// ==========================================
function updateStatusUI() {
    document.getElementById('ui-hp').innerText = player.hp;
    document.getElementById('ui-armor').innerText = player.armor;
    document.getElementById('ui-helmet').innerText = player.helmet;
    document.getElementById('ui-location').innerText = player.currentLocation;
    document.getElementById('ui-floor').innerText = player.currentFloor ? `(${player.currentFloor})` : '';
    document.getElementById('ui-inv-count').innerText = player.inventory.length;

    const uiSteps = document.getElementById('ui-steps');
    if (uiSteps) {
        uiSteps.innerText = player.steps;
        // 剩余不到 5 步时变红，增加紧张感
        uiSteps.style.color = player.steps <= 5 ? "#ff1744" : "#000";
    }
    
    const invDiv = document.getElementById('ui-inventory');
    invDiv.innerHTML = '';
    let totalVal = 0;
    
    player.inventory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-slot';
        div.innerHTML = `
            <span>${item.name}</span>
            <div style="display:flex; align-items:center;">
                <span style="color:#ffb74d;">$${item.val}</span>
                <button class="discard-btn" onclick="discardItem(${index})">🗑️</button>
            </div>
        `;
        invDiv.appendChild(div);
        totalVal += item.val;
    });
    document.getElementById('ui-value').innerText = totalVal;

    const pendingArea = document.getElementById('pending-items-area');
    const pendingDiv = document.getElementById('ui-pending-items');
    pendingDiv.innerHTML = '';
    if (pendingItems.length > 0) {
        pendingArea.style.display = 'block';
        pendingItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'temp-item-box';
            div.innerHTML = `
                <span>${item.name} ($${item.val})</span>
                <button style="background:#2e7d32; color:white; border:none; padding:4px 8px; border-radius:3px; cursor:pointer;" 
                        onclick="confirmPickUp(${index})">捡起</button>
            `;
            pendingDiv.appendChild(div);
        });
    } else {
        pendingArea.style.display = 'none';
    }

    const floorBox = document.getElementById('floor-buttons');
    const btnBox = document.getElementById('action-buttons');
    const combatBox = document.getElementById('combat-buttons');
    const combatStatus = document.getElementById('combat-status');
    const extractBtn = document.getElementById('btn-extract');
    const shootBtn = document.getElementById('btn-shoot');
    
    floorBox.innerHTML = '';
    btnBox.innerHTML = '';

    if (isCombat) {
        floorBox.style.display = 'none';
        btnBox.style.display = 'none';
        extractBtn.style.display = 'none';
        combatBox.style.display = 'block';
        combatStatus.style.display = 'block';
        
        if (currentEnemyType === "boss") {
            combatStatus.className = "combat-alert";
            combatStatus.style.background = "rgba(183, 28, 28, 0.4)";
            combatStatus.style.border = "1px solid #b71c1c";
            combatStatus.style.color = "#ff8a80";
            combatStatus.innerText = "🚨 战栗！你遭遇了【卫队长官赛伊德】！请小心应对！";
            shootBtn.style.background = "var(--btn-boss)";
            shootBtn.innerText = "💥 殊死一搏 (Boss战)";
        } else {
            combatStatus.className = "combat-alert";
            combatStatus.style.background = "rgba(198, 40, 40, 0.2)";
            combatStatus.style.border = "1px solid #c62828";
            combatStatus.style.color = "#ff8a80";
            combatStatus.innerText = "⚠️ 遭遇敌方游荡者，请做出战术抉择！";
            shootBtn.style.background = "var(--btn-combat)";
            shootBtn.innerText = "💥 射击 (正面交火)";
        }
        return; 
    } else {
        floorBox.style.display = 'flex';
        btnBox.style.display = 'block';
        combatBox.style.display = 'none';
        combatStatus.style.display = 'none';
    }
		
    const currentLoc = player.currentLocation;

    if (complexBuildings[currentLoc]) {
        const floors = complexBuildings[currentLoc].connections;
        floors.forEach(fl => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.style.flex = "1";
            btn.style.margin = "0";
            btn.style.background = (player.currentFloor === fl) ? "var(--btn-floor)" : "#4a148c";
            btn.innerText = (player.currentFloor === fl) ? `📍在${fl}` : `去${fl}`;
            btn.onclick = () => { player.currentFloor = fl; log(`你上落到了【${currentLoc} ${fl}】`); checkEnemySpawn(); updateStatusUI(); };
            floorBox.appendChild(btn);
        });
    }

    let currentLoots = [];
    if (complexBuildings[currentLoc]) { currentLoots = complexBuildings[currentLoc][player.currentFloor] || []; } 
    else { currentLoots = mapLoots[currentLoc] || []; }

    currentLoots.forEach(lootObj => {
        const uniqueId = `${currentLoc}-${player.currentFloor}-${lootObj.name}`;
        const isLooted = lootedContainers.includes(uniqueId);
        
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.style.background = isLooted ? "#757575" : "var(--btn-loot)";
        btn.innerText = isLooted ? `已搜刮: ${lootObj.name}` : `🔍 搜刮: ${lootObj.name}`;
        
        if (!isLooted) { btn.onclick = () => loot(lootObj.type, uniqueId); }
        btnBox.appendChild(btn);
    });

    if (currentLoc === "行政楼西" && player.currentFloor === "负一楼") {
        const btn = document.createElement('button'); btn.className = 'btn'; btn.style.background = "#e65100";
        btn.innerText = "➡️ 走负一楼通道前往【行政楼东】";
        btn.onclick = () => { player.currentLocation = "行政楼东"; player.currentFloor = "负一楼"; log("你穿过【负一楼通道】抵达了行政楼东。"); updateBackground("行政楼东"); checkEnemySpawn(); updateStatusUI(); };
        btnBox.appendChild(btn);
    }
    if (currentLoc === "行政楼东" && player.currentFloor === "负一楼") {
        const btn = document.createElement('button'); btn.className = 'btn'; btn.style.background = "#e65100";
        btn.innerText = "⬅️ 走负一楼通道前往【行政楼西】";
        btn.onclick = () => { player.currentLocation = "行政楼西"; player.currentFloor = "负一楼"; log("你穿过【负一楼通道】抵达了行政楼西。"); updateBackground("行政楼西"); checkEnemySpawn(); updateStatusUI(); };
        btnBox.appendChild(btn);
    }
    if (currentLoc === "行政楼西" && player.currentFloor === "二楼") {
        const btn = document.createElement('button'); btn.className = 'btn'; btn.style.background = "#e65100";
        btn.innerText = "➡️ 走二楼连接通道前往【行政楼东】";
        btn.onclick = () => { player.currentLocation = "行政楼东"; player.currentFloor = "二楼"; log("你穿过【二楼连接通道】抵达了行政楼东。"); updateBackground("行政楼东"); checkEnemySpawn(); updateStatusUI(); };
        btnBox.appendChild(btn);
    }
    if (currentLoc === "行政楼东" && player.currentFloor === "二楼") {
        const btn = document.createElement('button'); btn.className = 'btn'; btn.style.background = "#e65100";
        btn.innerText = "⬅️ 走二楼连接通道前往【行政楼西】";
        btn.onclick = () => { player.currentLocation = "行政楼西"; player.currentFloor = "二楼"; log("你穿过【二楼连接通道】抵达了行政楼西。"); updateBackground("行政楼西"); checkEnemySpawn(); updateStatusUI(); };
        btnBox.appendChild(btn);
    }

    const neighbors = mapGraph[currentLoc] || [];
    neighbors.forEach(place => {
        const btn = document.createElement('button'); btn.className = 'btn'; btn.style.background = "var(--btn-move)";
        btn.innerText = `👣 前往: ${place}`;
        btn.onclick = () => moveTo(place);
        btnBox.appendChild(btn);
    });

    if (currentLoc === "西侧撤离流放位" || currentLoc === "游客中心大门口") { extractBtn.style.display = 'block'; } 
    else { extractBtn.style.display = 'none'; }
}

function log(text) {
    const logBox = document.getElementById('game-log');
    logBox.innerHTML += `> ${text}<br/>`;
    logBox.scrollTop = logBox.scrollHeight;
}

function handleGameOver(reason) {
    // 立即停止玩家进一步操作（可选：比如给整个屏幕加个透明遮罩）
    log(`<span style="color:#ff1744; font-weight:bold;">🚨 游戏结束原因：${reason}</span>`);
    
    setTimeout(() => {
        alert(`对局结束：${reason}！你丢失了本局获得的所有物资。`);
        player.inventory = []; 
        // 确保重置玩家状态，防止下次开局步数还是 0
        player.steps = 15; 
        showScreen('screen-main-menu');
    }, 1500);
}

function moveTo(destination) {
    if (player.steps <= 0) {
        log(`<span style="color:#ff1744; font-weight:bold;">🚫 行动耗尽！你已失联...</span>`);
        handleGameOver("失联");
        return;
    }

    player.currentLocation = destination;
    player.currentFloor = complexBuildings[destination] ? "一楼" : "";
    player.steps--;
    log(`你移动到了【${destination}】。`);
    
    updateBackground(destination); 
    pendingItems = []; 
    checkEnemySpawn(); 
    updateStatusUI();
}

function checkEnemySpawn() {
    const loc = player.currentLocation;
    const isInsideAdmin = (loc === "行政楼西" || loc === "行政楼东");
    const isHotZone = (loc === "变电站" || loc === "水泥厂" || loc === "游客中心" || loc === "备用电站" || loc === "军营");
    const roll = Math.random();

    if (isInsideAdmin) {
        if (isBossAlive && roll < 0.40) {
            isCombat = true; currentEnemyType = "boss";
            log(`<span style="color:#e53935;">⚠️ 警告！一梭子子弹朝你扫来，【卫队长官】发现了你！</span>`);
            return;
        }
        if (Math.random() < 0.50) {
            isCombat = true; currentEnemyType = "normal";
            log(`<span style="color:#e53935;">⚠️ 警戒！行政楼内你遭遇了敌方游荡者！被迫进入战斗！</span>`);
        }
    } else if (isHotZone && roll < 0.40) {
        isCombat = true; currentEnemyType = "normal";
        log(`<span style="color:#e53935;">⚠️ 警戒！你在重要据点遭遇了敌方游荡者！被迫进入战斗！</span>`);
    }
}

function combatShoot() {
    const isBoss = (currentEnemyType === "boss");
    log(`你拉动枪栓，向目标猛烈开火！`);
    const hitProb = isBoss ? 0.35 : 0.60;
    
    if (Math.random() < hitProb) {
        if (isBoss) {
            log(`<span style="color:#4caf50;">🎯 轰！你沉着冷静的一枪成功击倒了【卫队长官赛伊德】！</span>`);
            log(`<span style="color:#ffb74d;">🏆 战利品：赛伊德长官倒地死透了，你获得了【长官黄金信物】挂在了待拾取区，请记得拾取！</span>`);
            isBossAlive = false; 
            const bossItemName = "长官黄金信物";
            const range = [90000, 100000];
            const randomVal = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
            pendingItems.push({name: bossItemName, val: randomVal}); 
            updateBackground(player.currentLocation); 
        } else {
            log(`<span style="color:#4caf50;">🎯 你成功击毙了敌方游荡者！战斗结束。</span>`);
            log(`<span style="color:#81c784;">🎁 从敌方的防弹插板上扣下了完好的板子，修复了 10 点身体甲！</span>`);
            player.armor = Math.min(100, player.armor + 10); 
        }
        isCombat = false; 
    } else {
        log(`<span style="color:#ffb300;">💥 你的子弹打偏了，敌人开始猛烈还击！</span>`);
        let damage = isBoss ? 45 : 25; 
        if (player.armor > 0) {
            player.armor -= isBoss ? 30 : 20; player.hp -= isBoss ? 15 : 5;
            if (player.armor < 0) player.armor = 0; 
            log(`<span style="color:#e53935;">💥 敌人的子弹击中你的防弹衣！身体甲减少，健康值受到震荡伤害！</span>`);
        } else {
            player.hp -= damage;
            log(`<span style="color:#e53935;">💔 你的防弹衣已碎！肉身扛下了 ${damage} 点高额伤害！</span>`);
        }
        if (player.hp <= 0) {
            alert(isBoss ? '你被长官的M249撕成了碎片！' : '你已阵亡！搜刮到的所有物资已丢失。');
            location.reload();
        }
    }
    updateStatusUI();
}

function combatRetreat() {
    log(`你选择封烟并寻找掩体，尝试脱离接触...`);
    const isBoss = (currentEnemyType === "boss");
    const retreatProb = isBoss ? 0.20 : 0.40; 
    
    if (Math.random() < retreatProb) {
        log(`<span style="color:#4caf50;">👟 呼，撤退成功！你成功甩掉了敌人。</span>`);
        isCombat = false;
    } else {
        log(`<span style="color:#ffb300;">❌ 撤退失败！敌人的火力太猛了，你被迫退回掩体！</span>`);
        if (player.armor > 0) {
            player.armor -= isBoss ? 25 : 15;
            log(`<span style="color:#e53935;">💥 撤退途中背部中弹！身体甲大幅减少。</span>`);
        } else {
            player.hp -= isBoss ? 30 : 15;
            log(`<span style="color:#e53935;">💔 撤退途中中弹！健康值受到高额伤害！</span>`);
        }
        if (player.hp <= 0) {
            alert('你已阵亡！搜刮到的所有物资已全部丢失。');
            location.reload();
        }
    }
    updateStatusUI();
}

// ==========================================
// 💡 7. 搜刮物品逻辑工具
// ==========================================
function getItemPrice(itemName) {
    const range = allItemValues[itemName];
    if (!range) return 0;
    return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
}

function rollFromPool(category, rates) {
    const pool = itemPools[category];
    if (!pool) return null;

    const rand = Math.random() * 100;
    let cumulative = 0;
    let selectedQuality = "白";

    for (const [quality, rate] of Object.entries(rates)) {
        cumulative += rate;
        if (rand <= cumulative) {
            selectedQuality = quality;
            break;
        }
    }

    let itemsInQuality = pool[selectedQuality];
    if (!itemsInQuality || itemsInQuality.length === 0) {
        const fallbackQualities = ["红", "金", "紫", "蓝", "绿", "白"];
        for (const q of fallbackQualities) {
            if (pool[q] && pool[q].length > 0) {
                selectedQuality = q;
                itemsInQuality = pool[q];
                break;
            }
        }
    }

    if (!itemsInQuality || itemsInQuality.length === 0) return null;
    const randomItemName = itemsInQuality[Math.floor(Math.random() * itemsInQuality.length)];

    return { name: randomItemName, quality: selectedQuality, price: getItemPrice(randomItemName) };
}

function openContainer(containerName) {
    const rule = containerRules[containerName];
    if (!rule) return [];
    
    let dropCount = 1;
    if (containerName === "普通密码电脑" || containerName === "动力武器盒子") {
        dropCount = 1;
    } else {
        const countRand = Math.random() * 100;
        if (countRand <= 30) dropCount = 1;
        else if (countRand <= 80) dropCount = 2;
        else dropCount = 3;
    }

    const lootResults = [];
    for (let i = 0; i < dropCount; i++) {
        let lootedItem = null;
        if (rule.type === "byFixedItems") {
            const rand = Math.random() * 100;
            let cumulative = 0;
            for (const item of rule.items) {
                cumulative += item.rate;
                if (rand <= cumulative) {
                    lootedItem = { name: item.name, quality: "专有", price: item.price || getItemPrice(item.name) };
                    break;
                }
            }
        } else if (rule.type === "byQuality") {
            const randomCategory = rule.categories[Math.floor(Math.random() * rule.categories.length)];
            lootedItem = rollFromPool(randomCategory, rule.rates);
        }

        if (lootedItem) lootResults.push(lootedItem);
    }
    return lootResults;
}

function loot(conType, uniqueId) {
    if (triggerNpcCombat()) {
        return; // 如果打起来了，直接结束，不执行下面的开箱搜刮
    }
    const lootedItems = openContainer(conType);
    pendingItems = []; 
    
    if (lootedItems.length === 0) {
        log(`你在容器里翻找了一番，但里面空空如也...`);
    } else {
        log(`你开始搜刮箱子... 发现了 <span style="color:#ff9800;">${lootedItems.length}</span> 件物品！`);
        lootedItems.forEach(item => {
            item.val = item.price;
            pendingItems.push(item);
            if (item.val >= 50000) {
                 log(`✨ 出货了！你摸出了 <span style="color:#e53935; font-weight:bold;">【${item.name}】</span>($${item.val})！`);
            }
        });
    }
    
    lootedContainers.push(uniqueId);
    updateStatusUI();
}

function confirmPickUp(index) {
    if (index < 0 || index >= pendingItems.length) return;
    const item = pendingItems[index];
    if (player.inventory.length >= player.maxInv) {
        log(`<span style="color:#ffb300;">背包已满，装不下【${item.name}】！请丢弃点垃圾再试。</span>`);
    } else {
        player.inventory.push(item);
        log(`你成功将 <span style="color:#fff59d;">${item.name}</span> 放入背包！`);
        pendingItems.splice(index, 1); 
    }
    updateStatusUI();
}

function discardItem(index) {
    if (index >= 0 && index < player.inventory.length) {
        const item = player.inventory[index];
        player.inventory.splice(index, 1); 
        log(`<span style="color:#ef5350;">🗑️ 你从背包里丢弃了【${item.name}】。</span>`);
        updateStatusUI(); 
    }
}
	
function extract() {
    const bgm = document.getElementById('boss-bgm');
    bgm.pause(); 
    showScreen('screen-result');
    const resItems = document.getElementById('result-items');
    resItems.innerHTML = '';
    let totalVal = 0;
    
    const user = localStorage.getItem('delta_user') || 'default_user';
    const storageKey = `delta_storage_${user}`;
    let storage = JSON.parse(localStorage.getItem(storageKey)) || [];

    player.inventory.forEach(item => {
        const p = document.createElement('p'); p.style.margin = "4px 0";
        p.innerHTML = `📦 ${item.name} - <span style="color:#ffb74d;">$${item.val}</span>`;
        resItems.appendChild(p); 
        totalVal += item.val;
        
        storage.push(item);
    });
    
    localStorage.setItem(storageKey, JSON.stringify(storage));

    document.getElementById('result-value').innerText = totalVal;
    
    if (totalVal >= 3000000) { document.getElementById('result-title').innerText = "🎉 究极肥宅，大金出击！顺利撤离！物品已存入仓库。"; } 
    else if (totalVal > 0) { document.getElementById('result-title').innerText = "✔️ 顺利撤离！满载而归！物品已存入仓库。"; } 
    else { document.getElementById('result-title').innerText = "跑刀仔？你居然空包出来了！"; }
}

// =======================================================
// 🔫 NPC遭遇战系统全家桶（直接粘贴到 game.js 最底部即可）
// =======================================================

// 1. 敌人基础数据
const enemyHeros = ["红狼", "蜂医", "露娜", "威龙", "牧羊人", "乌鲁鲁"];
const enemyWeapons = [
    { name: "Uzi", val: 15000 }, { name: "Car15", val: 30000 },
    { name: "R93狙击步枪", val: 70000 }, { name: "M4A1", val: 45000 },
    { name: "K416", val: 50000 }, { name: "PKM轻机枪", val: 65000 }
];
const enemyLoots = [
    { name: "军情录音", val: 28420 }, { name: "残缺的档案", val: 25480 },
    { name: "三角洲特种部队：刺刀特遣队", val: [11760, 12240]}, { name: "低级燃料", val: 13720 },  
    { name: "液晶显示屏", val: 21560 }, { name: "金币", val: 56840 }
];

// 2. 核心状态变量
let activeEnemyTeams = 0; // 地图上还剩几队
let metEnemyTeams = 0;     // 玩家本局已经遇到了几队

// 3. 【开局初始化函数】
function initNpcCombat() {
    activeEnemyTeams = 5; // 地图上刷新5个队伍
    metEnemyTeams = 0;    // 本局遭遇数归零
    log(`<span style="color:#ffb74d;">【战术简报】除了你们，战场上还检测到 5 支敌方特遣小队活动！</span>`);
}

// 4. 【战斗判定核心函数】
function triggerNpcCombat() {
    // 如果地图没敌人了，或者已经打了3队，就不触发了
    if (activeEnemyTeams <= 0 || metEnemyTeams >= 3) {
        return false; 
    }
    // 20%的概率撞到敌人
    if (Math.random() > 0.20) {
        return false; 
    }

    metEnemyTeams++; // 确定撞上了，遭遇数+1
    
    const randomHero = enemyHeros[Math.floor(Math.random() * enemyHeros.length)];
    const randomWeapon = enemyWeapons[Math.floor(Math.random() * enemyWeapons.length)];
    
    log(`<span style="color:#e53935; font-weight:bold;">⚠️ 遭遇战！你迎面撞上了一支敌方小队！对方是由【${randomHero}】带领的队伍，正手持【${randomWeapon.name}】向你开火！</span>`);

    const fightResult = Math.random();

    if (fightResult <= 0.4) {
        // 40% 概率完好无损击败
        activeEnemyTeams--;
        log(`<span style="color:#4caf50; font-weight:bold;">🎯 【大胜】你展现了惊人的枪法，瞬间团灭了对方！地图上还剩下 ${activeEnemyTeams} 支敌方队伍。</span>`);
        giveCombatLoot(randomWeapon);
    } 
    else if (fightResult <= 0.7) {
        // 30% 概率惨胜
        activeEnemyTeams--; 
        // 💥 这里完美对接你原本的健康值、护甲和头盔变量！
        player.armor = 0;   // 身体防弹衣碎裂
        player.helmet = 0;  // 头盔碎裂
        player.hp = 30;     // 健康值锁死 30！

        log(`<span style="color:#ffb74d; font-weight:bold;">💥 【惨胜】经历了一番惨烈的对枪，你几发子弹飘到敌人脑袋上击杀了对方！但你也付出了惨痛代价：防弹衣和头盔彻底碎裂(归0)，健康值降至 30！地图上还剩下 ${activeEnemyTeams} 支敌方队伍。</span>`);
        log(`<span style="color:#ef5350;">⚠️ 警告：你现在处于极度危险的状态，没有护甲保护，随便挨上一枪都可能致命！</span>`);
       
        giveCombatLoot(randomWeapon);
    } 
    else {
        // 30% 概率被击败
        log(`<span style="color:#ff1744; font-weight:bold;">☠️ 【战败】你被【${randomHero}】使用【${randomWeapon.name}】精准爆头，你倒下了...</span>`);
        setTimeout(() => {
            alert("你被击败了！丢失了本局所有物资。");
            player.inventory = [];
            showScreen('screen-main-menu'); // 滚回主菜单
        }, 1500);
    }

    updateStatusUI(); 
    return true; // 代表触发了战斗
}

// 5. 【生成战利品函数】
function giveCombatLoot(enemyWeapon) {
    let loots = [];
    loots.push(enemyWeapon); // 必定掉落武器
    
    if (Math.random() < 0.5) { // 50%概率摸出敌人捡的大金
        const randomLoot = enemyLoots[Math.floor(Math.random() * enemyLoots.length)];
        loots.push(randomLoot);
    }

    log(`<span style="color:#ffeb3b;">🔍 战胜反馈：你搜刮了敌人的盒子。</span>`);
    
    // 显示到你原本写好的“刚摸出来的物品”区域
    const pendingArea = document.getElementById('pending-items-area');
    const pendingDiv = document.getElementById('ui-pending-items');
    
    if (pendingArea && pendingDiv) {
        pendingArea.style.display = 'block';
        loots.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'loot-item';
            itemDiv.innerHTML = `
                <span>${item.name} ($${item.val})</span>
                <button onclick="pickLoot('${item.name}', ${item.val}, this)">拾取</button>
            `;
            pendingDiv.appendChild(itemDiv);
        });
    }
}
