<template>
	<view class="main">
		<view class="mid">
			<!-- <view class="btn">
				<image src="http://cdn.tinytiger.cn/20200622/lolm-gift-btn1.png" mode="widthFix"></image>
				<view class="cntMask">
					<text>国服公测</text>
					<text>预约入口</text>
				</view>
			</view>
			<view class="btn">
				<image src="http://cdn.tinytiger.cn/20200622/lolm-gift-btn2.png" mode="widthFix"></image>
				<view class="cntMask">
					<text>国服公测</text>
					<text>礼包领取入口</text>
					<text class="mtext">（请先预约公测才可以领取礼包哦！）</text>
				</view>
			</view>
			<view class="btn">
				<image src="http://cdn.tinytiger.cn/20200622/lolm-gift-btn3.png" mode="widthFix"></image>
				<view class="cntMask">
					<text>外服谷歌商店公测预约</text>
					<text>一键发号，无需注册！</text>
				</view>
			</view> -->
			<view class="mask">敬请期待</view>
			<!-- <view class="submitMask">
				<view class="subMain">
					<view class="cir">
						<view class="successIcon"></view>
					</view>
					<view class="topText">
						<text>感谢预约</text>
						<text>我们一起期待公测吧！</text>
					</view>
					<view class="subMid">
						<view class="li">
							<view class="left">谷歌账号</view>
							<view class="right">134875548732@gmail.com</view>
						</view>
						<view class="li">
							<view class="left">密码</view>
							<view class="right">134875548732@gmail.com</view>
						</view>
					</view>
				</view>
				<view class="copyText">长按可复制哦，如果忘记请移步“我的”查看~</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShareAppMessage() {
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '分享页面：预约&礼包' });
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：预约&礼包']);
			// #endif
		},
		methods:{
			goGift(){
				uni.showToast({
					title: "敬请期待",
					icon: 'none',
					mask: true
				},2000)
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		height: 100%;
		.main{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background: #FFE807;
			.mid{
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				border-radius: 40rpx 40rpx 0 0;
				background: #fff;
				.mask{
					background: rgba(0,0,0,.8);
					border-radius: 15rpx;
					padding: 20rpx 35rpx;
					font-size: 24rpx;
					color: #fff;
				}
				.submitMask{
					width: 100%;
					height: 100%;
					position: fixed;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					z-index: 9;
					background: rgba(0,0,0,.2);
					.subMain{
						width: 600rpx;
						background: #fff;
						padding: 40rpx 30rpx;
						border-radius: 40rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						.cir{
							width: 150rpx;
							height: 150rpx;
							border-radius: 50%;
							background: #FFCC03;
							margin-top: -110rpx;
							margin-bottom: 50rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							position: relative;
							.successIcon{
								width: 45rpx;
								height: 70rpx;
								border: 10rpx solid #fff;
								border-width: 10rpx 0 0 10rpx;
								transform: rotate(-135deg);
								margin-top: -20rpx;
							}
							&::after{
								content: '';
								display: block;
								position: absolute;
								width: 200rpx;
								height: 200rpx;
								background: rgba(255,204,3,.2);
								top: 50%;
								left: 50%;
								margin: -100rpx 0 0 -100rpx;
								border-radius: 50%;
								animation: zoom 1.5s cubic-bezier(1, 1, 0,0) infinite;
							}
						}
						.topText{
							text{
								color: #FFCC03;
								font-size: 36rpx;
								display: block;
								text-align: center;
							}
						}
						.subMid{
							width: 100%;
							padding: 20rpx 0 0;
							.li{
								display: flex;
								padding: 20rpx 0;
								border-bottom: 2rpx solid #F2F2F2;
								.left{
									width: 30%;
									font-size: 28rpx;
									color: #808080;
									display: flex;
									align-items: center;
								}
								.right{
									width: 70%;
									font-size: 28rpx;
									color: #333;
									display: flex;
									align-items: center;
								}
							}
						}
					}
					.copyText{
						color: #fff;
						font-size: 28rpx;
						padding-top: 20rpx;
					}
				}
				.btn{
					width: 542rpx;
					color: #fff;
					// border-radius: 25rpx;
					font-size: 36rpx;
					position: relative;
					image{
						width: 100%;
					}
					.cntMask{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						display: flex;
						align-items: flex-start;
						justify-content: center;
						flex-direction: column;
						padding: 30rpx 50rpx 50rpx 50rpx;
						text{
							&.mtext{
								font-size: 24rpx;
							}
						}
					}
					+ .btn{
						margin-top: 40rpx;
					}
				}
			}
		}
	}
	@keyframes zoom {
		0% {
			opacity: 0.2;
			width: 150rpx;
			height: 150rpx;
			margin: -75rpx 0 0 -75rpx;
		}
		
		50% {
			opacity: 1;
			width: 200rpx;
			height: 200rpx;
			margin: -100rpx 0 0 -100rpx;
		}
		
		100% {
			opacity: 0.2;
			width: 150rpx;
			height: 150rpx;
			margin: -75rpx 0 0 -75rpx;
		}
	}
</style>
