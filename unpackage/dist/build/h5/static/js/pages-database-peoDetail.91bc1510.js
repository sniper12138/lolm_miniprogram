(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-database-peoDetail"],{"223d":function(i,t,a){"use strict";var e,s=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"mid"},[a("v-uni-view",{staticClass:"topMask"},[a("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,"indicator-color":"#fff","indicator-active-color":"#ffcc03",interval:3e3,duration:1e3,circular:!0}},i._l(i.datas.skins,(function(t,e){return a("v-uni-swiper-item",{key:e},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{attrs:{src:t.big,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"mask"},[a("v-uni-view",{staticClass:"name"},[i._v(i._s("default"==t.name?i.datas.name:t.name))])],1)],1)],1)})),1)],1),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"der"},[a("v-uni-view",{staticClass:"name"},[i._v(i._s(i.datas.name))]),a("v-uni-view",{staticClass:"label"},i._l(i.rolesList,(function(t,e){return a("v-uni-view",{key:e,staticClass:"tags"},[i._v(i._s(i.roleStr(t)))])})),1),a("v-uni-text",[i._v(i._s(i.datas.shortBio))])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"title"},[i._v("技能介绍")]),a("v-uni-view",{staticClass:"list"},i._l(i.datas.spell,(function(t,e){return a("v-uni-view",{key:e,class:i.act==e?"li act":"li",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.changeAct(e)}}},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:t.abilityIconPath,mode:"aspectFill"}})],1)],1)})),1),a("v-uni-view",{staticClass:"name"},[i._v(i._s(i.datas.spell[i.act].name))]),a("jyfParser",{staticClass:"peoder",domProps:{innerHTML:i._s(i.datas.spell[i.act].description)}}),a("v-uni-view",{class:"intorLi "+(null==i.datas.spell[i.act].consume?"disNone":"")},[a("v-uni-view",{staticClass:"left"},[i._v("消耗法力：")]),a("v-uni-view",{staticClass:"right"},[i._v(i._s(i.datas.spell[i.act].consume))])],1),a("v-uni-view",{class:"intorLi "+(null==i.datas.spell[i.act].cooling?"disNone":"")},[a("v-uni-view",{staticClass:"left"},[i._v("冷却时间：")]),a("v-uni-view",{staticClass:"right"},[i._v(i._s(i.datas.spell[i.act].cooling))])],1),a("v-uni-view",{class:"intorLi "+(null==i.datas.spell[i.act].effect?"disNone":"")},[a("v-uni-view",{staticClass:"left"},[i._v("效果：")]),a("jyfParser",{staticClass:"right r2",domProps:{innerHTML:i._s(i.datas.spell[i.act].effect)}})],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"title"},[i._v("英雄数值")]),a("v-uni-view",{staticClass:"numerical"},[a("v-uni-view",{staticClass:"valList"},[a("v-uni-view",{staticClass:"valName"},[i._v("攻击属性")]),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"per"},[a("v-uni-view",{staticClass:"act",style:"width: "+i.statusNum(i.statusList[0])+"%"})],1)],1)],1),a("v-uni-view",{staticClass:"valList"},[a("v-uni-view",{staticClass:"valName"},[i._v("防御属性")]),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"per"},[a("v-uni-view",{staticClass:"act",style:"width: "+i.statusNum(i.statusList[1])+"%"})],1)],1)],1),a("v-uni-view",{staticClass:"valList"},[a("v-uni-view",{staticClass:"valName"},[i._v("辅助系数")]),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"per"},[a("v-uni-view",{staticClass:"act",style:"width: "+i.statusNum(i.statusList[2])+"%"})],1)],1)],1),a("v-uni-view",{staticClass:"valList"},[a("v-uni-view",{staticClass:"valName"},[i._v("上手难度")]),a("v-uni-view",{staticClass:"middle"},[a("v-uni-view",{staticClass:"per"},[a("v-uni-view",{staticClass:"act",style:"width: "+i.statusNum(i.statusList[3])+"%"})],1)],1)],1)],1)],1)],1),a("bomad",{attrs:{share:i.isShare}})],1)],1)},n=[];a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return e}))},3164:function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,'uni-page-body[data-v-eb3ffa54]{width:100%;height:100%}.main[data-v-eb3ffa54]{width:100%;height:100%;background:#ffe807}.main .mid[data-v-eb3ffa54]{width:100%;height:100%;background:#fff;border-radius:%?40?% %?40?% 0 0;overflow:auto}.main .mid .topMask[data-v-eb3ffa54]{width:100%;height:%?280?%;position:relative;background:#fff}.main .mid .topMask uni-swiper[data-v-eb3ffa54]{height:100%;padding:%?20?% %?30?% 0}.main .mid .topMask uni-swiper .swiper-item[data-v-eb3ffa54]{width:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.main .mid .topMask uni-swiper .swiper-item uni-image[data-v-eb3ffa54]{width:98%;height:98%;border-radius:%?20?%}.main .mid .topMask uni-swiper .swiper-item .mask[data-v-eb3ffa54]{position:absolute;width:98%;height:98%;top:1%;left:1%;background:rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?35?%;color:#fff;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;border-radius:%?20?%}.main .mid .middle[data-v-eb3ffa54]{padding:0 0 %?35?%;background:#fff}.main .mid .middle .der[data-v-eb3ffa54]{width:100%;padding:%?35?%;font-size:%?28?%;border-bottom:%?2?% solid #f2f2f2;color:#333}.main .mid .middle .der .name[data-v-eb3ffa54]{font-size:%?32?%;font-weight:700;padding-bottom:%?10?%}.main .mid .middle .der .label[data-v-eb3ffa54]{font-size:%?28?%;padding-bottom:%?10?%;color:#fff}.main .mid .middle .der .label .tags[data-v-eb3ffa54]{display:inline-block;background:rgba(0,0,0,.6);padding:%?5?% %?10?%;border-radius:%?10?%}.main .mid .middle .der .label .tags + .tags[data-v-eb3ffa54]{margin-left:%?5?%}.main .mid .middle > .list[data-v-eb3ffa54]{border-top:%?20?% solid #f2f2f2;padding:0 %?35?% %?35?%}.main .mid .middle > .list .title[data-v-eb3ffa54]{font-size:%?32?%;color:#333;background:#fff;padding:%?20?% 0;width:100%;z-index:999;position:relative}.main .mid .middle > .list .title[data-v-eb3ffa54]::before{content:"";position:absolute;width:%?74?%;height:%?12?%;background:-webkit-linear-gradient(right,#fff,#ffcc03);background:linear-gradient(270deg,#fff,#ffcc03);border-radius:%?6?%;z-index:-1;bottom:%?25?%;left:0}.main .mid .middle > .list .numerical[data-v-eb3ffa54]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?22?%;color:#080808;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.main .mid .middle > .list .numerical .valList[data-v-eb3ffa54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.main .mid .middle > .list .numerical .valList + .valList[data-v-eb3ffa54]{padding-top:%?20?%}.main .mid .middle > .list .numerical .valList .valName[data-v-eb3ffa54]{width:20%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.main .mid .middle > .list .numerical .valList .middle[data-v-eb3ffa54]{width:80%;padding:0 %?10?%}.main .mid .middle > .list .numerical .valList .middle .per[data-v-eb3ffa54]{width:100%;height:%?50?%;background:silver;position:relative}.main .mid .middle > .list .numerical .valList .middle .per .act[data-v-eb3ffa54]{position:absolute;top:0;left:0;width:50%;height:100%;background:#c43529}.main .mid .middle > .list .numerical .valList .valNum[data-v-eb3ffa54]{width:20%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.main .mid .middle > .list .list .li[data-v-eb3ffa54]{width:20%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;vertical-align:top;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 0 %?20?% 0}.main .mid .middle > .list .list .li.act .img[data-v-eb3ffa54]{border:%?10?% solid #ffcc03}.main .mid .middle > .list .list .li .img[data-v-eb3ffa54]{width:%?120?%;height:%?120?%;border-radius:50%;overflow:hidden;border:%?10?% solid #e6e6e6;-webkit-transition:all .2s;transition:all .2s}.main .mid .middle > .list .list .li .img uni-image[data-v-eb3ffa54]{width:100%;height:100%;display:block}.main .mid .middle > .list .name[data-v-eb3ffa54]{font-size:%?32?%;color:#ffcc03;padding-top:%?10?%;text-align:center}.main .mid .middle > .list .peoder[data-v-eb3ffa54]{padding-top:%?20?%;font-size:%?28?%;color:#323232}.main .mid .middle > .list .intorLi[data-v-eb3ffa54]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%}.main .mid .middle > .list .intorLi.disNone[data-v-eb3ffa54]{display:none}.main .mid .middle > .list .intorLi .left[data-v-eb3ffa54]{width:25%;font-size:%?28?%;color:#7f7f7f}.main .mid .middle > .list .intorLi .right[data-v-eb3ffa54]{width:75%;font-size:%?28?%;color:#333}.main .mid .middle > .list .intorLi .right.r2 .font7[data-v-eb3ffa54]{display:inline}.main .mid .middle > .list .intorLi .right.r2 .font8[data-v-eb3ffa54]{color:red;display:inline}.main .mid .middle > .list .intorLi[data-v-eb3ffa54] .font7{display:inline}.main .mid .middle > .list .intorLi[data-v-eb3ffa54] .font8{color:red;display:inline}.main .mid .middle > .list .lineup[data-v-eb3ffa54]{border-radius:%?25?%;box-shadow:0 0 %?10?% rgba(0,0,0,.6);padding:%?20?%;background:-webkit-linear-gradient(45deg,#e1582e,#c6382e);background:linear-gradient(45deg,#e1582e,#c6382e)}.main .mid .middle > .list .lineup .lineupName[data-v-eb3ffa54]{font-size:%?28?%;color:#fff;text-align:center;width:100%}.main .mid .middle > .list .lineup .lineupList[data-v-eb3ffa54]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.main .mid .middle > .list .lineup .lineupList .left[data-v-eb3ffa54]{width:50%;height:100%}.main .mid .middle > .list .lineup .lineupList .left uni-image[data-v-eb3ffa54]{width:100%;height:%?400?%;border-radius:%?25?%;box-shadow:0 0 %?10?% rgba(0,0,0,.6)}.main .mid .middle > .list .lineup .lineupList .right[data-v-eb3ffa54]{width:50%;height:100%;padding:0 0 0 %?10?%}.main .mid .middle > .list .lineup .lineupList .right .peoName[data-v-eb3ffa54]{color:#fff;width:100%;text-align:center;font-size:%?24?%;padding-bottom:%?10?%}.main .mid .middle > .list .lineup .lineupList .right .skillList .skillImg[data-v-eb3ffa54]{width:50%;vertical-align:top;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?20?%}.main .mid .middle > .list .lineup .lineupList .right .skillList .skillImg uni-image[data-v-eb3ffa54]{width:%?100?%;height:%?100?%;border-radius:%?999?%;border:%?2?% solid #fa0;box-shadow:0 0 %?10?% rgba(0,0,0,.6)}.main .mid .middle > .list .lineup .comment[data-v-eb3ffa54]{color:#fff;font-size:%?24?%;padding-top:%?20?%}.main .mid .middle > .list .lineup .comment uni-text[data-v-eb3ffa54]{font-size:%?28?%;font-weight:700}.main .mid .middle > .list .evaluateCnt[data-v-eb3ffa54]{display:-webkit-box;display:-webkit-flex;display:flex}.main .mid .middle > .list .evaluateCnt + .evaluateCnt[data-v-eb3ffa54]{padding-top:%?30?%}.main .mid .middle > .list .evaluateCnt .tit[data-v-eb3ffa54]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%}.main .mid .middle > .list .evaluateCnt .tit.t1[data-v-eb3ffa54]{color:#ffcc03}.main .mid .middle > .list .evaluateCnt .tit.t2[data-v-eb3ffa54]{color:#ff556e}.main .mid .middle > .list .evaluateCnt .cnt[data-v-eb3ffa54]{-webkit-box-flex:4;-webkit-flex:4;flex:4;font-size:%?28?%}',""]),i.exports=t},"3cb6":function(i,t,a){"use strict";a.r(t);var e=a("223d"),s=a("d65d");for(var n in s)"default"!==n&&function(i){a.d(t,i,(function(){return s[i]}))}(n);a("550a");var l,d=a("f0c5"),o=Object(d["a"])(s["default"],e["b"],e["c"],!1,null,"eb3ffa54",null,!1,e["a"],l);t["default"]=o.exports},"550a":function(i,t,a){"use strict";var e=a("b19a"),s=a.n(e);s.a},b19a:function(i,t,a){var e=a("3164");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var s=a("4f06").default;s("1b758600",e,!0,{sourceMap:!1,shadowMode:!1})},b74f:function(i,t,a){"use strict";(function(i){var e=a("ee27");a("c740"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=e(a("cde2")),n=e(a("e175")),l={data:function(){return{heroDatas:[],datas:{},rolesList:[],statusList:[],roles:{mage:"法师",support:"辅助",fighter:"战士",tank:"坦克",marksman:"射手",assassin:"刺客"},act:0,shareId:0,isShare:!1}},components:{bomad:s.default,jyfParser:n.default},onShareAppMessage:function(){_czc.push(["_trackEvent","Click","点击事件","分享页面：百科英雄详情页"+this.datas.name]);var i="【lol手游】英雄介绍："+this.datas.name,t="/pages/database/peoDetail?id="+this.shareId+"&share=1";return{title:i,path:t}},onLoad:function(i){var t=this,a=i.id;this.shareId=a;var e=i.share;this.isShare="1"==e,uni.request({url:this.baseUrl+"hreo.json",method:"GET",data:{},success:function(i){t.heroDatas=i.data;var e=i.data.findIndex((function(i,t){return i.heroId==a})),s=t.heroDatas[e];_czc.push(["_trackEvent","Click","点击事件","查看英雄详情："+s.name]),t.datas=s,t.rolesList=s.roles,t.statusList[0]=s.info.status1,t.statusList[1]=s.info.status2,t.statusList[2]=s.info.status3,t.statusList[3]=s.info.status4,uni.setNavigationBarTitle({title:t.datas.name})},fail:function(){},complete:function(){}})},methods:{roleStr:function(i){if(null!=this.roles)return this.roles[i]},statusNum:function(i){return i/10*100},changeAct:function(i){this.act=i},goQuan:function(){var t=encodeURIComponent("https://mp.weixin.qq.com/s/gGQt_LQbbQg8x5Hgs1Itug");uni.navigateTo({url:"../../pages/tool/webView?src="+t,success:function(i){},fail:function(t){i.log(t)},complete:function(){}})}}};t.default=l}).call(this,a("5a52")["default"])},d65d:function(i,t,a){"use strict";a.r(t);var e=a("b74f"),s=a.n(e);for(var n in e)"default"!==n&&function(i){a.d(t,i,(function(){return e[i]}))}(n);t["default"]=s.a}}]);