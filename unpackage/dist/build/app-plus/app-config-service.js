
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/faq","pages/index/giftBag","pages/index/faqDetail","pages/index/topDetail","pages/index/detail","pages/database/database","pages/database/peoDetail","pages/database/arms","pages/database/parts","pages/tool/tool","pages/tool/webView","pages/my/my"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#8a8a8a","selectedColor":"#ff9f00","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"资讯","iconPath":"static/images/fot-icon1.png","selectedIconPath":"static/images/fot-icon1-hover.png"},{"pagePath":"pages/database/database","text":"百科","iconPath":"static/images/fot-icon2.png","selectedIconPath":"static/images/fot-icon2-hover.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/images/fot-icon4.png","selectedIconPath":"static/images/fot-icon4-hover.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"小虎Hoo联盟手游播报站","compilerVersion":"2.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小虎Hoo联盟手游播报站"}},{"path":"/pages/index/faq","meta":{},"window":{"navigationBarTitleText":"问答"}},{"path":"/pages/index/giftBag","meta":{},"window":{"navigationBarTitleText":"公测预约&礼包领取"}},{"path":"/pages/index/faqDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/index/topDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/index/detail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/database/database","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"百科"}},{"path":"/pages/database/peoDetail","meta":{},"window":{"navigationBarTitleText":"英雄"}},{"path":"/pages/database/arms","meta":{},"window":{"navigationBarTitleText":"军火库"}},{"path":"/pages/database/parts","meta":{},"window":{"navigationBarTitleText":"配件"}},{"path":"/pages/tool/tool","meta":{},"window":{"navigationBarTitleText":"工具"}},{"path":"/pages/tool/webView","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
