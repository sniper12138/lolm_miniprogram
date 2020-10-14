<template name="bomad">
	<view :class="'tabbar ' + (share?'flexCom':'')">
		<view v-if="share" class="btn share" @tap="goIndex">英雄爆料</view>
		<!-- #ifndef H5 -->
		<button :class="'btn ' + (share?'':'share')" open-type="share">分享</button>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<a class="btn" @top="goLink" href="https://h5.tinytiger.cn/web_app/transmitCircle/index.html?circle_id=92&appversion=3.1.0">预约测试</a>
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<view class="btn" @tap="goQuan">内测资格</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name: 'bomad',
		props: {
			share: Boolean
		},
		methods:{
			goQuan(){
				// #ifndef H5
				wx.aldstat.sendEvent('Click', {'value':'内测资格'});
				// #endif
				// #ifdef H5
				_czc.push(["_trackEvent", "Click", "点击事件", '内测资格']);
				// #endif
				let src = encodeURIComponent('https://mp.weixin.qq.com/s/Kq2ItTWiB0-zGfg5o8q8PQ')
				uni.navigateTo({
					url: '../../pages/tool/webView?src='+ src,
					success: res => {},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {}
				});
			},
			goIndex(){
				// #ifndef H5
				wx.aldstat.sendEvent('Click', {'value':'英雄爆料'});
				// #endif
				// #ifdef H5
				_czc.push(["_trackEvent", "Click", "点击事件", '英雄爆料']);
				// #endif
				uni.reLaunch({
				    url: '../../pages/index/index'
				});
			},
			goLink(){
				_czc.push(["_trackEvent", "Click", "点击事件", '预约测试']);
			}
		}
	}
</script>

<style lang="less">
	.tabbar{
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 10rpx 0 100rpx;
		&.flexCom{
			flex-direction: row;
			.btn{
				margin: 0 1%;
				width: 31%;
				+ .btn{
					margin-top: 0;
				}
			}
		}
		.btn{
			width: 580rpx;
			padding: 20rpx 0;
			border-radius: 999rpx;
			font-size: 36rpx;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 2rpx solid rgba(255,204,3,1);
			line-height: initial;
			text-decoration: none;
			&::after{
				border: none;
			}
			+ .btn{
				margin-top: 20rpx;
			}
			&.share{
				background:linear-gradient(180deg,rgba(255,232,7,1) 0%,rgba(255,204,3,1) 100%);
				box-shadow: 0 4rpx 8rpx 0 rgba(0,0,0,0.1);
				border: none;
			}
		}
	}
</style>
