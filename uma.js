// #ifdef MP-WEIXIN
import uma from 'umtrack-wx';
uma.init({
  appKey: '5ef16630dbc2ec08212b1fc3',
  useOpenid: true,
  autoGetOpenid: true,
  debug: true
});
// #endif
// #ifdef MP-ALIPAY
import uma from 'umtrack-alipay';
uma.init({
  appKey: '5ef16630dbc2ec08212b1fc3',
  debug: true
});
// #endif

// #ifdef H5
const uma = {
	init:()=>{},
	_inited:false,
	trackEvent:()=>{},
	setOpenid:()=>{},
	setUserid:()=>{},
	setUnionid:()=>{},
	pause:()=>{},
	resume:()=>{}
}
// #endif
export default uma;
