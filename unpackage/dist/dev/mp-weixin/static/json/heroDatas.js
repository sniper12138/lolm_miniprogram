//第一部分  日期
var data = {
	"hero":[{
		"heroId": 1,
		"name": "暗夜猎手",
		"pic": 1,
		"roles": ['marksman','assassin'],
		"skins": [{
				"id": 1,
				"big": "https://cdn.tinytiger.cn/lolmbk/1.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small67000.jpg",
				"name": "default"
			},{
				"id": 1,
				"big": "https://cdn.tinytiger.cn/Vayne67006.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small67006.jpg",
				"name": "苍穹之光 薇恩"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "闪避突袭",
				"description": "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vayneq.png"
			},{
				"spellKey": "w",
				"name": "圣银弩箭",
				"description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vaynew.png"
			},{
				"spellKey": "e",
				"name": "恶魔审判",
				"description": "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vaynee.png"
			},{
				"spellKey": "r",
				"name": "终极时刻",
				"description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vayner.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 4,
			"status3": 6,
			"status4": 3
		},
		"shortBio": "肖娜·薇恩是一位无情的德玛西亚怪物猎手。终其一生，她都在寻找杀害她全家的恶魔。她的手臂上装着十字弩，心中燃烧着熊熊的复仇怒火，从暗影中射出圣银弩箭的风暴，薇恩只有在杀死那些为黑暗魔法所控制的人和生物时，才能真正感到愉悦。"
	},{
		"heroId": 2,
		"name": "暴走萝莉",
		"pic": 2,
		"roles": ['marksman'],
		"skins": [{
				"id": 2,
				"big": "https://cdn.tinytiger.cn/lolmbk/2.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small222000.jpg",
				"name": "default"
			},{
				"id": 2,
				"big": "https://cdn.tinytiger.cn/Jinx222001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small222001.jpg",
				"name": "黑帮狂花 金克丝"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "闪避突袭",
				"description": "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vayneq.png"
			},{
				"spellKey": "w",
				"name": "圣银弩箭",
				"description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vaynew.png"
			},{
				"spellKey": "e",
				"name": "恶魔审判",
				"description": "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vaynee.png"
			},{
				"spellKey": "r",
				"name": "终极时刻",
				"description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vayner.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "神经狂躁,冲动任性,劣迹斑斑……金克丝出身自祖安，生来就爱不计后果地大搞破坏。她就是一座人形自走军火库，所经之处必定会留下夺目的火光和震耳的爆炸。金克丝最讨厌无聊，所以不管她去到哪里，混乱和骚动就会如期而至，这就是她留下的“到此一游”。"
	},{
		"heroId": 3,
		"name": "爆破鬼才",
		"pic": 3,
		"roles": ['mage'],
		"skins": [{
				"id": 3,
				"big": "https://cdn.tinytiger.cn/lolmbk/3.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small115000.jpg",
				"name": "default"
			},{
				"id": 3,
				"big": "https://cdn.tinytiger.cn/Ziggs115005.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small115005.jpg",
				"name": "奥术大师 吉格斯"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "弹跳炸弹",
				"description": "吉格斯扔出一个会弹跳的炸弹，对敌人造成魔法伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ziggsq.png"
			},{
				"spellKey": "w",
				"name": "定点爆破",
				"description": "吉格斯扔出一个炸药包，会在4秒后爆炸，或者在再次施放该技能后爆炸。爆炸会对敌人造成魔法伤害，并将他们击退。吉格斯也会被击退，但不会受到伤害。吉格斯可以用这个技能来爆破敌方摇摇欲坠的防御塔。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ziggsw.png"
			},{
				"spellKey": "e",
				"name": "海克斯爆破雷区",
				"description": "吉格斯布下敌人一踩就炸的感应雷区，对踩中地雷的敌人造成魔法伤害和减速效果。对相同目标的后续爆炸将造成较少伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ziggse.png"
			},{
				"spellKey": "r",
				"name": "科学的地狱火炮",
				"description": "吉格斯部署他的尖端发明，科学的地狱火炮，将它推送一段极远的距离。在主要爆炸区域里的敌人会比在其它爆炸区域里的敌人受到更多的伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ziggsr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "炸弹越大越好，引线越短越好，带着这种喜好的约德尔人吉格斯就是天生的爆炸狂人。他曾是皮尔特沃夫一位发明家的助手，不过因为自己千篇一律的生活而感到无聊，后来和一个名为金克丝的蓝头发小疯子交上了朋友。疯狂的城中一夜过后，吉格斯接受了她的建议，搬到了祖安，在那里更加自由地探索自己着迷的东西。在他对于爆炸的无尽追寻过程中，一直恐吓着炼金男爵和普通市民之流。"
	},{
		"heroId": 4,
		"name": "潮汐海灵",
		"pic": 4,
		"roles": ['assassin','fighter'],
		"skins": [{
				"id": 4,
				"big": "https://cdn.tinytiger.cn/Fizz105004.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small105004.jpg",
				"name": "虚空海灵 菲兹"
			},{
				"id": 4,
				"big": "https://cdn.tinytiger.cn/lolmbk/4.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small105000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "淘气打击",
				"description": "菲兹穿过他的目标，造成魔法伤害，并施加攻击特效。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fizzq.png"
			},{
				"spellKey": "w",
				"name": "海石三叉戟",
				"description": "菲兹的攻击会让他的敌人们流血，同时造成持续数秒的魔法伤害。菲兹可以强化他的下次普攻来造成额外伤害，并在短时间内强化他的后续普攻。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fizzw.png"
			},{
				"spellKey": "e",
				"name": "古灵/精怪",
				"description": "菲兹跳到空中，同时优雅地落在他的长矛上，变得不可被选取。在这个姿态下，菲兹可以选择立原地着陆，也可以选择在着陆之前再跳一段距离。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fizze.png"
			},{
				"spellKey": "r",
				"name": "巨鲨强袭",
				"description": "菲兹朝一个方向放出一条小鱼，小鱼会附身在第一个与它接触的敌方英雄身上，同时减速目标。在短暂的延迟之后，一条巨鲨就会破土而出，击飞目标并将目标附近的敌人震开。被命中的所有敌人都会受到魔法伤害和减速效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fizzr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "菲兹是一名水陆两栖的约德尔人，生活在比尔吉沃特周围的群礁之间。他会经常把迷信的船长们抛进海中的什一税捡起来物归原主。不过即使是最粗鲁的水手也知道不要招惹他，因为这里流传着的各种教训，都是因为低估了这个小鬼。经常有人误会他的行为只是海洋精灵的任性举动，而事实上他可以号令来自深渊的巨型猛兽，而且不管是盟友还是敌人他都喜欢捉弄。"
	},{
		"heroId": 5,
		"name": "德邦总管",
		"pic": 5,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 5,
				"big": "https://cdn.tinytiger.cn/lolmbk/5.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small5000.jpg",
				"name": "default"
			},{
				"id": 5,
				"big": "https://cdn.tinytiger.cn/XinZhao5006.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small5006.jpg",
				"name": "秘密特工 赵信"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "三重爪击",
				"description": "赵信的下3次普攻将造成额外伤害并且第三次攻击将击飞目标。",
				"abilityIconPath": "https://cdn.tinytiger.cn/XinZhaow.png"
			},{
				"spellKey": "w",
				"name": "风斩电刺",
				"description": "赵信用他的长枪斩击他的前方，之后将长枪向前刺击，并使被击中的敌人减速。",
				"abilityIconPath": "https://cdn.tinytiger.cn/XinZhaoe.png"
			},{
				"spellKey": "e",
				"name": "无畏冲锋",
				"description": "赵信对一名敌人发起冲锋，对范围内的所有敌人造成伤害并使他们暂时减速。",
				"abilityIconPath": "https://cdn.tinytiger.cn/XinZhaor.png"
			},{
				"spellKey": "r",
				"name": "新月护卫",
				"description": "赵信对附近的敌人造成基于目标当前生命值的伤害，并击退未被挑战的目标。赵信会创造出一个圆环，且自身不会受到来自圆环之外的敌人所造成的伤害。"
			}
		],
		"info": {
			"status1": 0,
			"status2": 0,
			"status3": 0,
			"status4": 0
		},
		"shortBio": "赵信是效忠于光盾王朝的坚毅勇士。他曾经沦落于诺克萨斯的角斗场，在无数次角斗中得以幸存。被德玛西亚军队解救以后，他便发誓为这群勇敢的解放者贡献生命和忠诚。最称手的三爪长枪相伴，赵信现在为自己的第二祖国而战，一往无前，暴虎冯河。"
	},{
		"heroId": 6,
		"name": "德玛西亚之力",
		"pic": 6,
		"roles": ['fighter','tank'],
		"skins": [{
				"id": 6,
				"big": "https://cdn.tinytiger.cn/Garen86001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small86001.jpg",
				"name": "战神阿瑞斯 盖伦"
			},{
				"id": 6,
				"big": "https://cdn.tinytiger.cn/lolmbk/6.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small86000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "致命打击",
				"description": "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Garenq.png"
			},{
				"spellKey": "w",
				"name": "勇气",
				"description": "盖伦被动地通过击杀敌人来提升护甲和魔法抗性。他也可以激活这个技能来暂时获得一层护盾和韧性，并在接下来的较长持续时间里获得较弱的伤害减免效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Garenw.png"
			},{
				"spellKey": "e",
				"name": "审判",
				"description": "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Garene.png"
			},{
				"spellKey": "r",
				"name": "德玛西亚正义",
				"description": "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Garenr.png"
			}
		],
		"info": {
			"status1": 7,
			"status2": 6,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "作为一名自豪而高贵的勇士，盖伦将自己当做无畏先锋中的普通一员参与战斗。他既受到同袍手足的爱戴，也受到敌人对手的尊敬——尤其作为尊贵的冕卫家族的子嗣，他被委以重任，守卫德玛西亚的疆土和理想。他身披抵御魔法的重甲，手持阔剑，时刻准备着用正义的钢铁风暴在战场上正面迎战一切操纵魔法的狂人。"
	},{
		"heroId": 7,
		"name": "发条魔灵",
		"pic": 7,
		"roles": ['mage','support'],
		"skins": [{
				"id": 7,
				"big": "https://cdn.tinytiger.cn/lolmbk/7.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small61000.jpg",
				"name": "default"
			},{
				"id": 7,
				"big": "https://cdn.tinytiger.cn/Orianna61007.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small61007.jpg",
				"name": "暗星 奥莉安娜"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "指令：攻击",
				"description": "奥莉安娜指挥她的魔偶，朝目标区域发射，对沿途目标造成魔法伤害（对后续目标伤害递减）。指令结束后魔偶会停在目标区域。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Oriannaq.png"
			},{
				"spellKey": "w",
				"name": "指令：杂音",
				"description": "奥莉安娜指挥她的魔偶，释放能量脉冲，造成魔法伤害，并产生一个加速友军,减速敌军的能量场。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Oriannaw.png"
			},{
				"spellKey": "e",
				"name": "指令：防卫",
				"description": "奥莉安娜指挥她的魔偶，依附于友军英雄身上，保护他们并对经过的敌人造成魔法伤害。此外，魔偶还会对依附的友军增加额外护甲和魔法抗性。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Oriannae.png"
			},{
				"spellKey": "r",
				"name": "指令：冲击波",
				"description": "奥莉安娜指挥她的魔偶，释放一股冲击波，对周围敌军造成魔法伤害并在短暂延迟后将他们拉向魔偶。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Oriannar.png"
			}
		],
		"info": {
			"status1": 7,
			"status2": 8,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "奥莉安娜曾是一个拥有血肉之躯的好奇女孩，而现在则是全身上下部由发条和齿轮构成的科技奇观。祖安下层地区的一次事故间接导致了她身染重病，日渐衰竭的身体必须替换为精密的人造器官，一个接一个，直到全身上下再也没有人类的肉体。她给自己制作了一枚奇妙的黄铜球体，既是伙伴，也是保镖。如今她已经可以自由地探索壮观的皮尔特沃夫，以及更遥远的地方。"
	},{
		"heroId": 8,
		"name": "法外狂徒",
		"pic": 8,
		"roles": ['marksman'],
		"skins": [{
				"id": 8,
				"big": "https://cdn.tinytiger.cn/Graves104003.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small104003.jpg",
				"name": "黑帮教父 格雷福斯"
			},{
				"id": 8,
				"big": "https://cdn.tinytiger.cn/lolmbk/8.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small104003.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "穷途末路",
				"description": "格雷福斯发射一颗爆破性的榴弹，会在2秒后引爆，或是在碰到地形的0.2秒后立刻爆炸。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gravesq.png"
			},{
				"spellKey": "w",
				"name": "烟幕弹",
				"description": "格雷福斯朝目标区域掷出一颗烟幕弹。如果敌人处在烟幕之中，则其视野会被降低。被烟幕弹的初始冲击所命中的敌人会受到魔法伤害并且移动速度会被短暂降低。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gravesw.png"
			},{
				"spellKey": "e",
				"name": "快速拔枪",
				"description": "格雷福斯向前冲刺，获得一层持续数秒的护甲加成。如果格雷福斯朝着一名敌方英雄冲刺，则会获得两层纯爷们效果。格雷福斯的每次未被闪避的普通攻击，都会减少这个技能的冷却时间并刷新防御属性加成。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gravese.png"
			},{
				"spellKey": "r",
				"name": "终极爆弹",
				"description": "格雷福斯射出一枚爆破弹，对它所命中的第一个敌人造成重度伤害。在命中一名英雄或者达到它的最大射程之后，爆弹会爆炸，并对锥形范围内的敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gravesr.png"
			}
		],
		"info": {
			"status1": 8,
			"status2": 4,
			"status3": 5,
			"status4": 6
		},
		"shortBio": "马尔科姆·格雷福斯是有名的佣兵,赌徒和窃贼，凡是他到过的城邦或帝国，都在通缉悬赏他的人头。虽然他脾气暴躁，但却非常讲究黑道的义气，他的双管散弹枪“命运”就经常用来纠正背信弃义之事。几年前他和老搭档崔斯特·菲特冰释前嫌，如今二人一同在比尔吉沃特的地下黑道纷争中再次如鱼得水。"
	},{
		"heroId": 9,
		"name": "风暴之怒",
		"pic": 9,
		"roles": ['support','mage'],
		"skins": [{
			"id": 9,
			"big": "https://cdn.tinytiger.cn/lolmbk/9.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small40000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "飓风呼啸",
				"description": "迦娜改变气压和温度，在目标区域召唤小型风暴，风暴体积随时间增大。她可以再次施放该技能来释放风暴。风暴会朝向施放方向飞行，对沿途的所有单位造成伤害和击飞效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jannaq.png"
			},{
				"spellKey": "w",
				"name": "和风守护",
				"description": "迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对敌方目标造成伤害和减速效果。在技能尚未冷却时，被动的加速效果不生效。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jannaw.png"
			},{
				"spellKey": "e",
				"name": "风暴之眼",
				"description": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jannae.png"
			},{
				"spellKey": "r",
				"name": "复苏季风",
				"description": "迦娜召唤魔法风暴围绕自己，将敌人击退。在风暴平息后，当技能仍处在激活状态时，和风将治疗附近的友军。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jannar.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 6,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "风暴是她的武器，符文之地是她的家园。神秘的迦娜是风元素的精灵，保护着祖安城内无依无靠的人们。有人相信她的诞生是源于符文之地水手们的祈愿，他们会祈祷友善的风伴他们渡过险恶的海域，战胜无情的风暴。后来她的眷顾和庇护被召唤到了祖安深处，在那里，迦娜成为了无助之人的希望灯塔。没人知道她会在何时何地出现，但大多数时候，她的到来都意味着援手。"
	},{
		"heroId": 10,
		"name": "弗雷尔卓德之心",
		"pic": 10,
		"roles": ['support','tank'],
		"skins": [{
				"id": 10,
				"big": "https://cdn.tinytiger.cn/Braum201001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small201001.jpg",
				"name": "屠龙勇士 布隆"
			},{
				"id": 10,
				"big": "https://cdn.tinytiger.cn/lolmbk/10.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small201000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "寒冬之咬",
				"description": "布隆驱动盾牌中的冷冻冰块，对敌人造成魔法伤害和减速效果。对目标施加一层震荡猛击。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Braumq.png"
			},{
				"spellKey": "w",
				"name": "挺身而出",
				"description": "布隆跃向目标友军英雄或小兵。在抵达时，布隆和友军会暂时获得护甲和魔法抗性加成。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Braumw.png"
			},{
				"spellKey": "e",
				"name": "坚不可摧",
				"description": "布隆朝一个方向举起盾牌，持续数秒，可以拦截所有敌方飞行道具，并将它们摧毁，但自身要承受这些飞行道具的伤害。在举盾后，布隆将使承受的第一次攻击变得完全无效，并降低来自这个方向的所有后续攻击的伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Braume.png"
			},{
				"spellKey": "r",
				"name": "冰川裂隙",
				"description": "布隆敲击地面，击飞他身边和前方一条直线上的所有敌人。此外，还会在前方的直线上留下一条能让敌方减速的裂隙。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Braumr.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 3,
			"status3": 9,
			"status4": 3
		},
		"shortBio": "拥有大块肌肉和更大颗心脏的布隆，是弗雷尔卓德的一个受人爱戴的英雄。弗雷尔卓德北部的任何一家蜜酒坊里都有人会致敬他传奇般的强壮，据说他曾在一夜之间扫平一整片橡树森林，还曾用拳头把一整座山打成碎石子。一扇附有魔法的秘库大门被他拿在手中当做盾牌，布隆在北方的冻土上漫游，小胡子勾勒出的微笑和他的肌肉块头一样大， 真诚友善地帮助所有危难之中的人。"
	},{
		"heroId": 11,
		"name": "光辉女郎",
		"pic": 11,
		"roles": ['mage','support'],
		"skins": [{
				"id": 11,
				"big": "https://cdn.tinytiger.cn/lolmbk/11.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small99000.jpg",
				"name": "default"
			},{
				"id": 11,
				"big": "https://cdn.tinytiger.cn/Lux99001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small99001.jpg",
				"name": "奥术光辉 拉克丝"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "光之束缚",
				"description": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Luxq.png"
			},{
				"spellKey": "w",
				"name": "曲光屏障",
				"description": "拉克丝掷出她的魔杖，魔杖所触及的友方单位会有光环环绕，保护他们免受敌方伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Luxw.png"
			},{
				"spellKey": "e",
				"name": "透光奇点",
				"description": "朝一个区域发射一个不规则的扭曲之光，减速附近敌人。拉克丝可以引爆它，对敌人造成区域性伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Luxe.png"
			},{
				"spellKey": "r",
				"name": "终极闪光",
				"description": "在积蓄能量之后，拉克丝发射一束光波，对该区域所有目标造成伤害。此外，该技能触发拉克丝的被动技能并刷新光芒四射减益的持续时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Luxr.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 6,
			"status3": 7,
			"status4": 6
		},
		"shortBio": "拉克珊娜·冕卫出身自德玛西亚，一个将魔法视为禁忌的封闭国度。只要一提起魔法，人们总是带着恐惧和怀疑。所以拥有折光之力的她，在童年的成长过程中始终担心被人发现进而遭到放逐，一直强迫自己隐瞒力量，以此保住家族的贵族地位。虽然如此，拉克丝的乐观和顽强让她学会拥抱自己独特的天赋，现在的她正在秘密地运用自己的能力为祖国效力。"
	},{
		"heroId": 12,
		"name": "寒冰射手",
		"pic": 12,
		"roles": ['marksman'],
		"skins": [{
			"id": 12,
			"big": "https://cdn.tinytiger.cn/lolmbk/12.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small22000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "射手的专注",
				"description": "艾希会在攻击时聚集【全神贯注】效果。在【全神贯注】到达最大值时，艾希就能施放【射手的专注】来消耗掉所有【全神贯注】效果，以临时提升她的攻击速度，并在持续期间将她的普攻转变为一阵强力的飓风箭阵。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Asheq.png"
			},{
				"spellKey": "w",
				"name": "万箭齐发",
				"description": "艾希向前方的锥形范围射出9支箭，对敌人造成额外伤害。该技能也会触发冰霜射击的效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ashew.png"
			},{
				"spellKey": "e",
				"name": "鹰击长空",
				"description": "艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ashee.png"
			},{
				"spellKey": "r",
				"name": "魔法水晶箭",
				"description": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，那么它会对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离。此外，该英雄附近的敌方单位会受到伤害和减速效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Asher.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 4,
			"status3": 6,
			"status4": 3
		},
		"shortBio": "作为阿瓦罗萨部族的战母，寒冰血脉的艾希率领着北方人数最多的部落。她克己,智慧,忠于理想，但并不适应自己作为领袖的角色，艾希与自己血脉中蕴藏的先祖魔法相通，挽起了臻冰打造的长弓。她的族人相信她就是神话中的女英雄阿瓦罗萨的转世，在人们的追随下，艾希希望夺回那些属于部族的古代领土，从而让弗雷尔卓德再次实现统一。"
	},{
		"heroId": 13,
		"name": "黑暗之女",
		"pic": 13,
		"roles": ['mage'],
		"skins": [{
				"id": 13,
				"big": "https://cdn.tinytiger.cn/Annie1005.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small1005.jpg",
				"name": "冰霜烈焰 安妮"
			},{
				"id": 13,
				"big": "https://cdn.tinytiger.cn/lolmbk/13.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small1000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "e",
				"name": "熔岩护盾",
				"description": "为安妮提供百分比伤害减免，爆发性的移动速度加成，并且任何对安妮进行普通攻击的敌人都会受到伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Anniee.png"
			},{
				"spellKey": "passive",
				"name": "嗜火",
				"description": "在施放4次技能后，安妮的下一个进攻型技能将晕眩目标。",
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "碎裂之火",
				"description": "安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Annieq.png"
			},{
				"spellKey": "r",
				"name": "提伯斯之怒",
				"description": "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Annier.png"
			},{
				"spellKey": "w",
				"name": "焚烧",
				"description": "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Anniew.png"
			}
		],
		"info": {
			"status1": 8,
			"status2": 3,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "既拥有危险夺命的能力，又拥有小大人儿的可爱模样，安妮是一名掌握着深不可测的占火魔法的幼女魔法师。安妮生活在诺克萨斯北边的山脚下，即使是在这种地方，她也仍然是魔法师中的异类。她与火焰的紧密关系与生俱来，最初是伴随着喜怒无常的情绪冲动出现的，不过后来她学会了如何掌握这些“好玩的小把戏”。其中她最喜欢的就是召唤她亲爱的泰迪熊提伯斯——一头狂野的守护兽。安妮已经迷失在了永恒的天真里。她在黑暗的森林中游荡，始终寻觅着能陪自己玩耍的人。"
	},{
		"heroId": 14,
		"name": "唤潮鲛姬",
		"pic": 14,
		"roles": ['support','mage'],
		"skins": [{
				"id": 14,
				"big": "https://cdn.tinytiger.cn/lolmbk/14.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small267000.jpg",
				"name": "default"
			},{
				"id": 14,
				"big": "https://cdn.tinytiger.cn/Nami267003.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small267003.jpg",
				"name": "鲛妮座人 娜美"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "碧波之牢",
				"description": "朝着目标区域放出一个泡泡，对命中的所有敌人造成伤害和晕眩效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Namiq.png"
			},{
				"spellKey": "w",
				"name": "冲击之潮",
				"description": "释放一股在友方英雄和敌方英雄之间交替流动的水流，治疗友军并伤害敌军。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Namiw.png"
			},{
				"spellKey": "e",
				"name": "唤潮之佑",
				"description": "短时间里强化一个友军英雄。友军的普通攻击和技能会对其目标造成额外伤害和减速效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Namie.png"
			},{
				"spellKey": "r",
				"name": "怒涛之啸",
				"description": "召唤一阵巨大的怒涛，击飞,减速并伤害沿途的所有敌人。被怒涛命中的友方英雄会获得【踏浪之行】的双倍加速效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Namir.png"
			}
		],
		"info": {
			"status1": 5,
			"status2": 3,
			"status3": 8,
			"status4": 6
		},
		"shortBio": "娜美是一名强大年轻的瓦斯塔亚海族。当鲛人族与巨神族之间自古订立的契约被打破，她是第一个离开海洋,踏上陆地的人。她别无选择，只能挺身而出担此重任，完成神圣的仪式从而确保族人的安全。在这崭新时代的混乱浪潮中，娜美用无比的决心和无畏的斗志面对未知的明天，用手中的唤潮者之杖召唤来自海洋的力量。"
	},{
		"heroId": 15,
		"name": "疾风剑豪",
		"pic": 15,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 15,
				"big": "https://cdn.tinytiger.cn/lolmbk/15.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small157000.jpg",
				"name": "default"
			},{
				"id": 15,
				"big": "https://cdn.tinytiger.cn/Yasuo157001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small157001.jpg",
				"name": "西部牛仔 亚索"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "斩钢闪",
				"description": "向前出剑，呈直线造成伤害。在命中时，斩钢闪会获得一层旋风烈斩效果，持续数秒。在积攒2层旋风烈斩效果后，斩钢闪会形成一阵能够击飞敌人的旋风。斩钢闪被视为普通攻击，并且可以从所有作用于普攻的东西上获得收益。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Yasuoq.png"
			},{
				"spellKey": "w",
				"name": "风之障壁",
				"description": "形成一个持续4秒的气流之墙，来阻挡敌方的飞行道具。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Yasuow.png"
			},{
				"spellKey": "e",
				"name": "踏前斩",
				"description": "向目标敌人突进，造成魔法伤害。每次施法都会使你的下一次突进的基础伤害提升，直到抵达上限。在若干秒内无法对相同敌人重复施放。如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Yasuoe.png"
			},{
				"spellKey": "r",
				"name": "狂风绝息斩",
				"description": "闪烁到一个被击飞的敌方英雄身边，造成物理伤害，并使范围内的所有被击飞的敌人滞留在空中。获得满额的剑意值，但会重置旋风烈斩的层数。在接下来的若干秒里，亚索的暴击会获得显著的额外护甲穿透加成值。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Yasuor.png"
			}
		],
		"info": {
			"status1": 8,
			"status2": 4,
			"status3": 3,
			"status4": 9
		},
		"shortBio": "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。"
	},{
		"heroId": 16,
		"name": "酒桶",
		"pic": 16,
		"roles": ['fighter','mage'],
		"skins": [{
				"id": 16,
				"big": "https://cdn.tinytiger.cn/Gragas79005.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small79005.jpg",
				"name": "飞车暴走族 古拉加斯"
			},{
				"id": 16,
				"big": "https://cdn.tinytiger.cn/lolmbk/16.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small79000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "滚动酒桶",
				"description": "古拉加斯将酒桶滚到目标地点，酒桶可以被主动引爆或在到达目标地点4秒后自行爆炸。被酒桶炸到的敌人，移动速度会被降低。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gragasq.png"
			},{
				"spellKey": "w",
				"name": "醉酒狂暴",
				"description": "古拉加斯痛饮酒桶里的佳酿，持续1秒。在喝完之后，他会因醉酒而得到强化，下次普通攻击会对附近的所有目标造成更多伤害，并且自身所受的伤害会降低。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gragasw.png"
			},{
				"spellKey": "e",
				"name": "肉弹冲击",
				"description": "古拉加斯向目标区域冲锋，在撞上第一个敌人后，对附近的所有敌方单位造成伤害和晕眩效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gragase.png"
			},{
				"spellKey": "r",
				"name": "爆破酒桶",
				"description": "古拉加斯向目标区域投掷他的酒桶，对爆炸范围内的所有敌人造成伤害和击退效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Gragasr.png"
			}
		],
		"info": {
			"status1": 6,
			"status2": 9,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "豪爽而且威严的古拉加斯是一位身宽体胖,吵闹喧哗的酿酒大师，只为找到最完美的那一口麦酒。他从未知的地方前来，在弗雷尔卓德纯洁的荒原上寻找稀有的酿酒原料，尝试着各种不同的酿制配方。他总是酩酊大醉而且冲动鲁莽，他挑起的斗殴事件堪称传奇，经常造成一整夜的狂欢和殃及池鱼的破坏。只要古拉加斯在某地现身，接踵而至的往往是饮酒和闹事——就按这个顺序。"
	},{
		"heroId": 17,
		"name": "卡牌大师",
		"pic": 17,
		"roles": ['mage'],
		"skins": [{
				"id": 17,
				"big": "https://cdn.tinytiger.cn/lolmbk/17.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small4000.jpg",
				"name": "default"
			},{
				"id": 17,
				"big": "https://cdn.tinytiger.cn/TwistedFate4011.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small4011.jpg",
				"name": "未来战士 崔斯特"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "万能牌",
				"description": "崔斯特扔出三张卡牌，卡牌会对沿途的每个敌方单位造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/TwistedFateq.png"
			},{
				"spellKey": "w",
				"name": "选牌",
				"description": "崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/TwistedFatew.png"
			},{
				"spellKey": "e",
				"name": "卡牌骗术",
				"description": "崔斯特每四次攻击附加一次额外伤害。另外，崔斯特的攻击速度得到被动提升。",
				"abilityIconPath": "https://cdn.tinytiger.cn/TwistedFatee.png"
			},{
				"spellKey": "r",
				"name": "命运",
				"description": "崔斯特为他的敌人算卜命运，短时间内显示所有敌方英雄的位置，并可使用传送，让他在引导1.5秒后传送至目标位置。",
				"abilityIconPath": "https://cdn.tinytiger.cn/TwistedFater.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 4,
			"status4": 6
		},
		"shortBio": "崔斯特·菲特是一名声名狼藉的纸牌高手和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论面对什么情况，崔斯特的袖子里永远都会藏着一张王牌。"
	},{
		"heroId": 18,
		"name": "狂战士",
		"pic": 18,
		"roles": ['fighter','tank'],
		"skins": [{
				"id": 18,
				"big": "https://cdn.tinytiger.cn/lolmbk/18.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small2000.jpg",
				"name": "default"
			},{
				"id": 18,
				"big": "https://cdn.tinytiger.cn/Olaf2003.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small2003.jpg",
				"name": "铁哥们儿 奥拉夫"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "逆流投掷",
				"description": "奥拉夫将战斧投至目标区域，对所有被战斧穿过的敌人造成伤害并减速。如果奥拉夫捡起斧头，那么该技能冷却时间就会减少4.5秒。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Olafq.png"
			},{
				"spellKey": "w",
				"name": "残暴打击",
				"description": "奥拉夫的攻击速度得到提升，并获得生命偷取，且他损失的生命值越多，所受的治疗效果也越多。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Olafw.png"
			},{
				"spellKey": "e",
				"name": "鲁莽挥击",
				"description": "奥拉夫以破釜沉舟之势发动进攻，对目标造成真实伤害（不受护甲与魔抗减免），同时，自身也会根据敌方所受的伤害而受到真实伤害的反噬。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Olafe.png"
			},{
				"spellKey": "r",
				"name": "诸神黄昏",
				"description": "奥拉夫暂时免疫控制技能。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Olafr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 5,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "奥拉夫是一股无坚不摧的毁灭之力，战斧在手的他别无所求，只想光荣地死在战斗中。奥拉夫来自弗雷尔卓德的海岸半岛洛克法，他曾在一次占卜预言中听闻自己将安详地死去——这是懦夫的命运，也是对他们族人的莫大侮辱。于是，为了追寻另外一种结局，他在狂怒的驱动下在这片土地上暴跳横行，屠杀了数十名伟大的战士和传说中的野兽，希望能够找到能够阻止自己的对手。如今他是凛冬之爪部族残酷的执法者，希望在即将到来的大战中找到自己的终结。"
	},{
		"heroId": 19,
		"name": "龙血武姬",
		"pic": 19,
		"roles": ['fighter','tank'],
		"skins": [{
				"id": 19,
				"big": "https://cdn.tinytiger.cn/lolmbk/19.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small102000.jpg",
				"name": "default"
			},{
				"id": 19,
				"big": "https://cdn.tinytiger.cn/Shyvana102004.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small102004.jpg",
				"name": "冰霜亚龙 希瓦娜"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "龙牙突刺",
				"description": "希瓦娜的下次攻击将进行两次打击。每次普通攻击会减少龙牙突刺 0.5 秒冷却时间。魔龙形态：龙牙突刺会撕裂希瓦娜面前的所有单位。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Shyvanaq.png"
			},{
				"spellKey": "w",
				"name": "烈火燎原",
				"description": "希瓦娜将自己围在火焰之中，每秒对周围的敌人造成伤害，并能移动得更快，持续3秒。在这个技能开启时，希瓦娜的普攻会对敌人造成基于此技能伤害的额外伤害。移动速度加成会随着技能的持续时间而减少。普通攻击会延长烈火燎原的持续时间。魔龙形态：烈火燎原会随体积增长。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Shyvanaw.png"
			},{
				"spellKey": "e",
				"name": "烈焰吐息",
				"description": "希瓦娜放出一枚火球，对沿途的所有目标造成魔法伤害，并在目标身上留下熔化护甲的燃渣，持续5秒。希瓦娜对被标记目标进行的普通攻击，会造成基于目标最大生命值的额外伤害。魔龙形态：烈焰吐息会在碰撞或在抵达目标位置后爆炸，造成额外伤害并灼烧大地一小段时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Shyvanae.png"
			},{
				"spellKey": "r",
				"name": "魔龙降世",
				"description": "希瓦娜变成一条巨龙，并且飞向目标区域。沿途的敌人会受到魔法伤害，并被震向她的目标区域。希瓦娜每秒都会被动获取怒气，并且她的每次普通攻击会提供2点怒气。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Shyvanar.png"
			}
		],
		"info": {
			"status1": 8,
			"status2": 6,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "希瓦娜是一只魔法生物，心中有一块燃烧不灭的符文碎片。虽然她时常以人的形象出现，但她真正的形态是一条威猛的巨龙，可以用龙息烈焰吞噬敌人。希瓦娜曾拯救过皇子嘉文四世的性命，如今她心神不安地在皇子的卫队中效力，力图在多疑的德玛西亚人中求得接纳。"
	},{
		"heroId": 20,
		"name": "蛮族之王",
		"pic": 20,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 20,
				"big": "https://cdn.tinytiger.cn/lolmbk/20.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small23000.jpg",
				"name": "default"
			},{
				"id": 20,
				"big": "https://cdn.tinytiger.cn/Tryndamere23002.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small23002.jpg",
				"name": "国王 泰达米尔"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "嗜血杀戮",
				"description": "泰达米尔对战斗极度饥渴，他受伤程度越高，攻击力越强。他能通过释放【Q嗜血杀戮】消耗怒气并治疗自己。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Tryndamereq.png"
			},{
				"spellKey": "w",
				"name": "蔑视",
				"description": "泰达米尔嘲笑敌人，减少身边敌方英雄的攻击力。背对泰达米尔的敌人还会被减速。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Tryndamerew.png"
			},{
				"spellKey": "e",
				"name": "旋风斩",
				"description": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Tryndameree.png"
			},{
				"spellKey": "r",
				"name": "无尽怒火",
				"description": "泰达米尔是如此渴望战斗，以至于承受再多的伤害也不会死亡。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Tryndamerer.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 6,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "桀骜不羁和无尽的愤怒驱使着泰达米尔在弗雷尔卓德所向披靡。他曾公开挑战北方最伟大的战士，让自己为未来更黑暗的时代做好准备。这位愤怒的野蛮人一直都在为自己被灭绝的氏族寻求复仇，不过最近他与阿瓦洛萨部族的战母艾希联手，并在她的族群中重新安家。他非人的力量与毅力是众人皆知的传奇，而且也为他和他的新盟友带来了无数次奇迹般的胜利。"
	},{
		"heroId": 21,
		"name": "皮城执法官",
		"pic": 21,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 21,
				"big": "https://cdn.tinytiger.cn/lolmbk/21.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small254000.jpg",
				"name": "default"
			},{
				"id": 21,
				"big": "https://cdn.tinytiger.cn/Vi254004.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small254004.jpg",
				"name": "炼狱魔女 蔚"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "强能冲拳",
				"description": "蔚对她的拳套进行充能，并且释放一记粉碎性的勾拳，同时带着她前冲。被她命中的敌人会被击退，同时会被施加一层爆弹重拳的效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Viq.png"
			},{
				"spellKey": "w",
				"name": "爆弹重拳",
				"description": "蔚的出拳会打破她对手的护甲，造成额外伤害并为她提供额外攻击速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Viw.png"
			},{
				"spellKey": "e",
				"name": "透体之劲",
				"description": "蔚的下次攻击会爆裂，并透过她的目标，对目标身后的敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vie.png"
			},{
				"spellKey": "r",
				"name": "天霸横空烈轰",
				"description": "蔚撞向一名敌人，将途中的人击退到两边。当她接触到目标时，她会将目标击飞到空中，然后跳上去，将目标轰到地面上。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Vir.png"
			}
		],
		"info": {
			"status1": 7,
			"status2": 6,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "蔚曾经是祖安黑街上的破坏分子。她性格急躁,脾气火爆,凶神恶煞，对权威满心不屑。蔚从小到大都是孤身一人，所以练就了一身生存的本能，也培养了一种恶毒刻薄的幽默感。现在，蔚与皮尔特沃夫守卫一起合作，维护着皮城的安宁。靠着她手上的一副巨型海克斯科技拳套，无论是铜墙铁壁还是心理防线都不在话下。"
	},{
		"heroId": 22,
		"name": "青钢影",
		"pic": 22,
		"roles": ['fighter','tank'],
		"skins": [{
				"id": 22,
				"big": "https://cdn.tinytiger.cn/Camille164001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small164001.jpg",
				"name": "源代码 卡蜜尔"
			},{
				"id": 22,
				"big": "https://cdn.tinytiger.cn/lolmbk/22.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small164000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "精准礼仪",
				"description": "卡蜜尔的下一次普通攻击会斩击敌人，造成额外物理伤害，并为自身提供短暂的爆发性移动速度加成。这个技能可以在释放后的短时间内再次施放，并且如果两次释放之间存在一定的间隔，那么第二段攻击会造成显著的额外伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Camilleq.png"
			},{
				"spellKey": "w",
				"name": "战术横扫",
				"description": "卡蜜尔在短暂延迟后引爆一个锥形范围，并造成伤害。外沿的敌人会被减速并且受到额外伤害，同时还会治疗卡蜜尔。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Camillew.png"
			},{
				"spellKey": "e",
				"name": "钩索",
				"description": "卡蜜尔将她自己拉向一个墙体，然后跳下并在落地时击飞敌方英雄。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Camillee.png"
			},{
				"spellKey": "r",
				"name": "海克斯最后通牒",
				"description": "卡蜜尔冲向目标英雄，并将该英雄锚定在区域中。她对目标英雄发起的普攻还会造成额外的魔法伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Camiller.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 6,
			"status3": 3,
			"status4": 9
		},
		"shortBio": "卡蜜尔是菲罗斯家族的首席密探，游走于法律已然失效的边缘地带，小心地维护着皮尔特沃夫这台机器和其下的祖安，保证一切都能顺畅地运转。灵活而精准的她认为，任何浮皮潦草的技术都是必须被禁绝的丑陋行径。她的心智也如同身下的刀刃一般锐利。为了追求极致，她对自己进行了大幅度的海克斯人体增强手术。这也让很多人不禁怀疑，她根本就是一台纯粹的机器，而不是一个女人。"
	},{
		"heroId": 23,
		"name": "熔岩巨兽",
		"pic": 23,
		"roles": ['tank','assassin'],
		"skins": [{
				"id": 23,
				"big": "https://cdn.tinytiger.cn/lolmbk/23.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small54000.jpg",
				"name": "default"
			},{
				"id": 23,
				"big": "https://cdn.tinytiger.cn/Malphite54005.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small54005.jpg",
				"name": "冰川巨兽 墨菲特"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "地震碎片",
				"description": "通过使用他的原初元素魔法，墨菲特发出一块大地碎片穿过他敌人处的地面，在碰撞时造成伤害并且偷取移动速度3秒。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Malphiteq.png"
			},{
				"spellKey": "w",
				"name": "雷霆拍击",
				"description": "墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Malphitew.png"
			},{
				"spellKey": "e",
				"name": "大地震颤",
				"description": "墨菲特锤击地面，放射出冲击波对目标造成基础伤害，并根据墨菲特的护甲值附加额外伤害，同时暂时减低目标攻击速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Malphitee.png"
			},{
				"spellKey": "r",
				"name": "势不可挡",
				"description": "墨菲特冲击目标区域，将所有敌人抛向空中，造成魔法伤害并晕眩。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Malphiter.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 9,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "墨菲特是一个庞大的岩石生物，为了给混乱的世界赐予秩序而不懈奋斗。他诞生之初的身份是一个石仆，侍奉着一块超乎凡人理解的石碑，名为“独石”。他用万钧元素之力维护自己的先祖，但最终遭遇了失败。在随后的毁灭中，墨菲特成为了唯一的幸存者。如今他忍受着符文之地的脆弱凡人和他们流水一般多变的性情，同时想尽办法给自己寻找一个存于世上的新位置，让自己不愧为同胞中的最后一员。"
	},{
		"heroId": 24,
		"name": "沙漠死神",
		"pic": 24,
		"roles": ['fighter','tank'],
		"skins": [{
			"id": 24,
			"big": "https://cdn.tinytiger.cn/lolmbk/24.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small75000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "汲魂痛击",
				"description": "内瑟斯对敌人施放汲魂痛击造成伤害，如果敌人死于汲魂痛击，则永久增加下次汲魂痛击的伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Nasusq.png"
			},{
				"spellKey": "w",
				"name": "枯萎",
				"description": "内瑟斯使一名敌方英雄衰老，持续减少其移动速度和攻击速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Nasusw.png"
			},{
				"spellKey": "e",
				"name": "灵魂烈焰",
				"description": "内瑟斯在目标区域施放灵魂烈焰，伤害并削弱敌人。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Nasuse.png"
			},{
				"spellKey": "r",
				"name": "死神降临",
				"description": "内瑟斯释放一个具有强大魔力的沙漠风暴来侵袭身边的敌人。当风暴肆虐期间，他会获得额外生命值,额外攻击距离，伤害附近的敌人，汲魂痛击会拥有较短冷却时间，并获得额外的护甲和魔法抗性。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Nasusr.png"
			}
		],
		"info": {
			"status1": 6,
			"status2": 9,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "内瑟斯是一位庄严威武的犬首人身飞升者，在古代恕瑞玛帝国时期，是被沙漠子民敬仰为半神的英雄人物。作为知识的守护者和无双的战术家，他用高绝的智慧引导着古代恕瑞玛帝国在数百年间走向了繁荣伟大。帝国陨落以后，他开始了自我放逐，成为了人们口中缥缈的传说。现在，恕瑞玛古城已经再一次崛起，他也随之回归，并决心绝不让它再度陨落。"
	},{
		"heroId": 25,
		"name": "赏金猎人",
		"pic": 25,
		"roles": ['marksman'],
		"skins": [{
				"id": 25,
				"big": "https://cdn.tinytiger.cn/lolmbk/25.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small21000.jpg",
				"name": "default"
			},{
				"id": 25,
				"big": "https://cdn.tinytiger.cn/MissFortune21001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small21001.jpg",
				"name": "西部牛仔 厄运小姐"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "一箭双雕",
				"description": "厄运小姐向敌人发射子弹，伤害他们以及他们后面的目标。两次攻击都可以施加【厄运的眷顾】。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MissFortuneq.png"
			},{
				"spellKey": "w",
				"name": "大步流星",
				"description": "厄运小姐在不被攻击时会被动获得移动速度加成。可以主动施放这个技能来获得短时间的攻击速度加成。在【大步流星】尚未冷却完毕时，【厄运的眷顾】可减少【大步流星】的剩余持续时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MissFortunew.png"
			},{
				"spellKey": "e",
				"name": "枪林弹雨",
				"description": "厄运小姐发射一阵弹雨来获得目标区域的视野，对敌人造成几波伤害，并减缓他们的移动速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MissFortunee.png"
			},{
				"spellKey": "r",
				"name": "弹幕时间",
				"description": "厄运小姐向她面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。这个技能的每波子弹都可以暴击。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MissFortuner.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "以美貌闻名，但却以无情立命的莎拉是一位比尔吉沃特的船长，她在这座港镇的强硬犯罪集团中塑造了不容轻视的形象。在她还是个孩子的时候，亲眼目睹了海盗之王普朗克谋杀了自己的家人。多年以后她残忍地报仇雪恨，把他和他的旗舰连人带船一同炸飞。所有低估她的人都会发现，自己面对的是一个极具欺骗性的狡黠对手，还有可能要处理肚子里的一两颗子弹。"
	},{
		"heroId": 26,
		"name": "探险家",
		"pic": 26,
		"roles": ['marksman','mage'],
		"skins": [{
			"id": 26,
			"big": "https://cdn.tinytiger.cn/lolmbk/26.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small81000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "秘术射击",
				"description": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ezrealq.png"
			},{
				"spellKey": "w",
				"name": "精华跃动",
				"description": "伊泽瑞尔发射一个法球，法球会附着在命中的第一个敌方英雄或战略点上。如果伊泽瑞尔用技能或攻击命中一个法球时，会将它引爆来造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ezrealw.png"
			},{
				"spellKey": "e",
				"name": "奥术跃迁",
				"description": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。优先选择被【精华跃动】击中的敌人。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ezreale.png"
			},{
				"spellKey": "r",
				"name": "精准弹幕",
				"description": "伊泽瑞尔蓄力然后向目标区域释放长程能量波，对穿过的敌人造成高额伤害（对小兵和非史诗级野怪的伤害会减少）。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ezrealr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "神采奕奕的冒险家伊泽瑞尔拥有自己不知道的魔法天赋，他搜刮失落已久的古墓，触碰古老的诅咒，还举重若轻地挑战常人不可能完成的极限。他的勇气和壮举无边无际，总是喜欢随机应变地解决任何情况，一定程度上依赖他的小聪明，但更主要是依赖他神秘的恕瑞玛护手，在他的操控下释放出破坏性的奥术爆弹。有一件事可以肯定——只要伊泽瑞尔出现，那么麻烦一定接踵而至。或是还没走远。范围大概是随时随地。"
	},{
		"heroId": 27,
		"name": "无极剑圣",
		"pic": 27,
		"roles": ['assassin','fighter'],
		"skins": [{
				"id": 27,
				"big": "https://cdn.tinytiger.cn/lolmbk/27.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small11000.jpg",
				"name": "default"
			},{
				"id": 27,
				"big": "https://cdn.tinytiger.cn/MasterYi11001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small11001.jpg",
				"name": "暗影 易"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "阿尔法突袭",
				"description": "易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MasterYiq.png"
			},{
				"spellKey": "w",
				"name": "冥想",
				"description": "易通过集中念力来活化他的身体，从而回复生命值，并暂时减少所受的伤害。此外，易还会为双重打击充能，并暂停无极剑道和高原血统的持续时长。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MasterYiw.png"
			},{
				"spellKey": "e",
				"name": "无极剑道",
				"description": "提供额外真实伤害至普攻",
				"abilityIconPath": "https://cdn.tinytiger.cn/MasterYie.png"
			},{
				"spellKey": "r",
				"name": "高原血统",
				"description": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。该技能激活期间，易在击杀掉一名敌方英雄的同时，会延长该技能的持续时间。在击杀和助攻后，也会被动地减少易其它技能的冷却时间。",
				"abilityIconPath": "https://cdn.tinytiger.cn/MasterYir.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 3
		},
		"shortBio": "易师锤炼身体,磨砺心智，直至身心合一。尽管他将暴力作为不得已的选择，但他优雅迅猛的剑法总是让这一手段显得尤为快捷。作为无极之道最后的门徒，易大师致力于这个门派的传承，用七度洞悉目镜搜寻着最有资格的人，寻找潜在的新弟子。"
	},{
		"heroId": 28,
		"name": "无双剑姬",
		"pic": 28,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 28,
				"big": "https://cdn.tinytiger.cn/Fiora114001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small114001.jpg",
				"name": "皇家守卫 菲奥娜"
			},{
				"id": 28,
				"big": "https://cdn.tinytiger.cn/lolmbk/28.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small114000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "破空斩",
				"description": "菲奥娜向一个方向冲刺，并刺击一个附近的敌人，造成物理伤害并施加攻击特效。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fioraq.png"
			},{
				"spellKey": "w",
				"name": "劳伦特心眼刀",
				"description": "菲奥娜在短时间内对所有即将到来的伤害和限制效果进行招架，然后朝着一个方向进行刺击。这个刺击会减速命中的第一个敌方英雄，如果菲奥娜用这个技能格挡掉一个禁锢类效果，那么刺击会造成晕眩效果而非减速效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fioraw.png"
			},{
				"spellKey": "e",
				"name": "夺命连刺",
				"description": "菲奥娜的下两次攻击将获得攻击速度加成。第一次攻击会使目标减速，而第二次攻击必定会产生暴击。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fiorae.png"
			},{
				"spellKey": "r",
				"name": "无双挑战",
				"description": "菲奥娜显示出一个敌方英雄身上的所有四处破绽，并在目标附近时获得移动速度加成。如果菲奥娜命中了所有4处破绽，或者目标在死前至少被命中了1处破绽，那么菲奥娜和范围内的友军就会在接下来的几秒里持续获得治疗效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Fiorar.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 6,
			"status3": 6,
			"status4": 9
		},
		"shortBio": "菲奥娜是全瓦洛兰最可怕的决斗家。她以雷厉风行,狡黠聪慧闻名于世，同样著名的还有她舞弄自己蓝钢佩剑的矫健。菲奥娜出生在德玛西亚王国的劳伦特家族，她从父亲的手中接管了家业，并在一场丑闻风波中将家族拯救于灭亡的边缘。虽然劳伦特家威严不再，但菲奥娜却一直在不懈地努力，希望重振家族荣耀，让劳伦特这个名字重回德玛西亚名望贵族之列。"
	},{
		"heroId": 29,
		"name": "武器大师",
		"pic": 29,
		"roles": ['fighter','assassin'],
		"skins": [{
				"id": 29,
				"big": "https://cdn.tinytiger.cn/Jax24004.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small24004.jpg",
				"name": "卧虎藏龙 贾克斯"
			},{
				"id": 29,
				"big": "https://cdn.tinytiger.cn/lolmbk/29.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small24000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "跳斩",
				"description": "贾克斯跳向一个单位。如果目标是敌人，贾克斯会用他的武器狠狠地抽打敌人的脸，造成额外伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jaxq.png"
			},{
				"spellKey": "w",
				"name": "蓄力一击",
				"description": "贾克斯为武器充能，使他的下次攻击能造成额外伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jaxw.png"
			},{
				"spellKey": "e",
				"name": "反击风暴",
				"description": "贾克斯的武艺让他能够在短时间里躲闪掉所有即将到来的普通攻击，随后对所有周围的敌人快速发起反击，并将他们击晕。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jaxe.png"
			},{
				"spellKey": "r",
				"name": "宗师之威",
				"description": "每连续攻击2次，第3次攻击就会造成额外的魔法伤害。另外，贾克斯可以激活这个技能来施放他的内力，暂时性地提升他的护甲和魔法抗性。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jaxr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 6,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "无论是各种兵器的技法，还是刻薄的挖苦嘲讽，贾克斯都无人能及，他是目前已知的最后一名艾卡西亚武器大师。曾经，故乡的人们狂妄自大地引来了虚空，结果导致家园被夷为平地。在那之后，贾克斯和他的同胞发誓要保护仅存的一切。如今，世界上的魔法再次涌起，沉睡的威胁也再次被触动。于是贾克斯开始在瓦洛兰漫游，手握艾卡西亚的最后光明，考验他遇到的每一名战士，寻找可与自己分庭抗礼的强者，并肩作战。"
	},{
		"heroId": 30,
		"name": "戏命师",
		"pic": 30,
		"roles": ['marksman','mage'],
		"skins": [{
				"id": 30,
				"big": "https://cdn.tinytiger.cn/Jhin202001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small202001.jpg",
				"name": "西部牛仔 烬"
			},{
				"id": 30,
				"big": "https://cdn.tinytiger.cn/lolmbk/30.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small202000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "曼舞手雷",
				"description": "烬朝敌人扔出一颗迷人的手雷。它最多可以命中四个目标，并在每次击杀单位后获得伤害提升。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jhinq.png"
			},{
				"spellKey": "w",
				"name": "致命华彩",
				"description": "烬挥舞他的长枪，进行一次射程极远的射击。它可穿透小兵和野怪，但会在命中第一个敌方英雄后停下。如果目标最近踩到了烬的陷阱,承受过烬的伤害或被烬的队友给命中过，那么还会受到禁锢效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jhinw.png"
			},{
				"spellKey": "e",
				"name": "万众倾倒",
				"description": "烬放置一个隐形的莲花陷阱，陷阱会在敌人经过时绽放。它会减速附近的敌人，然后爆炸为一阵飘零的花瓣并对敌人造成伤害。绚葬之华 - 当烬击杀掉一名敌方英雄时，一个莲花陷阱将在该英雄的尸体附近爆炸。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jhine.png"
			},{
				"spellKey": "r",
				"name": "完美谢幕",
				"description": "烬开始引导，将“低语”切换成一个肩扛式重炮。它能够进行四次超级射击，超级射击的射程极远，可穿透小兵和野怪，但会在命中第一个敌方英雄后停下。“低语”会让命中的敌方单位怯场，也就是对它们造成减速效果和斩杀伤害。第四次射击是经过精心调制的，所以威力特别大，并且必定会造成暴击。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Jhinr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "作为一名心思缜密的癫狂杀手，烬坚信谋杀是一门艺术。他曾在艾欧尼亚的监狱中服刑，但却因为执政议会里涌动着的暗流而得到释放，成为了权术斗争所利用的刺客。烬将手中的枪当成画笔，尽情地挥洒他所追求的残忍艺术，让受害者肝胆俱裂，令旁观者震悚难平。他在自己制作的阴森剧目里肆意取乐，让“恐怖”二字有了最合适不过的信使。"
	},{
		"heroId": 31,
		"name": "影流之主",
		"pic": 31,
		"roles": ['assassin'],
		"skins": [{
				"id": 31,
				"big": "https://cdn.tinytiger.cn/lolmbk/31.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small238000.jpg",
				"name": "default"
			},{
				"id": 31,
				"big": "https://cdn.tinytiger.cn/Zed238001.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small238001.jpg",
				"name": "冲击之刃 劫"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "影奥义！诸刃",
				"description": "劫和他的影分身一起将他们的手里剑向前方掷出。每支手里剑都会对命中的每个敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Zedq.png"
			},{
				"spellKey": "w",
				"name": "影奥义！分身",
				"description": "被动：当劫和他的影分身用相同技能击中一名敌方英雄时，劫会回复能量。每次施放技能只会回复一次能量。主动：劫的影分身向前突进，并在一个地方维持若干秒。再次激活此技能会让劫与这个影分身互换位置。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Zedw.png"
			},{
				"spellKey": "e",
				"name": "影奥义！鬼斩",
				"description": "劫和他的影分身进行斩击，对附近的敌人造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Zede.png"
			},{
				"spellKey": "r",
				"name": "禁奥义！瞬狱影杀阵",
				"description": "劫变为不可被选取状态并突进至一名敌方英雄，同时为目标施加死亡印记。在3秒后，印记将会爆炸，同时造成额外伤害，劫在印记激活期间造成的伤害越多，则此额外伤害越高。如果该英雄死于此技能期间，那么劫可以获得该英雄的一部分攻击力。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Zedr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 9
		},
		"shortBio": "彻底抛弃了仁慈与怜悯的劫，是影流教派的领袖。他创立影流的目标是将艾欧尼亚的魔法和传统武术用于实战，驱逐诺克萨斯侵略者。在战争中，绝望指引他开启了神秘的暗影形态。这是一种恶灵魔法，虽然强大，但同时非常危险且有腐化之力。劫已经完全掌握了这种禁忌之术，用它摧毁自己眼中的威胁，维护自己的国家，以及自己的教派。"
	},{
		"heroId": 32,
		"name": "蒸汽机器人",
		"pic": 32,
		"roles": ['tank','fighter'],
		"skins": [{
				"id": 32,
				"big": "https://cdn.tinytiger.cn/Blitzcrank53011.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small53011.jpg",
				"name": "战场BOSS 布里茨"
			},{
				"id": 32,
				"big": "https://cdn.tinytiger.cn/lolmbk/32.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small53000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "机械飞爪",
				"description": "布里茨发射他的右手，来抓取碰到的第一个敌人，在对敌人造成伤害的同时，还会将这名敌人拉到他的面前。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Blitzcrankq.png"
			},{
				"spellKey": "w",
				"name": "过载运转",
				"description": "布里茨对自己进行了超级充电，他的攻击速度和移动速度得到了显著提升。他会在效果结束后暂时减速。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Blitzcrankw.png"
			},{
				"spellKey": "e",
				"name": "能量铁拳",
				"description": "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Blitzcranke.png"
			},{
				"spellKey": "r",
				"name": "静电力场",
				"description": "被布里茨攻击过的敌人会被标记并在1秒后受到闪电伤害。此外，布里茨可以主动激活这个技能来移除附近敌人们的护盾,对他们造成伤害并暂时沉默他们。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Blitzcrankr.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 7,
			"status3": 5,
			"status4": 3
		},
		"shortBio": "布里茨是来自祖安的一个巨大的,几乎坚不可摧的机械体，最初被制造出来的目的是为了处理有毒废料。然而他觉得自己存在的意义太过狭隘，于是就改装了自己的形态，以便更好地效力于地沟区的孱弱人群。布里茨无私地使用自己的力量和钢铁之躯保护其他人，伸出长长的机械援手，或者发出能量脉冲，制服任何带来麻烦的人。"
	},{
		"heroId": 33,
		"name": "众星之子",
		"pic": 33,
		"roles": ['support','mage'],
		"skins": [{
			"id": 33,
			"big": "https://cdn.tinytiger.cn/lolmbk/33.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small16000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "流星坠落",
				"description": "一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Sorakaq.png"
			},{
				"spellKey": "w",
				"name": "星之灌注",
				"description": "索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Sorakaw.png"
			},{
				"spellKey": "e",
				"name": "星体结界",
				"description": "在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Sorakae.png"
			},{
				"spellKey": "r",
				"name": "祈愿",
				"description": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Sorakar.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 3,
			"status3": 9,
			"status4": 3
		},
		"shortBio": "索拉卡是来自巨神峰彼端天界维度的流浪者。她放弃了不朽的神格，保护凡间的种族免遭他们自身暴力本能的伤害。她对自己遇见的每个人都施以同情与仁慈——即使是那些对她心存恶念的人也不例外。虽然索拉卡见证了这世上如此多的苦痛与挣扎，但她依然相信符文之地的人们依然有更多潜力尚未发现。"
	},{
		"heroId": 34,
		"name": "铸星龙王",
		"pic": 34,
		"roles": ['mage'],
		"skins": [{
			"id": 34,
			"big": "https://cdn.tinytiger.cn/lolmbk/34.jpg",
			"small": "https://cdn.tinytiger.cn/20200616/small136000.jpg",
			"name": "default"
		}],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "星河急涌",
				"description": "奥瑞利安·索尔朝着一个方向扔出一粒不断延展的星核。再次释放，或是星核越出了奥瑞利安·索尔周身的星轨半径时，星核便会击晕附近的敌人并造成伤害。",
				"abilityIconPath": "https://cdn.tinytiger.cn/AurelionSolq.png"
			},{
				"spellKey": "w",
				"name": "星穹暴涨",
				"description": "奥瑞利安·索尔将护体行星推向外轨，并提升它们的伤害和速度。",
				"abilityIconPath": "https://cdn.tinytiger.cn/AurelionSolw.png"
			},{
				"spellKey": "e",
				"name": "星流横溢",
				"description": "奥瑞利安·索尔进行一段极远距离的飞行。",
				"abilityIconPath": "https://cdn.tinytiger.cn/AurelionSole.png"
			},{
				"spellKey": "r",
				"name": "星弦高落",
				"description": "奥瑞利安·索尔击出一道星火，对路径上的所有敌人造成伤害及减速，并将靠近他的敌人击退至奥瑞利安·索尔的星轨附近。",
				"abilityIconPath": "https://cdn.tinytiger.cn/AurelionSolr.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 9
		},
		"shortBio": "奥瑞利安?索尔曾创造了奇迹般的群星，为无垠的荒芜太空布下他宏伟的恩典。而如今，他的威能却遭人设计，被迫服务于某个潜藏在深空中的帝国。为了重返铸星大道，奥瑞利安?索尔誓要夺回属于自己的自由。哪怕召星降怒，倾覆众生。"
	},{
		"heroId": 35,
		"name": "九尾妖狐",
		"pic": 35,
		"roles": ['mage','assassin'],
		"skins": [{
				"id": 35,
				"big": "https://cdn.tinytiger.cn/Ahri103002.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small103002.jpg",
				"name": "暗影妖狐 阿狸"
			},{
				"id": 35,
				"big": "https://cdn.tinytiger.cn/lolmbk/35.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small103000.jpg",
				"name": "default"
			}
		],
		"spell": [{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "欺诈宝珠",
				"description": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。在宝珠造成若干次命中后，阿狸的下一个宝珠在命中时将回复她的生命值。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ahriq.png"
			},{
				"spellKey": "w",
				"name": "妖异狐火",
				"description": "阿狸放出三团狐火。短暂的延迟后，它们会锁定附近的三名敌人进行攻击。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ahriw.png"
			},{
				"spellKey": "e",
				"name": "魅惑妖术",
				"description": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害并将目标魅惑，并且立刻终止目标的移动技能并使目标无恶意地走向她。目标所受的来自阿狸的伤害会暂时提升。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ahrie.png"
			},{
				"spellKey": "r",
				"name": "灵魄突袭",
				"description": "阿狸向前猛冲，并放出元气弹，对周围的数个敌人造成伤害。灵魄突袭在进入冷却阶段以前最多可被施放三次。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Ahrir.png"
			}
		],
		"info": {
			"status1": 9,
			"status2": 3,
			"status3": 3,
			"status4": 6
		},
		"shortBio": "符文之地的潜在力量和她有着与生俱来的共鸣。原始的魔法在她手中凝为魔法宝珠。瓦斯塔亚人阿狸醉心于玩弄猎物的情感，然后吞噬他们的生命精魄。虽然阿狸是天生的掠食者，但她却对猎物始终保存着一份同情，因为每一个被吞噬的灵魂，都伴随着他们生前的记忆。"
	},{
		"heroId": 36,
		"name": "牛头酋长",
		"pic": 36,
		"roles": ['tank','support'],
		"skins": [{
				"id": 36,
				"big": "https://cdn.tinytiger.cn/Alistar12008.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small12008.jpg",
				"name": "黑暗骑士 阿利斯塔"
			},{
				"id": 36,
				"big": "https://cdn.tinytiger.cn/lolmbk/36.jpg",
				"small": "https://cdn.tinytiger.cn/20200616/small12000.jpg",
				"name": "default"
			}
		],
		"spell": [
			{
				"spellKey": "passive",
				"name": 1,
				"description": 1,
				"abilityIconPath": "https://cdn.tinytiger.cn/lolmbk/annie_passive.png"
			},{
				"spellKey": "q",
				"name": "大地粉碎",
				"description": "阿利斯塔锤击地面，对附近的敌人造成魔法伤害并使他们浮空。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Alistarq.png"
			},{
				"spellKey": "w",
				"name": "野蛮冲撞",
				"description": "阿利斯塔冲撞目标，对其造成伤害并击退目标。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Alistarw.png"
			},{
				"spellKey": "e",
				"name": "践踏",
				"description": "阿利斯塔践踏附近的敌方单位，无视单位的碰撞体积并在他伤害到一名敌方英雄时获得一层充能。在满层充能时，阿利斯塔的下次对敌方英雄发起的普攻将造成额外魔法伤害和晕眩效果。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Alistare.png"
			},{
				"spellKey": "r",
				"name": "坚定意志",
				"description": "阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
				"abilityIconPath": "https://cdn.tinytiger.cn/Alistarr.png"
			}
		],
		"info": {
			"status1": 3,
			"status2": 9,
			"status3": 6,
			"status4": 3
		},
		"shortBio": "阿利斯塔一直都是威名远扬的巨力勇士，他要为自己被屠杀的氏族向诺克萨斯帝国复仇。虽然他曾被奴役，并被迫成为斗兽场中的角斗士，但他坚不可摧的意志使他免于沦为真正的野兽。现在，挣脱了奴役枷锁的他继续以受苦之人和弱者的名义战斗。他的愤怒，还有犄角,蹄子和拳头，都是他的武器。"
	}
]}

var roles={
"mage":"法师",
"support":"辅助",
"fighter":"战士",
"tank":"坦克",
"marksman":"射手",
"assassin":"刺客",
}
export {
	data,
	roles
}
//
