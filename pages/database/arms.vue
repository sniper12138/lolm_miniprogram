<template>
	<view class="main">
		<view class="topMask"></view>
		<view class="armsList">
			<view class="li act" v-for="(item,index) in 4" :key="index">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
			</view>
		</view>
		<view class="swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in 4" :key="index">
					<view class="swiper-item">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
						<view class="mask">
							<view class="name">莫桑比克霰弹枪</view>
							<view class="type">全自动</view>
							<view class="bulletType">霰弹枪子弹</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="middle">
			<view class="list">
				<view class="title">可装备配件</view>
				<view class="partsList">
					<view class="li" v-for="(item,index) in 4" :key="index">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
						<view class="name">名字</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="title">武器数值</view>
				<view class="numerical">
					<view class="valList">
						<view class="valName">基础伤害</view>
						<view class="middle">
							<view class="per">
								<view class="act"></view>
							</view>
						</view>
						<view class="valNum">1.4546546</view>
					</view>
					<view class="valList">
						<view class="valName">爆头伤害</view>
						<view class="middle">
							<view class="per">
								<view class="act"></view>
							</view>
						</view>
						<view class="valNum">1.4546546</view>
					</view>
					<view class="valList">
						<view class="valName">爆头系数</view>
						<view class="middle">
							<view class="per">
								<view class="act"></view>
							</view>
						</view>
						<view class="valNum">1.4546546</view>
					</view>
					<view class="valList">
						<view class="valName">子弹容量</view>
						<view class="middle">
							<view class="per">
								<view class="act"></view>
							</view>
						</view>
						<view class="valNum">1.4546546</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="title">优缺点评价</view>
				<view class="advantage">优点：无</view>
				<view class="shortcoming">缺点：无</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	page{
		overflow: hidden;
		.main{
			position: relative;
			overflow: hidden;
			width: 100%;
			padding: 35rpx;
			.topMask{
				position: absolute;
				width: 120%;
				left: -10%;
				height: 400rpx;
				border-radius: 0 0 50% 50%;
				background: linear-gradient(#c43529,#dd4730);
				top: 0;
				z-index: -1;
			}
			.armsList{
				padding-bottom: 20rpx;
				.li{
					width: 33.33%;
					display: inline-flex;
					vertical-align: top;
					align-items: center;
					justify-content: center;
					padding-bottom: 20rpx;
					image{
						width: 200rpx;
						height: 60rpx;
						border-radius: 10rpx;
					}
					&.act{
						image{
							box-shadow: 0 0 10rpx rgba(0,0,0,.6);
						}
					}
				}
			}
			.swiper{
				width: 100%;
				height: 300rpx;
				swiper{
					width: 100%;
					height: 300rpx;
					.swiper-item{
						width: 100%;
						height: 300rpx;
						position: relative;
						image{
							width: 100%;
							height: 100%;
							border-radius: 25rpx;
						}
						.mask{
							position: absolute;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
							color: #fff;
							display: flex;
							align-items: flex-end;
							justify-content: flex-end;
							flex-direction: column;
							padding: 45rpx 20rpx;
							font-size: 24rpx;
							.name{
								font-size: 28rpx;
							}
						}
					}
				}
			}
			.list{
				.title{
					font-size: 24rpx;
					color: #000;
					position: sticky;
					top: 0;
					background: #fff;
					padding: 20rpx 0;
					width: 100%;
					z-index: 9;
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
				.partsList{
					width: 100%;
					.li{
						width: 25%;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						color: #080808;
						font-size: 20rpx;
						image{
							width: 100rpx;
							height: 100rpx;
							border: 5rpx solid #C0C0C0;
						}
						.name{
							padding-top: 10rpx;
						}
					}
				}
				.numerical{
					display: flex;
					font-size: 22rpx;
					color: #080808;
					flex-direction: column;
					.valList{
						display: flex;
						align-items: center;
						width: 100%;
						+ .valList{
							padding-top: 20rpx;
						}
						.valName{
							width: 20%;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.middle{
							width: 60%;
							padding: 0 10rpx;
							.per{
								width: 100%;
								height: 50rpx;
								background: #C0C0C0;
								position: relative;
								.act{
									position: absolute;
									top: 0;
									left: 0;
									width: 50%;
									height: 100%;
									background: #c43529;
								}
							}
						}
						.valNum{
							width: 20%;
							display: flex;
							justify-content: flex-end;
						}
					}
				}
				.advantage,.shortcoming{
					font-size: 22rpx;
					color: #080808;
					padding-bottom: 20rpx;
				}
			}
		}
	}
</style>
