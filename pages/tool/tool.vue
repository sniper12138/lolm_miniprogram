<template>
	<view class="main">
		<view class="title">工具箱</view>
		<view class="toolList">
			<view class="li" data-src="https://www.16163.com/zt/yys/xsfy/" @tap="goView">
				<!-- <image src="../../static/images/tab-icon1.jpg" mode=""></image> -->
				<view class="name">阴阳师悬赏封印查询</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		onShareAppMessage() {
			
		},
		methods:{
			goView(e){
				let src = e.currentTarget.dataset.src
				uni.navigateTo({
					url: './webView?src='+ src,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="less">
	.main{
		padding: 35rpx;
		.title{
			font-size: 30rpx;
			font-weight: bold;
			color: #000;
			&::before {
				content: '';
				display: inline-block;
				width: 10rpx;
				background: #d73f31;
				height: 20rpx;
				margin-right: 10rpx;
				vertical-align: baseline;
			}
		}
		.toolList{
			padding: 40rpx 0;
			.li{
				width: 33.33%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				vertical-align: top;
				padding: 0 20rpx 20rpx;
				image{
					width: 100rpx;
					height: 100rpx;
					border-radius: 999rpx;
					box-shadow: 0 0 10rpx rgba(0,0,0,.6);
				}
				.name{
					font-size: 22rpx;
					color: #080808;
					padding-top: 10rpx;
				}
			}
		}
	}
</style>
