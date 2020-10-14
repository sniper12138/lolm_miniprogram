<template>
	<view class="main">
		<view class="topMask">
			<view class="title">小虎Hoo联盟手游播报站</view>
		</view>
		<view class="mid">
			<view class="list">
				<view class="title">
					<text>近期浏览记录</text>
				</view>
				<view class="recent">
					<view class="li" v-for="(item,index) in recent" :key="index" @tap="goHistory(item.src)">{{item.title}}</view>
					<view class="li" v-if="recent.length == 0">暂无更多记录</view>
				</view>
			</view>
			<!-- <view class="list">
				<view class="title">我的礼包</view>
				<view class="btnList">
					<view class="li">
						<view class="btn">公测礼包</view>
					</view>
					<view class="li">
						<view class="btn">公测礼包</view>
					</view>
					<view class="li">
						<view class="btn">公测礼包</view>
					</view>
				</view>
			</view> -->
			<view class="list flex">
				<view class="title">
					<text>约战交友</text>
				</view>
				<view class="cntsMain">
					<view class="cnt">小虎Hoo官方客服号：laosiji5353</view>
					<view class="cnt">了解更多lol手游爆料，关注我们公众号！：小虎Hoo玩好游戏</view>
					<view class="cnt">英雄联盟手游测试资格预约QQ群：809953952（免费领取台服预约账号、Alpha测试安装包）</view>
					<!-- #ifndef H5 -->
					<view class="cnt btn" @tap="goView">
						<view class="btnText">
							<text>小虎Hoo英雄联盟手游圈子，</text><text>加入我们，尽情战斗！</text>
						</view>
					</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<a class="cnt btn" href="https://h5.tinytiger.cn/web_app/transmitCircle/index.html?circle_id=92&appversion=3.1.0">
						<view class="btnText">
							<text>小虎Hoo英雄联盟手游圈子，</text><text>加入我们，尽情战斗！</text>
						</view>
					</a>
					<!-- #endif -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			recent: []
		}
	},
	onLoad() {
		
	},
	mounted() {
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'value': '分享页面：我的'});
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：我的']);
		// #endif
	},
	onShow() {
		// #ifndef H5
		wx.aldstat.sendEvent('Gopage', { 'page': '我的' });
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Gopage", "进入页面", '我的']);
		// #endif
		uni.getStorage({
			key: 'recent',
			success:res => {
				let datas = JSON.parse(res.data)
				this.recent = datas
			},
			fail: err => {
				
			}
		})
	},
	methods: {
		goView(){
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '小虎Hoo英雄联盟手游圈子，加入我们，尽情战斗！' });
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '小虎Hoo英雄联盟手游圈子，加入我们，尽情战斗！']);
			// #endif
			let src = encodeURIComponent('https://mp.weixin.qq.com/s/Kq2ItTWiB0-zGfg5o8q8PQ')
			uni.navigateTo({
				url: '../tool/webView?src='+ src,
				success: res => {},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			});
		},
		goHistory(src){
			uni.navigateTo({
				url: '../../'+src,
				success: res => {},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="less">
	page{
		width: 100%;
		height: 100%;
		.main{
			padding: 0 15rpx;
			width: 100%;
			height: 100%;
			overflow: hidden auto;
			display: flex;
			flex-direction: column;
			position: relative;
			background: #ffe006 url(http://cdn.tinytiger.cn/20200618/lolm-my-bg.png) no-repeat center bottom / 100% auto;
			&::before{
				content: '';
				position: absolute;
				background: rgba(255,255,255,.2);
				width: 600rpx;
				height: 600rpx;
				border-radius: 50%;
				right: -320rpx;
				top: -200rpx;
			}
			.topMask{
				width: 100%;
				height: 180rpx;
				position: fixed;
				top: 0;
				left: 0;
				background: #ffe006;
				z-index: 99;
				overflow: hidden;
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				padding: 110rpx 0 0 20rpx;
				/* #ifdef H5 */
				height: 50px !important;
				padding: 20rpx 0 0 0 !important;
				align-items: center !important;
				justify-content: center !important;
				/* #endif */
				.title{
					color: #000;
					font-size: 36rpx;
				}
				&::before{
					content: '';
					position: absolute;
					background: rgba(255,255,255,.2);
					width: 600rpx;
					height: 600rpx;
					border-radius: 50%;
					right: -320rpx;
					top: -200rpx;
				}
			}
			.mid{
				padding: 220rpx 15rpx 0;
				/* #ifdef H5 */
				padding-top: 120rpx;
				/* #endif */
				.list{
					&.flex{
						flex: 1;
						display: flex;
						flex-direction: column;
						padding-bottom: 40rpx;
					}
					.title{
						font-size: 30rpx;
						color: #000;
						padding: 20rpx 0 40rpx;
						width: 100%;
						z-index: 9;
						text{
							padding: 5rpx 25rpx;
							border: 1rpx solid #caa100;
							border-radius: 999rpx;
						}
					}
					.recent{
						// max-height: 400rpx;
						// overflow: auto;
						// border-bottom: 1rpx solid #C0C0C0;
						padding-bottom: 20rpx;
						.li{
							font-size: 28rpx;
							padding: 15rpx 20rpx;
							color: #ff556e;
							background: #fff;
							border-radius: 15rpx;
							+ .li{
								margin-top: 20rpx;
							}
						}
					}
					.btnList{
						display: flex;
						flex-wrap: wrap;
						.li{
							display: flex;
							width: 33.33%;
							align-items: center;
							justify-content: center;
							.btn{
								width: 80%;
								border-radius: 25rpx;
								background: #d73f31;
								padding: 30rpx 0;
								font-size: 28rpx;
								color: #fff;
								box-shadow: 0 0 10rpx rgba(0,0,0,.5);
								display: flex;
								align-items: center;
								justify-content: center;
							}
						}
					}
					.cntsMain{
						background: #fff;
						padding: 15rpx 20rpx;
						border-radius: 15rpx;
						.cnt{
							font-size: 28rpx;
							padding: 15rpx 0;
							+ .cnt{
								// padding-top: 20rpx;
								border-top: 1rpx solid #ebedf0;
							}
							&.btn{
								display: flex;
								position: relative;
								text-decoration: none;
								.btnText{
									text{
										display: block;
									}
								}
								&::after{
									content: '';
									width: 100rpx;
									height: 100%;
								}
								&::before{
									content: '';
									position: absolute;
									width: 20rpx;
									height: 20rpx;
									border: 5rpx solid #969799;
									border-width: 5rpx 5rpx 0 0;
									transform: rotate(45deg) translateY(-50%);
									right: 50rpx;
									top: 50%;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
