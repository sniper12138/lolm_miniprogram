//第一部分  日期
var datas = {
	"tree": [{
		"header": "START",
		"tags": ["LANE", "JUNGLE"]
	}, {
		"header": "TOOLS",
		"tags": ["GOLDPER", "CONSUMABLE", "VISION"]
	}, {
		"header": "DEFENSE",
		"tags": ["HEALTH", "HEALTHREGEN", "ARMOR", "SPELLBLOCK"]
	}, {
		"header": "ATTACK",
		"tags": ["LIFESTEAL", "CRITICALSTRIKE", "ATTACKSPEED", "DAMAGE"]
	}, {
		"header": "MAGIC",
		"tags": ["MANA", "SPELLDAMAGE", "COOLDOWNREDUCTION", "MANAREGEN"]
	}, {
		"header": "MOVEMENT",
		"tags": ["BOOTS", "NONBOOTSMOVEMENT"]
	}, {
		"header": "UNCATEGORIZED",
		"tags": ["ACTIVE", "SPELLVAMP", "MAGICPENETRATION", "ARMORPENETRATION", "AURA", "ONHIT", "TRINKET", "SLOW",
			"STEALTH", "TENACITY"
		]
	}],
	"items": [{
		"itemId": 1001,
		"name": "速度之靴",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升移动速度",
		"types": [
			"Boots"
		],
		"description": "限购1个鞋类装备。<br><br>唯一被动—强化移动：+20移动速度"
	},{
		"itemId": 1011,
		"name": "巨人腰带",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升生命值",
		"types": [
			"Health"
		],
		"description": "+300生命值"
	},{
		"itemId": 1018,
		"name": "灵巧披风",
		"price": 800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升暴击几率",
		"types": [
			"CriticalStrike"
		],
		"description": "+15%暴击几率"
	},{
		"itemId": 1026,
		"name": "爆裂魔杖",
		"price": 900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "适度提升法术强度",
		"types": [
			"SpellDamage"
		],
		"description": "+45法术强度"
	},{
		"itemId": 1027,
		"name": "蓝水晶",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升法力值",
		"types": [
			"Mana"
		],
		"description": "+300法力"
	},{
		"itemId": 1028,
		"name": "红水晶",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升生命值",
		"types": [
			"Health"
		],
		"description": "+150生命值"
	},{
		"itemId": 1029,
		"name": "布甲",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升护甲",
		"types": [
			"Armor"
		],
		"description": "+20护甲"
	},{
		"itemId": 1031,
		"name": "锁子甲",
		"price": 900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升护甲",
		"types": [
			"Armor"
		],
		"description": "+40护甲"
	},{
		"itemId": 1033,
		"name": "抗魔斗篷",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升魔法抗性",
		"types": [
			"SpellBlock"
		],
		"description": "+20魔法抗性"
	},{
		"itemId": 1036,
		"name": "长剑",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升攻击力",
		"types": [
			"Damage",
			"Lane"
		],
		"description": "+12攻击力"
	},{
		"itemId": 1038,
		"name": "暴风之剑",
		"price": 1500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升攻击力",
		"types": [
			"Damage"
		],
		"description": "+40攻击力"
	},{
		"itemId": 1042,
		"name": "短剑",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升攻击速度",
		"types": [
			"AttackSpeed"
		],
		"description": "+15%攻击速度"
	},{
		"itemId": 1043,
		"name": "反曲之弓",
		"price": 900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升攻击速度",
		"types": [
			"AttackSpeed",
			"OnHit"
		],
		"description": "+30%的攻击速度"
	},{
		"itemId": 1052,
		"name": "增幅典籍",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升法术强度",
		"types": [
			"SpellDamage"
		],
		"description": "+25法术强度"
	},{
		"itemId": 1053,
		"name": "吸血鬼节杖",
		"price": 1200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "普攻回复生命值",
		"types": [
			"Damage",
			"LifeSteal"
		],
		"description": "+20攻击力<br>+10%生命偷取"
	},{
		"itemId": 1057,
		"name": "负极斗篷",
		"price": 900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "适度提升魔法抗性",
		"types": [
			"SpellBlock"
		],
		"description": "+40魔法抗性"
	},{
		"itemId": 1058,
		"name": "无用大棒",
		"price": 1300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "极大提升法术强度",
		"types": [
			"SpellDamage"
		],
		"description": "+65法术强度"
	},{
		"itemId": 2015,
		"name": "基舍艾斯碎片",
		"price": 900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供攻击速度和可充能的魔法打击",
		"types": [
			"AttackSpeed",
			"OnHit"
		],
		"description": "+20%攻击速度<br><br>唯一被动—盈能：移动和攻击将积攒一次盈能攻击。<br>唯一被动—突震：你的盈能攻击会造成50额外魔法伤害。"
	},{
		"itemId": 3001,
		"name": "深渊面具",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "附近敌人承受更多魔法伤害",
		"types": [
			"Aura",
			"CooldownReduction",
			"Health",
			"HealthRegen",
			"MagicPenetration",
			"Mana",
			"ManaRegen",
			"SpellBlock"
		],
		"description": "+300生命值<br>+300法力值<br>+44魔法抗性<br>+10%冷却缩减<br><br>唯一被动—永恒：承受来自英雄的伤害时，你会回复15%伤害值的法力。花费法力时，你会回复20%法力消耗的生命值，每次施法最多回复25生命值。<br>唯一光环：附近的敌方英雄多承受15%魔法伤害。"
	},{
		"itemId": 3003,
		"name": "大天使之杖",
		"price": 2950,
		"maps": "瓦洛兰城市乐园,嚎哭深渊,召唤师峡谷,扭曲丛林",
		"plaintext": "基于最大法力值提升法术强度",
		"types": [
			"CooldownReduction",
			"Mana",
			"ManaRegen",
			"SpellDamage"
		],
		"description": "+35法术强度<br>+500法力<br>+20%冷却缩减<br><br>唯一被动—敬畏：获得相当于1%最大法力值的法术强度。返还25%的法力花费。<br>唯一被动—法力积攒：你的英雄每次花费法力时，你的最大法力值都会提高12（每12秒最多触发3次）。法力值加成上限为750。<br><br>一旦法力值加成到达750时，这件装备就会变成【炽天使之拥】。<br><br>限持1件眼泪装备。"
	},{
		"itemId": 3004,
		"name": "魔宗",
		"price": 2700,
		"maps": "瓦洛兰城市乐园,嚎哭深渊,召唤师峡谷,扭曲丛林",
		"plaintext": "基于最大法力值提升攻击力",
		"types": [
			"Damage",
			"Mana",
			"ManaRegen",
			"OnHit"
		],
		"description": "+25攻击力<br>+300法力<br><br>唯一被动—敬畏：提供攻击力，相当于你最大法力值的1%。返还15%的法力花费。<br>唯一被动—法力积攒：你的英雄每进行一次普通攻击或花费法力时，你的最大法力值都会提高8（每12秒最多触发3次）。法力值加成上限为700。<br><br><br><br>限持1件眼泪装备。"
	},{
		"itemId": 3009,
		"name": "轻灵之靴",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "增强移动速度并抵抗减速效果",
		"types": [
			"Boots"
		],
		"description": "限购1个鞋类装备。<br><br>唯一被动—强化移动：+50移动速度<br>唯一被动—减速抵抗：移动速度的减缓效果会被降低30%。"
	},{
		"itemId": 3010,
		"name": "万世催化石",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "受伤时回蓝，耗蓝时回血。",
		"types": [
			"Health",
			"HealthRegen",
			"Mana",
			"ManaRegen"
		],
		"description": "+200生命值<br>+300法力<br><br>唯一被动—永恒：承受来自英雄的伤害时，你会回复15%伤害值的法力。<br><br>花费法力时，你会回复20%法力消耗的生命值，每次施法最多回复15生命值。<br><br>（持续消耗法力型技能每秒最多回复15生命值。）"
	},{
		"itemId": 3022,
		"name": "冰霜之锤",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,召唤师峡谷,扭曲丛林",
		"plaintext": "普通攻击使敌人减速",
		"types": [
			"Damage",
			"Health",
			"OnHit",
			"Slow"
		],
		"description": "+550生命值<br>+25攻击力<br><br>唯一被动—钻石星辰击：近战的普通攻击将降低目标40%的移动速度，持续1.5秒。远程的普通攻击将降低目标20%的移动速度，持续1.5秒。"
	},{
		"itemId": 3024,
		"name": "冰川护甲",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升护甲和冷却缩减",
		"types": [
			"Armor",
			"CooldownReduction",
			"Mana"
		],
		"description": "+20护甲<br>+150法力值<br><br>唯一被动：+10%冷却缩减"
	},{
		"itemId": 3025,
		"name": "冰脉护手",
		"price": 2700,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在施法后，普攻会制造一个减速场",
		"types": [
			"Armor",
			"CooldownReduction",
			"Mana",
			"Slow"
		],
		"description": "+50护甲<br>+20%冷却缩减<br>+450法力值<br><br>唯一被动—咒刃：在施放一个技能后，你的下次普通攻击会对一个范围内的所有敌人造成相当于你100%基础攻击力的额外物理伤害，并制造一个持续2秒的冰冷地带，使地带内敌人的移动速度减少30%（1.5秒冷却时间）。<br><br>冰冷地带的半径会随着额外护甲的提升而提升。"
	},{
		"itemId": 3026,
		"name": "守护天使",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,未知,次级架构43,召唤师峡谷",
		"plaintext": "周期性地在英雄死亡时将其复活",
		"types": [
			"Armor",
			"Damage"
		],
		"description": "+45攻击力<br>+40护甲<br><br>唯一被动：你的英雄在受到致命伤害时，会在凝滞4秒后原地复活，恢复50%基础生命值和30%最大法力值（冷却时间：180秒）。"
	},{
		"itemId": 3027,
		"name": "时光之杖",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,嚎哭深渊,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升生命值，法力值和法术强度",
		"types": [
			"Health",
			"HealthRegen",
			"Mana",
			"ManaRegen",
			"SpellDamage"
		],
		"description": "+250生命值<br>+300法力<br>+60法术强度<br><br>被动：每层效果提供+20生命值，+10法力值，以及+6法术强度（最大+200生命值，+100法力值，以及+60法术强度）。每分钟提供1层（最大提供10层）。<br>唯一被动—永恒：承受来自英雄的伤害时，你会回复15%伤害值的法力。花费法力时，你会回复20%法力消耗的生命值，每次施法最多回复25生命值。"
	},{
		"itemId": 3031,
		"name": "无尽之刃",
		"price": 3300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "巨幅加强暴击",
		"types": [
			"CriticalStrike",
			"Damage"
		],
		"description": "+60攻击力<br>+25%暴击几率<br><br>唯一被动：暴击造成230%伤害，而非200%。"
	},{
		"itemId": 3033,
		"name": "凡性的提醒",
		"price": 2650,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "用于对抗拥有高生命回复和高护甲的敌人",
		"types": [
			"ArmorPenetration",
			"Damage"
		],
		"description": "+45攻击力<br><br>唯一被动—最后的轻语： +35%护甲穿透。<br>唯一被动—刽子手：物理伤害会对敌方英雄施加持续5秒的重伤效果。"
	},{
		"itemId": 3035,
		"name": "最后的轻语",
		"price": 1300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "用于对抗拥有高护甲的敌人",
		"types": [
			"ArmorPenetration",
			"Damage"
		],
		"description": "+15攻击力<br><br>唯一被动—最后的轻语： +20%护甲穿透。"
	},{
		"itemId": 3040,
		"name": "炽天使之拥",
		"price": 2950,
		"maps": "水晶之痕,嚎哭深渊,,召唤师峡谷,扭曲丛林",
		"types": [
			"Active"
		],
		"description": "+35法术强度<br>+1200法力<br>+10%冷却缩减<br><br>唯一被动—急速：这个装备提供额外的10%冷却缩减。<br>唯一被动—敬畏：提供法术强度，相当于最大法力值的3%。返还25%的法力花费。<br>唯一主动—法力护盾：消耗15%当前法力值来形成为一个护盾，护盾的生命值等于150+被消耗的法力值，持续2秒（冷却时间：90秒）。<br><br>"
	},{
		"itemId": 3044,
		"name": "净蚀",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "攻击和击杀会给予爆发性的加速效果",
		"types": [
			"Damage",
			"Health",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+175生命值<br>+15攻击力<br><br>唯一被动—狂暴：每次普通攻击后会获得20移动速度，持续2秒。每次击杀单位后，获得60移动速度（与前者不叠加）。这个移动速度加成对远程英雄减半。"
	},{
		"itemId": 3046,
		"name": "幻影之舞",
		"price": 3100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "攻击敌方英雄时移动得更快，并在低血量时提供一层护盾。",
		"types": [
			"AttackSpeed",
			"CriticalStrike",
			"NonbootsMovement"
		],
		"description": "+45%攻击速度<br>+25%暴击几率<br>+5%移动速度<br><br>唯一被动—救主灵刃：在你受到即将使你的生命值降至35%以下的伤害时，为你提供一个护盾，可吸收最多240 - 590伤害，持续5秒(90秒冷却时间)。"
	},{
		"itemId": 3047,
		"name": "忍者足具",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,召唤师峡谷,扭曲丛林",
		"plaintext": "增强移动速度并减少即将到来的普攻伤害",
		"types": [
			"Armor",
			"Boots"
		],
		"description": "限购1个鞋类装备。<br><br>+10护甲<br><br>唯一被动：格挡掉10%的来自普通攻击的伤害。<br>唯一被动—强化移动：+40移动速度"
	},{
		"itemId": 3050,
		"name": "基克的聚合",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在你施放终极技能时，为你和你的队友提供加成。",
		"types": [
			"Active",
			"Armor",
			"Aura",
			"CooldownReduction",
			"Mana",
			"SpellBlock"
		],
		"description": "+40护甲<br>+40魔法抗性<br>+150法力<br>+10%冷却缩减<br><mainText>唯一主动—导管：与一个身上没有现存导管的友方英雄进行绑定。<br>唯一被动：在你的友方英雄附近施放你的终极技能时，可同时在你身边召唤一阵冰霜风暴，并点燃己方友军的普攻，持续10秒。在冰霜风暴中的敌人会被减速20%，并且你友军的攻击会燃烧其目标，在2秒里持续造成共30%额外魔法伤害。<br><br>霜火盟约：当你的冰霜风暴减速到一个正在燃烧的敌人时，风暴会被引燃，每秒造成40魔法伤害并将减速幅度替换为40%，持续3秒。</mainText><br><br>(同一个英雄同一时间只能被一个【基克的聚合】所绑定。)"
	},{
		"itemId": 3052,
		"name": "紫雨林之拳",
		"price": 1200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供攻击力并在击杀单位时叠加生命值",
		"types": [
			"Damage",
			"Health"
		],
		"description": "+15攻击力<br>+200生命值<br><br>"
	},{
		"itemId": 3053,
		"name": "斯特拉克的挑战护手",
		"price": 3200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供抵抗大额爆发伤害的护盾",
		"types": [
			"Damage",
			"Health"
		],
		"description": "+400生命值<br><br>唯一被动—巨人蛮力：提供相当于你50%基础攻击力的额外攻击力<br>唯一被动—救主灵刃：在生命值低于35%时，获得一个护盾，护盾生命值相当于你75%的额外生命值。0.75秒后，护盾会在3秒里持续衰减(冷却时间：90秒)。<br><br>斯特拉克之怒：当<i>救主灵刃</i>触发时，体型和力量获得增长，提供更大的体型，获得+30%韧性，持续3秒。"
	},{
		"itemId": 3057,
		"name": "耀光",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在施法后，为下次普攻提供加成效果",
		"types": [
			"CooldownReduction",
			"Mana"
		],
		"description": "+300法力<br>+10%冷却缩减<br><br>唯一被动—咒刃：施放技能后，你的下一次普通攻击会造成相当于你100%基础攻击力的额外物理伤害（冷却时间：1.5秒）。"
	},{
		"itemId": 3065,
		"name": "振奋盔甲",
		"price": 2900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升生命值和治疗效果",
		"types": [
			"CooldownReduction",
			"Health",
			"HealthRegen",
			"SpellBlock"
		],
		"description": "+350生命值<br>+45魔法抗性<br>+100%基础生命回复<br>+10%冷却缩减<br><br>唯一被动：所受的全部治疗效果提高30%。"
	},{
		"itemId": 3067,
		"name": "燃烧宝石",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升生命值和冷却缩减",
		"types": [
			"CooldownReduction",
			"Health"
		],
		"description": "+175生命值<br><br>唯一被动：+10%冷却缩减"
	},{
		"itemId": 3068,
		"name": "日炎斗篷",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "持续对附近敌人造成伤害",
		"types": [
			"Armor",
			"Health"
		],
		"description": "+400生命值<br>+40护甲<br><br>唯一被动—献祭：在战斗状态下，每秒灼烧附近的敌人造成[26到43]魔法伤害。每过12秒，你的下一个定身技能造成[25到40](+你4%的额外生命值)额外魔法伤害，并释放一次火焰新星，在你周围的区域造成该额外伤害。【献祭】对小兵和野怪的伤害会提升50%。"
	},{
		"itemId": 3070,
		"name": "女神之泪",
		"price": 900,
		"maps": "瓦洛兰城市乐园,嚎哭深渊,召唤师峡谷,扭曲丛林",
		"plaintext": "在花费法力时提升最大法力值",
		"types": [
			"Mana",
			"ManaRegen"
		],
		"description": "+300法力<br><br>唯一被动—敬畏： 返还10%的法力花费。<br>唯一被动—法力积攒：你的英雄每次花费法力时，你的最大法力值就会+6（每12秒最多触发3次）。<br>最多+700法力值。<br><br>限持1件眼泪装备。"
	},{
		"itemId": 3071,
		"name": "黑色切割者",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "对敌人造成物理伤害时会减少目标的护甲",
		"types": [
			"ArmorPenetration",
			"CooldownReduction",
			"Damage",
			"Health",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+350生命值<br>+30攻击力<br><br>唯一被动：对一名敌方英雄造成物理伤害的同时，还会对该英雄施加切割效果，减少目标4%的护甲，持续6秒（最多叠加6次，减少24%护甲）。<br>唯一被动—狂暴：造成物理伤害的同时会提供20移动速度，持续2秒。协助击杀被切割的敌方英雄或击杀任何敌对单位时，提供的移动速度加成会变为60，持续2秒。这个移动速度加成对远程英雄减半。"
	},{
		"itemId": 3072,
		"name": "饮血剑",
		"price": 3400,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供攻击力，生命偷取且生命偷取可过量治疗",
		"types": [
			"Damage",
			"LifeSteal"
		],
		"description": "+65攻击力<br><br>唯一被动： +15%生命偷取<br>唯一被动：你的生命偷取效果可以对你进行过量治疗。溢出的生命力会储存为一个能够抵挡40-320伤害（基于英雄等级）的护盾。<br><br>如果你在之前的10秒里没有造成或承受任何伤害，那么这个护盾会缓慢衰减。"
	},{
		"itemId": 3075,
		"name": "荆棘之甲",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "被普攻时回敬以魔法伤害",
		"types": [
			"Armor",
			"Health",
			"Slow"
		],
		"description": "+200生命值<br>+75护甲<br><br>唯一被动—荆棘：被普通攻击命中时，会回敬给攻击者魔法伤害，数额相当于你10%的额外护甲值加上25，并对攻击者施加重伤效果，持续1秒。<br>"
	},{
		"itemId": 3076,
		"name": "棘刺背心",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "预防敌人在你身上利用生命偷取属性来回复生命值。",
		"types": [
			"Armor"
		],
		"description": "+30护甲<br><br>唯一被动—荆棘：被普通攻击命中时，会回敬给攻击者相当于3加上你10%额外护甲值的魔法伤害，并对攻击者施加重伤效果，持续1秒。"
	},{
		"itemId": 3078,
		"name": "三相之力",
		"price": 3733,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "成吨的伤害",
		"types": [
			"AttackSpeed",
			"CooldownReduction",
			"Damage",
			"Health",
			"Mana",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+200生命值<br>+300法力<br>+20攻击力<br>+40%攻击速度<br>+20%冷却缩减<br>+5%移动速度<br><br>唯一被动—狂暴：每次普通攻击后会获得20移动速度，持续2秒。每次击杀单位后，获得60移动速度（与前者不叠加）。这个移动速度加成对远程英雄减半。<br>唯一被动—咒刃：施放技能后，下一次攻击会造成额外物理伤害，伤害值为基础攻击力的200%（冷却时间：1.5秒）。"
	},{
		"itemId": 3082,
		"name": "守望者铠甲",
		"price": 1050,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在受到敌方英雄普攻时减少其攻速",
		"types": [
			"Armor",
			"Slow"
		],
		"description": "+35护甲<br><br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度，持续1.5秒。"
	},{
		"itemId": 3083,
		"name": "狂徒铠甲",
		"price": 2850,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供巨量生命值和生命回复",
		"types": [
			"CooldownReduction",
			"Health",
			"HealthRegen"
		],
		"description": "+650生命值<br>+200%基础生命回复<br><br>唯一被动： +10%冷却缩减<br>唯一被动：在你拥有至少2500最大生命值时，提供狂徒之心效果。<br><br>狂徒之心：如果在6秒内没有受到伤害（在3秒内没有受到小兵和野怪的伤害），就会每5秒回复25%最大生命值。"
	},{
		"itemId": 3085,
		"name": "卢安娜的飓风",
		"price": 2600,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "远程攻击会对目标身边的2个敌人发射弩箭",
		"types": [
			"AttackSpeed",
			"CriticalStrike",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+45%攻击速度<br>+25%暴击几率<br><br><br>唯一被动—风怒：你的普通攻击会朝2个附近的目标发射微型弩箭，每支弩箭造成（40%攻击力）的物理伤害。这些弩箭能够暴击和附带攻击特效。"
	},{
		"itemId": 3086,
		"name": "狂热",
		"price": 1300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "略微提升暴击几率，移动速度和攻击速度",
		"types": [
			"AttackSpeed",
			"CriticalStrike",
			"NonbootsMovement"
		],
		"description": "+15%攻击速度<br>+10%暴击几率<br><br>唯一被动：+5%移动速度"
	},{
		"itemId": 3087,
		"name": "斯塔缇克电刃",
		"price": 2600,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "移动时积攒充能来让普攻附带一次闪电",
		"types": [
			"AttackSpeed",
			"CriticalStrike",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+35%攻击速度<br>+25%暴击几率<br><br>唯一被动—盈能：移动和攻击将积攒一次盈能攻击。<br>唯一被动—电击：你的盈能攻击会造成120额外魔法伤害。盈能效果可弹射5个目标。"
	},{
		"itemId": 3089,
		"name": "灭世者的死亡之帽",
		"price": 3500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷",
		"plaintext": "巨幅提升法术强度",
		"types": [
			"SpellDamage"
		],
		"description": "+130法术强度<br><br>唯一被动：法术强度提升40%。"
	},{
		"itemId": 3094,
		"name": "疾射火炮",
		"price": 2600,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "移动时积攒充能来释放一次攻城炮击",
		"types": [
			"AttackSpeed",
			"CriticalStrike",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+35%攻击速度<br>+25%暴击几率<br>+5%移动速度<br><br>唯一被动—盈能：移动和攻击将积攒一次盈能攻击。<br>唯一被动—锐眼：你的盈能攻击会造成120额外魔法伤害。盈能攻击获得25%额外距离(最多+150)。"
	},{
		"itemId": 3100,
		"name": "巫妖之祸",
		"price": 3050,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在施法后，为下次普攻提供加成效果",
		"types": [
			"CooldownReduction",
			"Mana",
			"NonbootsMovement",
			"SpellDamage"
		],
		"description": "+80法术强度<br>+5%移动速度<br>+10%冷却缩减<br>+300法力值<br><br>唯一被动—咒刃：施放一次技能后，下一次物理攻击将附带75%基础攻击力（+50%法术强度）的额外魔法伤害（冷却时间：1.5秒）。"
	},{
		"itemId": 3101,
		"name": "蜂刺",
		"price": 1200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升攻击速度和冷却缩减",
		"types": [
			"AttackSpeed",
			"CooldownReduction"
		],
		"description": "+30%攻击速度<br><br>唯一被动：+10%冷却缩减"
	},{
		"itemId": 3108,
		"name": "恶魔法典",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升法术强度和冷却缩减",
		"types": [
			"CooldownReduction",
			"SpellDamage"
		],
		"description": "+35法术强度<br><br>唯一被动：+10%冷却缩减"
	},{
		"itemId": 3111,
		"name": "水银之靴",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升移动速度并降低限制效果的时长",
		"types": [
			"Boots",
			"SpellBlock",
			"Tenacity"
		],
		"description": "限购1个鞋类装备。<br><br>+10魔法抗性<br><br>唯一被动—强化移动：+40移动速度<br>唯一被动—韧性：受到的晕眩、减速、嘲讽、恐惧、沉默、致盲、变形和禁锢的持续时间减少30%。"
	},{
		"itemId": 3113,
		"name": "以太精魂",
		"price": 950,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升法术强度和移动速度",
		"types": [
			"NonbootsMovement",
			"SpellDamage"
		],
		"description": "+35法术强度<br><br>唯一被动：+5%移动速度"
	},{
		"itemId": 3115,
		"name": "纳什之牙",
		"price": 3200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升攻击力，法术强度和冷却缩减",
		"types": [
			"AttackSpeed",
			"CooldownReduction",
			"OnHit",
			"SpellDamage"
		],
		"description": "+50%攻击速度<br>+70法术强度<br><br>唯一被动：+20%冷却缩减。<br>唯一被动：普通攻击会造成15（+15%法术强度）的额外魔法伤害。<br>"
	},{
		"itemId": 3116,
		"name": "瑞莱的冰晶节杖",
		"price": 2700,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "技能使敌人减速",
		"types": [
			"Health",
			"Slow",
			"SpellDamage"
		],
		"description": "+350生命值<br>+70法术强度<br><br>唯一被动：伤害型的法术和技能会使敌人的移动速度减少20%，持续1秒。"
	},{
		"itemId": 3123,
		"name": "死刑宣告",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "用于对抗拥有高生命回复的敌人",
		"types": [
			"Damage"
		],
		"description": "+20攻击力<br><br>唯一被动—死刑宣告：物理伤害会对敌方英雄施加持续3秒的重伤效果。"
	},{
		"itemId": 3133,
		"name": "考尔菲德的战锤",
		"price": 1200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "攻击力和冷却缩减",
		"types": [
			"CooldownReduction",
			"Damage"
		],
		"description": "+25攻击力<br><br>唯一被动： +10%冷却缩减"
	},{
		"itemId": 3134,
		"name": "锯齿短匕",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升攻击力和穿甲",
		"types": [
			"ArmorPenetration",
			"Damage"
		],
		"description": "+20攻击力<br><br>唯一被动： +10穿甲<br>"
	},{
		"itemId": 3135,
		"name": "虚空之杖",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升魔法伤害",
		"types": [
			"MagicPenetration",
			"SpellDamage"
		],
		"description": "+70力量。溶解:+40%魔法穿透。"
	},{
		"itemId": 3136,
		"name": "幽魂面具",
		"price": 1450,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升魔法伤害",
		"types": [
			"Health",
			"SpellDamage"
		],
		"description": "+35法术强度<br>+200生命值<br><br>唯一被动—疯狂：在与英雄作战时，每过1秒，你造成的伤害就会多2%(最大值：10%)。"
	},{
		"itemId": 3140,
		"name": "水银饰带",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "主动施放来移除所有控制效果",
		"types": [
			"Active",
			"SpellBlock"
		],
		"description": "唯一主动—水银：移除你英雄身上的所有控制效果（冷却时间60秒）并增加+50移动速度1.5秒"
	},{
		"itemId": 3142,
		"name": "幽梦之魂",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "主动施放来显著提升移动速度",
		"types": [
			"Active",
			"ArmorPenetration",
			"CooldownReduction",
			"Damage",
			"NonbootsMovement"
		],
		"description": "+50攻击力<br>+10%冷却缩减<br><br>唯一被动：+10穿甲<br>唯一被动：+50非战斗状态下的移动速度<br>唯一主动：提供+25%移动速度，持续4秒。"
	},{
		"itemId": 3143,
		"name": "兰顿之兆",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "显著提升防御属性，主动施放来减速身边的敌人",
		"types": [
			"Active",
			"Armor",
			"Health",
			"Slow"
		],
		"description": "+400生命值<br>+50护甲<br><br>唯一被动：-20%来自普攻的暴击伤害。<br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度，持续1.5秒。<br>"
	},{
		"itemId": 3145,
		"name": "海克斯科技左轮枪",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升法术强度。普攻会周期性附带额外魔法伤害。",
		"types": [
			"SpellDamage"
		],
		"description": "+40法术强度<br><br>唯一被动—魔法弹：用普攻对一名敌方英雄造成伤害的同时会震击该英雄，造成75额外魔法伤害（冷却时间：30秒，与其它海克斯科技装备共享冷却时间）。<br><br>魔法弹的冷却时间可通过主动装备冷却缩减来减少。<br><br>（伤害随等级成长。海克斯科技效果可以触发其它法术特效。）"
	},{
		"itemId": 3146,
		"name": "海克斯科技枪刃",
		"price": 3200,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升攻击力和法术强度，主动施放来减速目标",
		"types": [
			"Active",
			"Damage",
			"LifeSteal",
			"Slow",
			"SpellDamage",
			"SpellVamp"
		],
		"description": "+30攻击力<br>+60法术强度<br><br>唯一被动：造成伤害的15%用来治疗自身。<br>唯一主动—闪电弹：造成100 - 200(+30%法术强度)魔法伤害并使目标英雄的移动速度减少40%，持续2秒（冷却时间：30秒，与其它海克斯科技装备共享冷却时间）。"
	},{
		"itemId": 3147,
		"name": "德拉克萨的暮刃",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "偷袭敌人时造成额外物理伤害",
		"types": [
			"ArmorPenetration",
			"CooldownReduction",
			"Damage",
			"OnHit"
		],
		"description": "+50攻击力<br><br>唯一被动：+15穿甲<br>唯一被动—夜袭者：在脱离敌方视野至少1秒以后，你的下次对敌方英雄发起的普攻将在命中时造成20- 125额外物理伤害并使该英雄减速99%，持续0.25秒。远程攻击不施加减速效果。(在被一名敌方英雄看见后，可持续5秒)。"
	},{
		"itemId": 3151,
		"name": "兰德里的折磨",
		"price": 3150,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "技能伤害会灼烧敌人一部分生命值",
		"types": [
			"Health",
			"SpellDamage"
		],
		"description": "+75法术强度<br>+300生命值<br><br>唯一被动—疯狂：在与英雄作战时，每过1秒，你造成的伤害就会多2%(最大值：10%)。<br>唯一被动—折磨：技能会灼烧目标3秒，每秒造成相当于目标1.5%最大生命值的魔法伤害。灼烧伤害会在对抗移动受损的单位时提升至2.5%。"
	},{
		"itemId": 3153,
		"name": "破败王者之刃",
		"price": 3100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "造成基于目标生命值的伤害，并能偷取移动速度",
		"types": [
			"Active",
			"AttackSpeed",
			"Damage",
			"LifeSteal",
			"NonbootsMovement",
			"OnHit",
			"Slow"
		],
		"description": "+30攻击力<br>+30%攻击速度<br>+10%生命偷取<br><br>唯一被动：你的普通攻击会造成相当于目标6%当前生命值的额外物理伤害。<br>唯一主动：造成60魔法伤害，并偷取目标25%的移动速度，持续3秒（冷却时间60秒）。<br><br> 最小额外物理伤害为15。<br>对野怪和小兵的最大额外物理伤害为60。<br>使用者的生命偷取属性可应用于额外物理伤害效果上。"
	},{
		"itemId": 3155,
		"name": "海克斯饮魔刀",
		"price": 1300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升攻击力和魔法抗性",
		"types": [
			"Damage",
			"SpellBlock"
		],
		"description": "+20攻击力<br>+35魔法抗性<br><br>唯一被动—救主灵刃：如果你的生命值即将在承受魔法伤害后低于35%，那么此物品会在此之前为你制造一个吸收150(基于携带者的等级)魔法伤害的护盾，持续5秒（冷却时间：90秒）。"
	},{
		"itemId": 3156,
		"name": "玛莫提乌斯之噬",
		"price": 3300,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "生命值很低时提供攻击力",
		"types": [
			"CooldownReduction",
			"Damage",
			"LifeSteal",
			"SpellBlock",
			"SpellVamp"
		],
		"description": "+45攻击力<br>+35魔法抗性<br>+10%冷却缩减<br><br>唯一被动—救主灵刃：如果你的生命值即将在承受魔法伤害后低于35%，那么此物品会在此之前为你制造一个吸收350魔法伤害的护盾，持续5秒。<br>破釜沉舟：当<i>救主灵刃</i>触发时，提供30攻击力、10%法术吸血和10%生命偷取，持续到脱离战斗为止。"
	},{
		"itemId": 3157,
		"name": "中娅沙漏",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷",
		"plaintext": "主动施放来变得无敌但无法行动",
		"types": [
			"Active",
			"Armor",
			"CooldownReduction",
			"SpellDamage"
		],
		"description": "唯一主动—凝滞：让英雄在2.5秒里免疫任何伤害且不可被选取，但无法移动、攻击、施放技能或使用装备（冷却时间120秒）。"
	},{
		"itemId": 3158,
		"name": "明朗之靴",
		"price": 1000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升移动速度和冷却缩减",
		"types": [
			"Boots",
			"CooldownReduction"
		],
		"description": "限购1个鞋类装备。<br><br>唯一被动：+10%冷却缩减<br>唯一被动—强化移动：+40移动速度<br>唯一被动：使召唤师技能的冷却时间减少10%<br><br><br>"
	},{
		"itemId": 3165,
		"name": "莫雷洛秘典",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升魔法伤害",
		"types": [
			"Health",
			"MagicPenetration",
			"SpellDamage"
		],
		"description": "+70法术强度<br>+300生命值<br><br>唯一被动—死亡之触： +15法术穿透<br>唯一被动—诅咒打击：对英雄造成魔法伤害时，会为该目标施加持续3秒的重伤效果。"
	},{
		"itemId": 3174,
		"name": "雅典娜的邪恶圣杯",
		"price": 2500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "造成伤害会强化你的治疗和护盾技能",
		"types": [
			"CooldownReduction",
			"HealthRegen",
			"ManaRegen",
			"SpellBlock",
			"SpellDamage"
		],
		"description": "+55法术强度<br>+40魔法抗性<br><br><br>唯一被动：将对英雄造成的35%<a href=\"premitigation\">原始伤害储存为【鲜血充能】，最多可储存110 - 250。对友方英雄施放治疗或护盾时，会消耗相当于该次治疗或护盾值的100%的充能层数，来为该英雄提供与此层数等值的治疗效果。<br>"
	},{
		"itemId": 3179,
		"name": "黯影阔剑",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "周期性地提供陷阱和守卫侦测能力",
		"types": [
			"ArmorPenetration",
			"CooldownReduction",
			"Damage",
			"OnHit",
			"Vision"
		],
		"description": "+50攻击力<br>+10%冷却缩减<br><br>唯一被动：+10穿甲<br>唯一被动—封锁：在被一个敌方守卫发现时，使你附近的所有敌方陷阱显形并使敌方守卫失效，持续8秒（60秒冷却时间）。"
	},{
		"itemId": 3190,
		"name": "钢铁烈阳之匣",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "主动施放来为附近友军提供吸收伤害的护盾",
		"types": [
			"Active",
			"Armor",
			"SpellBlock"
		],
		"description": "唯一主动：为周围友军提供一个不断衰减的护盾，持续2.5秒，吸收140-420伤害(60秒冷却时间)。<br><br>"
	},{
		"itemId": 3194,
		"name": "适应性头盔",
		"price": 2800,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "降低来自重复的技能和效果的伤害",
		"types": [
			"CooldownReduction",
			"Health",
			"HealthRegen",
			"SpellBlock"
		],
		"description": "+300生命值<br>+60魔法抗性<br>+100%基础生命回复<br><br><br>唯一被动：承受来自一个技能或效果的魔法伤害时，使相同技能或效果的所有后续魔法伤害减少15%，持续4秒。"
	},{
		"itemId": 3211,
		"name": "幽魂斗篷",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "增强防御属性并在受到伤害时提供回复",
		"types": [
			"Health",
			"HealthRegen",
			"SpellBlock"
		],
		"description": "+175生命值<br>+20魔法抗性<br><br>唯一被动：在受到来自敌方英雄的伤害后， 为携带者提供150%基础生命回复，最多持续10秒。"
	},{
		"itemId": 3285,
		"name": "卢登的回声",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升法术强度、法力以及冷却缩减",
		"types": [
			"CooldownReduction",
			"Mana",
			"OnHit",
			"SpellDamage"
		],
		"description": "+80法术强度<br>+300法力<br>+10%冷却缩减<br><br>唯一被动—急速：这个装备提供额外的10%冷却缩减。<br>唯一被动—回声：移动和施法的同时会获得充能。在充能数到达100时，你的下一个伤害型技能会将静电全部释放，对最多3个目标造成100(+10%法术强度)魔法伤害。"
	},{
		"itemId": 3504,
		"name": "炽热香炉",
		"price": 2600,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "施加于其他单位的护盾和治疗效果还会为你和目标提供攻击速度并使他们的攻击在命中时造成额外魔法伤害。",
		"types": [
			"CooldownReduction",
			"ManaRegen",
			"NonbootsMovement",
			"SpellDamage"
		],
		"description": "+60法术强度<br>+10%冷却缩减<br><br><br>唯一被动：每当你对一名友方英雄施加治疗和护盾时，你和目标英雄都会获得10% - 30%攻击速度加成并且你们的攻击会在命中时造成额外的16 - 30魔法伤害，持续6秒。<br><br>这个加成不包括生命回复效果。加成效果是基于目标的等级。"
	},{
		"itemId": 3742,
		"name": "亡者的板甲",
		"price": 2900,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "在你四处移动时积攒气势，然后猛击敌人。",
		"types": [
			"Armor",
			"Bilgewater",
			"Health",
			"NonbootsMovement",
			"OnHit"
		],
		"description": "+300生命值<br>+50护甲<br><br>唯一被动—无畏：在移动时积攒【气势】层数，最多可在100层时提供50移动速度。气势效果的层数会在中了减速、晕眩、嘲讽、恐惧、变形或禁锢效果后衰减。<br>唯一被动—碾压猛击：普攻时造成1x气势层数的额外魔法伤害，同时消耗所有气势层数。在满层时，如果攻击者是近战，那么还会减速目标50%，持续1秒。<br><br>“只有一种方法能让你从我这里拿到这件盔甲……” - 被遗忘的名字"
	},{
		"itemId": 3751,
		"name": "斑比的熔渣",
		"price": 1100,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供生命值和献祭光环",
		"types": [
			"Health"
		],
		"description": "+250生命值<br><br>唯一被动—献祭：在战斗状态下，每秒灼烧附近的敌人造成[5到20]魔法伤害。【献祭】对小兵和野怪的伤害会额外提升50%。"
	},{
		"itemId": 3800,
		"name": "正义荣耀",
		"price": 500,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提供生命值、法力值和护甲。主动激活可以在冲向敌人时获得加速效果，并使敌人减速。",
		"types": [
			"Active",
			"Armor",
			"CooldownReduction",
			"Health",
			"HealthRegen",
			"Mana",
			"NonbootsMovement",
			"Slow"
		],
		"description": "唯一主动：为你提供75%移动速度，持续4秒。这个移动速度加成仅在朝着敌方或敌方防御塔移动时有效。一旦贴近一名敌方英雄(或在4秒后)，你就会放出一道冲击波，使附近敌方英雄的移动速度减少50%，持续2秒(冷却时间：45秒)。"
	},{
		"itemId": 3802,
		"name": "遗失的章节",
		"price": 1050,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "升级时回复法力值。",
		"types": [
			"CooldownReduction",
			"Mana",
			"ManaRegen",
			"SpellDamage"
		],
		"description": "+30法术强度<br>+150法力<br><br>唯一被动—急速： +10%冷却缩减<br>"
	},{
		"itemId": 3812,
		"name": "死亡之舞",
		"price": 3000,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "将一部分瞬时伤害转化为持续伤害",
		"types": [
			"Armor",
			"CooldownReduction",
			"Damage",
			"LifeSteal",
			"SpellBlock"
		],
		"description": "+35攻击力<br>+300生命<br>+10%冷却缩减<br><br>唯一被动：造成伤害的同时会治疗自身，治疗量相当于实际伤害值的10%。<br>唯一被动：你所受伤害的[近战英雄：30% || 远程英雄：20%]会以流血形式在3秒里持续扣除。"
	},{
		"itemId": 3916,
		"name": "湮灭宝珠",
		"price": 1250,
		"maps": "瓦洛兰城市乐园,水晶之痕,嚎哭深渊,,未知,次级架构43,召唤师峡谷,扭曲丛林",
		"plaintext": "提升魔法伤害",
		"types": [
			"Health",
			"MagicPenetration",
			"SpellDamage"
		],
		"description": "+25法术强度<br>+125生命值<br><br>唯一被动—死亡之触： +15 法术穿透"
	}
],
	"version": "10.11",
	"fileName": "items.js",
	"fileTime": "2020-05-29 18:05:56"
}
var type = {
	"defense": ["HEALTH", "HEALTHREGEN", "ARMOR", "SPELLBLOCK"],
	"attack": ["LIFESTEAL", "CRITICALSTRIKE", "ATTACKSPEED", "DAMAGE"],
	"magic": ["MANA", "SPELLDAMAGE", "COOLDOWNREDUCTION", "MANAREGEN"],
	"movement": ["BOOTS", "NONBOOTSMOVEMENT"],
	"consumable": ["CONSUMABLE"],
}
var typeb = {
	"defense": [{
			"es": "HEALTH",
			"cn": "生命值"
		},
		{
			"es": "HEALTHREGEN",
			"cn": "生命回复"
		},
		{
			"es": "ARMOR",
			"cn": "护甲"
		},
		{
			"es": "SPELLBLOCK",
			"cn": "魔法抗性"
		}
	],
	"attack": [{
			"es": "LIFESTEAL",
			"cn": "生命偷取"
		},
		{
			"es": "CRITICALSTRIKE",
			"cn": "暴击"
		},
		{
			"es": "ATTACKSPEED",
			"cn": "攻击速度"
		},
		{
			"es": "DAMAGE",
			"cn": "攻击力"
		}
	],
	"magic": [{
			"es": "MANA",
			"cn": "法力值"
		},
		{
			"es": "SPELLDAMAGE",
			"cn": "法术强度"
		},
		{
			"es": "COOLDOWNREDUCTION",
			"cn": "冷却缩减"
		},
		{
			"es": "MANAREGEN",
			"cn": "法力回复"
		}
	],
	"movement": [{
			"es": "BOOTS",
			"cn": "鞋子"
		},
		{
			"es": "NONBOOTSMOVEMENT",
			"cn": "其他移动速度物品"
		},
	],
	"consumable": [{
			"es": "CONSUMABLE",
			"cn": "消耗品"
		}, ]
}
export {
	datas,
	type,
	typeb
}
//
