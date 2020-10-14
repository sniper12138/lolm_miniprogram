//资讯列表 一个{}代表一个资讯页
let artDatas = [{
		'id': 0, //id 不可重复
		'date': '2020-05-31 19:49:48', //创建时间
		'auth': '英雄联盟手游资讯', //作者
		'cover': 'https://wx2.sbimg.cn/2020/06/12/banner1.jpg',//封面图
		'path': 'art', //文章类型 填入art
		'title': '【lol手游研发团队快报】这些英雄加入了首次全球测试！',//文章标题
		'cnt': `<h2 style="margin-top:0;margin-right:0;margin-bottom:14px;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:center;background:rgb(255,255,255)">
    <strong><span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size: 14px"><span style="font-family:微软雅黑">【</span>lol手游研发团队快报】这些英雄加入了首次全球测试！</span></strong>
</h2>
<p>
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)"><span style="font-family:微软雅黑">对翘首期盼</span>LOL手游的玩家们来说，6月6日注定是个不平凡的日子。</span><strong><span style="font-family: 微软雅黑;color: rgb(255, 157, 36);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)">LOL手游的第一轮全球测试</span></strong><span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)"><span style="font-family:微软雅黑">终于开启了！</span></span>
</p>
<p>
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)"><span style="font-family:微软雅黑"><img src="https://s1.ax1x.com/2020/06/12/tOfN3d.png"/></span></span>
</p>
<p>
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)"><span style="font-family:微软雅黑">胖虎特地为不能翻墙的各位带来了</span></span><strong><span style="font-family: 微软雅黑;color: rgb(255, 157, 36);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)">LOL手游研发团队</span></strong><span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)"><span style="font-family:微软雅黑">在推特上近几日发的消息，没有测试资格，看看研发团队的发言充充饥。</span></span>
</p>
<p>
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px;background: rgb(255, 255, 255)">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">来自</span>LOL研发团队推特日志</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">“我们将在巴西和菲律宾进行第一轮全球测试！在6月5日至6月26日的巴西/6月6日至6月27日的菲律宾。”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">“在接下来的几个小时里，我们将为菲律宾地区发出LOL手游测试邀请码！请务必检查您的电子邮件收件箱，包括您的促销和垃圾邮件文件夹。希望不久能见到你！”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">“对于alpha玩家，Wild Rift的正常队列现在24/7可用，我们刚刚启用了10级以上玩家的排名。让我们知道你的想法！”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——<img src="https://s1.ax1x.com/2020/06/12/tOfUgA.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><img src="https://s1.ax1x.com/2020/06/12/tOft9H.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">“大家好！这里有一个关于alpha资格的更新：在接下来的几个小时里，我们将禁用所有没有通过Google Play Store邀请直接获得访问权限的帐户。”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px">——</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px">“我们开启菲律宾地区测试的第三天！</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px"><span style="font-family:微软雅黑">谢谢你到目前为止的所有反馈</span>-即使我们没有直接回应，</span><strong><span style="font-family: 微软雅黑;color: rgb(255, 157, 36);letter-spacing: 1px;font-size:16px"><span style="font-family:微软雅黑">我们也一直在倾听</span></span></strong><span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px"><span style="font-family:微软雅黑">。继续！</span>”</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfGND.png"/></span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px">——</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;background:rgb(255,255,255)">
    <span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px">“LOL手游尽可能的</span><strong><span style="font-family: 微软雅黑;color: rgb(255, 157, 36);letter-spacing: 1px;font-size:16px"><span style="font-family:微软雅黑">保留了</span>PC端的操作手感</span></strong><span style="font-family: 微软雅黑;color: rgb(51, 51, 51);letter-spacing: 1px;font-size:16px"><span style="font-family:微软雅黑">，也对应的为了配合新平台，对英雄做出了细微调整</span>”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span><span style="font-family: 微软雅黑; font-size:16px;">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfRvn.png"/><img src="https://s1.ax1x.com/2020/06/12/tOfg3j.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOf2gs.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">“我们的旅程还有很长时间，所以我们把这个测试保持在很小的范围内，今年晚些时候还会在其他地区做更多的测试。对于菲律宾和巴西的玩家：一切都还在进行中，我们需要你的反馈来帮助我们做得更好！”</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">怎么样，是不是羡慕吐了？再来和胖虎了解下这次测试的其他消息吧</span>~</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">双摇杆控制</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">英雄联盟手游采取双摇杆控制的设计，开发团队希望带来原汁原味的英雄联盟游戏体验，并且吸引更多的新玩家。他们也会在这次测试中上线游戏外围系统，想听听玩家对于皮肤、藏品这些系统的反馈。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <strong><span style="font-family: 微软雅黑;font-size: 14px"><span style="font-family:微软雅黑">本次测试包括的英雄</span></span></strong>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">阿狸、易大师、拉克丝、安妮、盖伦、菲奥娜、蔚、布里茨、卡蜜尔、烬、伊泽瑞尔、迦娜、索拉卡、娜美、内瑟斯、布隆、厄运小姐、格雷福斯、金克丝、阿利斯塔、奥拉夫、古拉加斯、贾克斯、墨菲特、希瓦娜、奥瑞利安索尔、奥莉安娜、菲兹、艾希、泰达米尔、崔斯特、薇恩、赵信、劫、亚索、吉格斯</span></span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOffuq.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">开发者表示这只是第一轮测试中的英雄，在不久的将来还会有更多的英雄加入。虽然手游是采取了传统的双摇杆机制，但他们在角色选取和瞄准方面下了很多功夫，在后续的开发者博客会详细谈论。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfJ4e.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">内瑟斯：为了更好地体现内瑟斯</span>Q技能的成长性，设计师调整了Q技能的叠加速度，视频中12级就能叠到了435层。</span><span style="font-family: 微软雅黑; font-size:16px;">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><img src="https://s1.ax1x.com/2020/06/12/tOfJ4e.png"/></span>
</p>
<p>
    <span style="font-family: 微软雅黑; font-size:16px;">崔斯特：</span><span style="font-family: 微软雅黑; font-size:16px;">E技能不再只是一个纯被动的技能，新版的E技能会为崔斯特提供爆发性的攻速加成，带来全新的出装可能，视频中的崔斯特就是主E打法。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfBHf.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">厄运小姐：</span>Q技能变成了非指向性技能，这意味着在缺乏选取目标和视野的情况下也能够释放，让玩家有了更多的操作空间，也更加符合手游的摇杆设计。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfhD0.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">希瓦娜：手游中更加体现巨龙杀手的特性，希瓦娜击杀元素龙后会获得独特的巨龙形态加成。击杀炼狱亚龙可以对英雄造成灼烧效果时附带真实伤害，击杀山脉亚龙则让她的</span>Q技能附带减速效果。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">部分英雄的技能根据手游环境进行了调整，这些改动只是让他们更加适合新平台，但有些英雄的玩法基本上和端游一样，保持一致的游戏体验。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <strong><span style="font-family: 微软雅黑;font-size: 14px"><span style="font-family:微软雅黑">游戏的核心玩法</span></span></strong>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">负责游戏玩法与平衡的设计师</span>Chao，则是介绍了英雄联盟手游的具体玩法。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfIET.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">首先从英雄选择界面开始，和</span>PC端的设计非常相似，可以根据英雄定位来筛选角色，还会显示预选英雄的具体技能效果，右下角则是有符文、召唤师技能的选择。一旦你选择英雄后，还能够切换皮肤。</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOf4bV.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">游戏中目前有</span>7种召唤师技能，玩家可以携带2个，这些技能分别是幽灵疾步、治疗术、屏障、虚弱、闪现、引燃和惩戒。</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOfajI.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">游戏保留了符文系统，增加游戏的可玩性，但为了缩短游戏流程，符文系统进行了简化。可选的基石符文变成了</span>8个，不过，可以看到有召唤艾黎、征服者、不灭之握、余震和迅捷步法等。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">玩家选完基石符文后，还可以选择</span>3个次级符文，就能完成你的符文搭配。设计师为英雄联盟手游增加了几个独有的次级符文。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">甜食专家：在你吃下蜜蜂果实时会获得金币。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">忠诚：让你和队友彼此靠近时会获得防御属性，可以叠加。</span></span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOfwut.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">游戏的地图特色没有太大变化，游戏中有三条主路可以进行推进，摧毁对手的枢纽水晶就获得胜利，每条主路上有</span>3个防御塔，外塔、内塔和高地塔，没有门牙塔。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">新版的水晶枢纽虽然没有门牙塔保护，但自身可以攻击敌人。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">地图采取一些特殊的设计，红方的地图是翻转状态，这意味着红方的射手和辅助要走上路。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">每个野怪营地都有</span>buff怪，红buff是提供额外伤害，蓝buff是提供额外回复。手游中的buff似乎还会成长，提供更强的增益效果。</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOf0DP.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">植物系统也是保留下来。野区中有占卜花朵可以侦察敌人的位置，防御塔下有蜜糖果实可以提供回复能力，野区有喷射球果可以提供爆炸弹射效果。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">元素亚龙有四种不同的元素魔力，和</span>PC端一样的水龙、火龙、土龙、风龙，还有更加强大的远古巨龙。龙的刷新时间、频率、效果暂不清楚。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfoUU.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">英雄联盟手游是可以部署侦查守卫的，来获得该地区的视野，目前看起来还能切换成扫描透镜。视野是免费的，但有冷却时间限制。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">总体来说，手游还原了英雄联盟中玩家熟悉的每个游戏阶段，但整体流程缩减为</span>15至20分钟，线上的补刀换血、策略gank、小龙争夺战、关键团战等元素都保留下来。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfT5F.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">打野玩家在打完四组野怪后，就可以将惩戒升级为挑战惩戒或者深寒惩戒，这样一来的话，打野玩家在前期就可以发起</span>gank了。</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOfsUS.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">游戏中有很多玩家熟悉的装备，但只能在泉水区域才能购买。虽然装备的数值和细节可能有所改动，但效果基本上和端游是一样的。比如死亡之帽还是叠法强的不二之选，三相之力仍然提供了成吨的输出。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfrE8.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">坦克英雄还有全新的女神之泪系列装备，名为</span>“芬布尔之冬”，当你对敌人使用控制技能时，会为你提供护盾效果。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">英雄联盟手游也有很多玩家熟悉的主动装备，但每名玩家只能购买一个。这些主动效果现在作为三级鞋子购买，有点类似于几年前的附魔系统，主动效果是可以和任何类型的鞋子搭配升级。比如，你护甲鞋也能够买金身、魔抗鞋也能够购买救赎。</span></span>
</p>
<p>
    <span style="font-family: 微软雅黑; font-size:16px;">&nbsp;</span><span style="font-family: 微软雅黑; font-size:16px;">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfsUS.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">虽然玩家必须回到泉水才能购买，但游戏加入了快捷购买按钮，以便玩家迅速购买装备，尽快回到线上。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">设计师会一直关注游戏的深度和策略性，他们想要一个容易上手但具有游戏深度的</span>MOBA手游，能够顺利交到朋友，他们希望核心的5v5竞技体验可以符合玩家的预期。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOfy4g.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">本次测试包括人机对战模式，以供玩家练习技术。他们还提供了关于基础操控和技能释放的相关教程，即使是没有接触过英雄联盟的新手玩家，都能够顺利上手。在游戏正式上线后，他们会增加更多的教学内容。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOfq29.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">本次测试的玩家还能够体验到排位系统，保留了英雄联盟的核心竞技玩法，但为了适应收集平台进行了一些调整，看起来还是有晋级赛机制。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <strong><span style="font-family: 微软雅黑;font-size: 13px"><span style="font-family:微软雅黑">游戏的皮肤系统</span></span></strong>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOfb8J.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">手游团队负责皮肤的设计师</span>Wun，则是谈到了游戏内的付费内容。她确认了，英雄联盟手游是没有强迫付费、冷却倒计时、没完没了的弹窗。他们为玩家提供了各种各样的自我表达方式，比如自定义个人资料、秀翻对手后进行炫耀、使用自己喜欢的皮肤。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">因此，英雄联盟手游延续了端游的商业模式，玩家可以通过非付费的渠道获得所有英雄。当然，玩家也可以付费获取，但付费不是游戏的核心，玩家不会有强迫付费的感觉。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">从开发者视频来看，每个英雄都有一个伴生皮肤，源自于端游的皮肤概念，但不是照搬模型和特效，而是进行了优化。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">目前公布的皮肤包括</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">焰尾妖狐</span> <span style="font-family:微软雅黑">阿狸</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">战场</span>BOSS 布里茨</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">炼狱魔女</span> <span style="font-family:微软雅黑">蔚</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">秘密特工</span> <span style="font-family:微软雅黑">赵信</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">西部牛仔</span> <span style="font-family:微软雅黑">厄运小姐</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">冰川巨兽</span> <span style="font-family:微软雅黑">墨菲特</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">苍穹之光</span> <span style="font-family:微软雅黑">薇恩</span></span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">西部牛仔</span> <span style="font-family:微软雅黑">烬</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">还有很多皮肤在制作中，这次公布的只是一部分，皮肤团队希望在手游中以全新的方式，向玩家呈现他们最爱的皮肤。</span></span>
</p>
<p style="border-bottom:1px solid windowtext;padding:0 0 0 0 ">
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">胖虎在接下来的时间，还会不断为大家带来最新的测试相关新闻，前往【小虎</span>hoo】LOL手游圈子，与其他玩家一起交流感想吧~记得持续关注胖虎哦！</span>
</p>
<p>
    <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
</p>
<p>
    <br/>
</p>`//文章内容 富文本 可访问 http://ueditor.baidu.com/website/onlinedemo.html 获取富文本内容
	},
	{
		'id': 1,
		'date': '2020-06-06 04:48:15',
		'auth': '英雄联盟手游资讯',
		'path': 'art',
		'cover': 'https://wx2.sbimg.cn/2020/06/12/banner1.jpg',
		'title': 'LOL手游 | 防/骗/手/册',
		'cnt': `<p style="text-align:center">
    <strong><span style="font-family: 微软雅黑;font-size:16px">LOL手游 | 防/骗/手/册</span></strong>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">胖虎知道大家看着拥有了</span>LOL手游测试资格的人就心痒痒，但是羡慕归羡慕，可不要头脑一时发热，受骗上当游戏也玩不上！</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">那么随胖虎一起了解下最近的各种防骗提醒和骗子手法吧</span>~</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:15px">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:15px">01来自英雄联盟手游运营团队的提示</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&quot;亲爱的召唤师，近期出现了一些关于游戏测试资格发放、安装包发放、测试资格申请教程、内测邀请、测试账号出售等不实虚假信息。特别提醒，本次巴西与菲律宾开启的为极小范围技术测试，其他地区并未参与，测试资格也未公开发放。请勿相信上述关于测试资格的虚假诈骗信息，以防个人账号信息及财产受到损害。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">如有新的消息，会第一时间在官方网站（</span>https://lolm.qq.com）进行发布告知，请以该渠道信息为准，感谢您的关注与支持。&quot;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——6月6日</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">各位召唤师：</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">Riot公布海外测试的信息后，最近出现了一些关于游戏安装包以及测试资格的虚假诈骗信息，比如“提供游戏安装包”“提供测试资格”“关注公众号可获得内测资格”“邮件通知已获得测试资格”“测试资格获取教程”等等。在此特别提醒一下大家，6月份是极小规模的技术测试，主要是为印证网络稳定性等技术情况。测试只在巴西和菲律宾进行，其余地区未参与本次测试。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">请大家不要相信任何关于安装包以及测试资格的诈骗信息，避免上当受骗，耐心等待就好啦。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img width="176" height="193" src="http://ueditor.baidu.com/ueditor/themes/default/images/spacer.gif"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">亲爱的召唤师：</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">《英雄联盟》正版手游一经公布就受到大家的广泛关注，手游以策略、战术、意识、配合，在移动端重现峡谷战场乐趣。但我们发现部分玩家大量散布不实信息，现提醒召唤师们，《英雄联盟》正版手游目前关注即可领礼包，且没有任何非官方渠道可以下载试玩或获取激活码！请召唤师们留意关注官方后续的公告，不要相信点赞、加群做任务等可以获得激活码的虚假信息，谨防上当受骗！此类相关虚假信息我们会删除处理，对于屡教不改者将进行封号处理，请大家珍惜自己的社区账号！另外交友开黑请到热门专题下交友发布专用帖子中发布或添加，其余交友帖将删除处理，请大家共同维护游戏圈环境！</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">——早前的官方公告</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <span style=";font-family:微软雅黑;font-size:16px">02来自围脖博主们的提醒</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&gt;&gt;&gt;&gt;&gt;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">#英雄联盟手游[超话]##英雄联盟手游#英雄联盟手游目前小规模测试，只在巴西和菲律宾进行，大家不要相信任何安装包和测试资格！</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOoa01.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&gt;&gt;&gt;&gt;&gt;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">#英雄联盟手游[超话]#玩家们要是收到这种类似的邮件都是假的！不要相信！！！</span>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOoLBn.md.png"/>
</p>
<p>
    <img src="https://s1.ax1x.com/2020/06/12/tOoO7q.png"/>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
    <span style=";font-family:微软雅黑;font-size:16px">&gt;&gt;&gt;&gt;&gt;</span>
</p>
<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
    <span style=";font-family:微软雅黑;font-size:16px">#LOL手游# &nbsp;&nbsp;现在英雄联盟手游虚假的邮件内测码越来越多了。。[挖鼻][笑cry]&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOoqns.png"/><img src="https://s1.ax1x.com/2020/06/12/tOovNV.png"/><img src="https://s1.ax1x.com/2020/06/12/tOoxhT.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">03</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">被举报的官方</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">LOL手游2020年底上线，结果官博被举报？原因：虚假宣传！</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">都</span>2020年了，大家是否还记得当初十周年庆典上，官方曾经说过，英雄联盟手游将于19年底开始测试，可这都20年初了，还是一点声响都没有，最近还发通告说，预计将于2020年底正式登陆iOS和Android系统！</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;<img src="https://s1.ax1x.com/2020/06/12/tOoHXj.png"/></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&quot;还记得当初十周年庆典上，英雄联盟官方说预计将于19年底测试，多少小伙伴表示只要你出，我马上卸载王者荣耀，转战LOL手游，甚至有些暴躁老哥在线表演卸载王者荣耀，就等着LOL手游测试，结果就这样被鸽了，而且一鸽就是鸽一年，这是鸽王二号要上线了么？</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">既然是暴躁老哥，那自然是会有暴躁老哥的样子。据说</span>LOL手游的官博都没了好几次了，至于为什么没有呢？原因就是虚假宣传，欺骗消费者感情，被大伙举报的。不过好在是大号，要是一些不知名小号，举报一次就没了，哪会像LOL手游的官博一样，一天都能没个好几次。这一次公布的测试时间应该会比较准确，之前和平精英不久测试了很长时间么？现在他说的是正式登陆，那么测试肯定会在年底之前开始，比如说三四月份，四五月份这样子。而且游戏上市都是需要版号的，之前和平精英测试这么久，结果后来因为版号问题改名，导致人气下滑十分严重，也错过了充值人气最高的时候，属实可惜，版号没有下来游戏也不能测试呀。&quot;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">所以啊，这次没拿到测试资格的兄弟们，不如和胖虎一起快乐玩端游，多多关注胖虎发布的信息，手游总会来的！</span></span>
</p>
<p>
    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
</p>
<p>
    <br/>
</p>`
	},
	{
			'id': 2,
			'date': '2020-06-06 04:48:15',
			'auth': '英雄联盟手游资讯',
			'path': 'art',
			'cover': 'https://s1.ax1x.com/2020/06/12/tXFBqI.png',
			'title': '《英雄联盟》手游开发者日志，深度解读新开发进度！',
			'cnt': `<h2 style="margin-top:0;margin-right:0;margin-bottom:14px;margin-left:0;text-indent:0;padding:0 0 0 0 ;background:rgb(255,255,255)">
	    <strong><span style="font-family: &#39;Microsoft YaHei UI&#39;color: rgb(51, 51, 51);letter-spacing: 1px;font-size: 22px"><span style="font-family:Microsoft YaHei UI">《英雄联盟》手游开发者</span></span></strong><strong><span style="font-family: &#39;Microsoft YaHei UI&#39;color: rgb(51, 51, 51);letter-spacing: 1px;font-size: 22px"><span style="font-family:Microsoft YaHei UI">日志，深度解读新开发进度！</span></span></strong>
	</h2>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <strong><span style="font-family: &#39;Times New Roman&#39;"><span style="font-family:宋体">英雄的核心魅力在于</span>“<span style="font-family:宋体">高光瞬间</span><span style="font-family:Times New Roman">”</span></span></strong>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">对于设计师们来说，如何让大家在手游中感受到与端游相同的令人难忘、震撼、激动的操作瞬间是一件非常重要的事情，这是游戏体验非常重要的一部分。所以</span>“</span><strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">如何保留英雄精髓</span></span></strong><span style=";font-family:Calibri;font-size:16px">”<span style="font-family:宋体">以及</span><span style="font-family:Calibri">“</span></span><strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">如何让英雄在移动端上更有趣</span></span></strong><span style=";font-family:Calibri;font-size:16px">”<span style="font-family:宋体">是设计师们非常注重思考的两个问题。</span></span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">大部分的英雄在移动端都进行了</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">很高程度的还原</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，也有一部分英雄在</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">保留核心元素</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">的同时进行了</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">一些调整</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，也许你对寒冰的大招转弯记忆犹新，除此以外还有其他的一些变化。</span></span>
	</p>
	<p>
	    <img src="https://s1.ax1x.com/2020/06/12/tXFBqI.png"/>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">比如在技能机制改动方面，薇恩的圣银弩箭（</span>W<span style="font-family:宋体">）技能在手游中</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">增加了主动的属性</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，使用后可以短暂地增加攻击速度。这样的微调让薇恩在交战中有了更多秀的可能，同时也</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">提升了英雄的可玩性</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">。</span></span>
	</p>
	<p>
	    <img src="https://s1.ax1x.com/2020/06/12/tXFrZt.png"/>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <strong><span style="font-family: &#39;Times New Roman&#39;"><span style="font-family:宋体">移动端的操作会更加</span>“<span style="font-family:宋体">精准与有效</span><span style="font-family:Times New Roman">”</span></span></strong>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">在《英雄联盟》中，所有英雄都有</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">独一无二的操作感受</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，而这些英雄带来的独特体验也是召唤师们的乐趣所在。从端游到手游，手感与微操的调整同样是非常重要的，</span></span><strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">更流畅的手感体验与更精准的目标判定</span></span></strong><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">也能够很好地提升大家的体验。</span></span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">为此团队也针对部分英雄的操作进行了</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">专门的优化</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，在保留独一无二操作感受的同时，让技能释放、英雄走位</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">更加适合移动端的操作习惯</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">。</span></span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">例如，安妮的碎裂之火（</span>Q<span style="font-family:宋体">）技能和赏金猎人的一箭双雕（</span><span style="font-family:Calibri">Q</span><span style="font-family:宋体">）技能在端游中需要锁定目标，在移动端中，这两个技能调整为了选定方向释放，可以攻击到路径方向上的敌人，你的目标选定会更加精准与高效。当然，</span></span><strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">并非所有的锁定机制都会这样调整</span></span></strong><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，设计团队会考虑技能释放的舒适感以及机制变化是否影响到英雄本身的体验。</span></span>
	</p>
	<p>
	    <img src="https://s1.ax1x.com/2020/06/12/tXFyIf.png"/><span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <strong><span style="font-family: &#39;Times New Roman&#39;"><span style="font-family:宋体">认真打磨只为给大家带来更多快乐</span></span></strong>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">我们知道很多小伙伴非常关心游戏上线的时间，我们也非常期待能够早点和大家见面，但一款游戏的开发过程非常的复杂，会经历非常多的开发与测试工作。</span></span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">我们非常重视这款产品，也</span></span><strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">希望它能够让大家满意并带来真正的快乐</span></span></strong><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，所以在</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">每一个环节与细节的打磨中都付出了大量的时间与精力</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，非常非常感谢你们的关注与期待，也恳请大家能够多一点点耐心，以后，我们希望在更长的时间里，为你们的生活带来更多陪伴。</span></span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">我们希望在《英雄联盟》手游中，大家能够</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">体验到和端游一样独特、有趣的游戏魅力</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，不管是新玩家还是老玩家都可以</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">体验到很特别的快乐</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">。上手起来不会那么难，但也能打出帅气的操作，总之就是在手游中，你可以和你的朋友一起获得更多的快乐</span>~</span>
	</p>
	<p>
	    <img src="https://s1.ax1x.com/2020/06/12/tXFsdP.png"/><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
	</p>
	<p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding:0 0 0 0 ">
	    <strong><span style="font-family: &#39;Times New Roman&#39;color: rgb(10, 109, 207)"><span style="font-family:宋体">以上是游戏开发版本中的部分内容展示，目前游戏还在做一些持续地调整与优化</span></span></strong><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，游戏开发团队</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">非常重视召唤师们的感受与诉求</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，并希望能和大家进行更多的交流。所以，在这里也非常诚挚邀请大家对产品内容方面能够</span></span><span style=";font-family:Calibri;color:rgb(62,62,62);font-size:16px"><span style="font-family:宋体">多提一些建议与想法</span></span><span style=";font-family:Calibri;font-size:16px"><span style="font-family:宋体">，开发团队会听取大家宝贵的建议来为产品做改善，希望能和你们一起把这款产品做的更好！</span></span>
	</p>
	<p>
	    <img src="https://s1.ax1x.com/2020/06/12/tXF0sA.png"/><span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <span style=";font-family:Calibri;font-size:16px">&nbsp;</span>
	</p>
	<p>
	    <br/>
	</p>`
		},
		{
			'id': 3,
			'date': '2020-06-06 04:48:15',
			'auth': '英雄联盟手游资讯',
			'path': 'art',
			'cover': 'https://s1.ax1x.com/2020/06/12/tXkYmn.png',
			'title': '英雄联盟手游官方FAQ问答，6月6日将开启Alpha阶段',
			'cnt': `<p>
	    <strong><span style="font-family: 微软雅黑;font-size:16px"><span style="font-family:微软雅黑">英雄联盟手游官方</span>FAQ问答，6月6日将开启Alpha阶段</span></strong>
	</p>
	<p>
	    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">雄联盟手游</span>Wild Rift，即将在6月6日于菲律宾和巴西进行Alpha阶段测试，如果你还没有了解英雄联盟手游的内容，请查看我们的另一篇介绍。万众期待的Wild Rift将于6月开启首轮技术测试，拳头游戏整理了玩家可能会遇到的九个问题，并且给予了答案，让我们通过这篇FAQ来了解Wild Rift的具体情况吧。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><img src="https://s1.ax1x.com/2020/06/12/tXkYmn.png"/><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：Wild Rift的技术测试是什么回事？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：从6月6日到6月27日，Wild Rift将向巴西和菲律宾的部分安卓手机用户开放。这次测试的范围比较小，游戏的大部分内容还在进行中，但我们想要收集一些玩家的重要反馈。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：你们打算测试什么内容》</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：我们打算测试Wild Rift的核心玩法，我们必须知道手游适合符合你们对英雄联盟的标准体验。其次是游戏系统，我们想要了解游戏能够轻松将你们的朋友带入Wild Rift，我们的进度系统是否有效，玩家获得英雄的过程是否公平。最后则是游戏的基础架构和服务器稳定性，确保我们为大家的对局提供优质服务。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：我怎样才能获得测试资格？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：这次测试的规模比较小，我们会随机从已经在谷歌商店中注册Wild Rift的玩家名单里随机抽选玩家。测试会在6月6日当天早些时候发送，随着测试的进行，我们会邀请更多玩家参与，即使你第一天没有得到资格，也请密切留意邮件。在接受邀请后，你需要使用预先注册的谷歌账号进行登录。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">谷歌商店预约地址：</span></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">[</span><a href="https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift"><span style=";font-family:微软雅黑;font-size:16px">https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift</span></a><span style=";font-family:微软雅黑;font-size:16px">]</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：如果我无法获得资格怎么办？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：我们依然爱你三千次！由于测试无法容纳大多数人，但我们还是想向你们展现工作成果，可以关注我们的开发者博客最新消息。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：为什么选择巴西和菲律宾地区？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：好吧，因为我们真的非常喜欢巴西烤肉和鸡肉阿斗波。我们想从几个地区先开始测试，而这两个地区的玩家游戏方式并非十分相似，我们可以获得一系列的反馈和数据，确保我们在不同的玩家群体中达到了目标。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：游戏的最低配置是什么？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：由于我们正在测试一些与游戏性能无关的东西，所以本次测试提高了手机的最低设备配置，我们想要让游戏得到更多设备的测试数据，在不影响Wild Rift的核心玩法之余，让更多手机玩家能够玩到游戏。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">本次</span>Alpha测试的最低配置是：8核CPU，1.5GHz及以上，64位系统，3G及以上内存，1280x720及以上分辨率。游戏正式发行时的安卓手机最低配置是：4核CPU，1.5GHz及以上，23位或64位系统，1.5G及以上内存，1280x720及以上分辨率。苹果手机则是iPhone6及更高版本。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：如果我拿到测试资格的话，可以录制视频或者直播吗？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：当然可以，这次测试没有保密协议，你们可以分享游戏内容。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：测试数据会延续到公测吗？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：不会，但你的游戏技巧可以在公测之前先练出来。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">Q：如果遇到BUG问题怎么办？</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">A：由于Wild Rift还在Alpha测试阶段，肯定会有一些BUG，但我们建立了反馈网站，来解决有可能出现的所有问题。我们会密切留意玩家的反馈，你也可以通过谷歌商店向我们提交内容。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">这次测试只是</span>Wild Rift旅程的第一步，但也是重要的一步，不管玩家是否参与测试，开发团队都希望得到反馈。拳头游戏希望Wild Rift能够成为一个有趣的长期游戏，那就需要玩家共同建设这个游戏。当Wild Rift接近发布阶段时，开发团队需要玩家的帮助来确认他们是否走在正确的路上，因此，最快在本周末，我们就能够看到Wild Rift的实际操作视频，英雄联盟手游变成现实不再遥远。</span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px"><br/></span><span style=";font-family:微软雅黑;font-size:16px">https://bbs.nga.cn/read.php?&amp;tid=22088200</span>
	</p>
	<p>
	    <br/>
	</p>`
		},
		{
				'id': 4,
				'date': '2020-06-06 04:48:15',
				'auth': '英雄联盟手游资讯',
				'path': 'art',
				'cover': 'https://cdn.tinytiger.cn/20200615/pic1.png',
				'title': '英雄联盟手游官方FAQ问答，6月6日将开启Alpha阶段',
				'cnt': `<p>
    <strong><span style="font-family: 微软雅黑;font-size: 22px">LOL手游直播间...点这里！</span></strong>
</p>
<p>
    <span style=";font-family:宋体;font-size:20px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">众所周知</span>6月6日在菲律宾及巴西，开始了英雄联盟手游的全球首测！胖虎听说这次的测试资格仅有3000个，胖虎身边的不少朋友就对那些拥有了测试资格的人一阵羡慕嫉妒恨。不过...大家可以冷静一下，胖虎今天，给大家带来了</span><span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">了大</span></span><span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">福利！</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic2.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p style="text-align:center">
    <strong><span style="font-family: 微软雅黑;font-size: 14px"><span style="font-family:微软雅黑">即使玩不到，也能看的到！</span></span></strong>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">目前在</span>YouTube和twitch上，到处都是有关于英雄联盟手游的直播，胖虎贴心的给大家找到了两个神仙直播平台：</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">①https://www.twitch.tv/frogzica</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">②https://www.youtube.com/watch?v=UuGb6CEjL48</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">在这两个直播平台里可以超方便的观看</span>lol手游的相关直播！跟着有测试资格的大佬们提前熟悉手游峡谷的地图，同时学习游戏中的操作手法和连招。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">今天就让我们从水友的角度看看</span>lol手游具体游玩体验如何。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic3.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">首先是界面和游戏画质，不得不说大公司的游戏优化还是很不错的，配置要求已经非常低了。对于端游中的建模和地图还原度都是很高的，游戏中帧率也能保持在流畅的</span>60帧左右。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">不管是开始界面，还是选人、加载界面都给</span>LOL玩家一种“青春回来了”的感觉。</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic4.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic5.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">其次是操作和玩法，因为是手游，双摇杆的操作模式相对端游来说操作难度大大降低，但绝大部分还是完美还原了端游的内容。比如可以带两个召唤师技能，也有免费的监视图腾，装备也只有死亡或回城才能购买（再也没有秒换装备的操作了）。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic6.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic7.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">当然，端游和手游说到底还是有区别的，在一些细节上需要做出改变。比如补兵机制，端游中不补兵就没有收益，而到了手游中，兵线的血条在可以补刀的时候会有一段白条提示。</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic8.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">没有补到的兵线金钱收益会降低，经验也会减半。经过测试全补和不补经济可能会相差两三倍，各位玩家要好好练习补兵的基本功啦！</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">另外，大部分装备和端游保持一致，也有一小部分进行了改动，并加入了一些新的装备。天赋系统也有完美移植过来，甚至加入了推荐天赋和出装，帮助玩家更快上手！</span></span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <img src="https://cdn.tinytiger.cn/20200615/pic9.png"/><span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px">&nbsp;</span>
</p>
<p>
    <span style=";font-family:微软雅黑;font-size:16px"><span style="font-family:微软雅黑">迫不及待想看直播了？戳上面链接，享受</span>lol手游的快感吧！感兴趣的朋友请持续关注胖虎，胖虎会不定时给大家带来最新的lol手游视频、攻略以及研发团队的消息！</span>
</p>
<p>
    <br/>
</p>`
			}
]

export {
	artDatas
}