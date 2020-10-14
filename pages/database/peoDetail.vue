<template>
	<view class="main">
		<view class="mid">
			<view class="topMask">
				<swiper :indicator-dots="true" :autoplay="true" :indicator-color="'#fff'" :indicator-active-color="'#ffcc03'" :interval="3000" :duration="1000" :circular="true">
					<swiper-item v-for="(item, index) in datas.skins" :key="index">
						<view class="swiper-item">
							<image :src="item.big" mode="aspectFill"></image>
							<view class="mask">
								<view class="name">{{ item.name == 'default' ? datas.name : item.name }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<!-- <view class="mask"> -->

				<!-- 				<view class="hot">
						<view class="left">热度</view>
						<view class="right">
							<view class="per">
								<view class="li act" v-for="(item,index) in 5" :key="index"></view>
							</view>
						</view>
					</view>
					<view class="started">
						<view class="left">上手</view>
						<view class="right">
							<view class="per">
								<view class="li" v-for="(item,index) in 5" :key="index"></view>
							</view>
						</view>
					</view> -->
				<!-- </view> -->
			</view>
			<view class="middle">
				<view class="der">
					<view class="name">{{ datas.name }}</view>
					<view class="label">
						<view class="tags" v-for="(item, index) in rolesList" :key="index">{{ roleStr(item) }}</view>
					</view>
					<text>{{ datas.shortBio }}</text>
				</view>
				<view class="list">
					<view class="title">技能介绍</view>
					<view class="list">
						<view :class="act == index ? 'li act' : 'li'" @tap="changeAct(index)" v-for="(item, index) in datas.spell" :key="index">
							<view class="img"><image :src="item.abilityIconPath" mode="aspectFill"></image></view>
						</view>
					</view>
					<view class="name">{{ datas.spell[act].name }}</view>
					<jyfParser class="peoder" v-html="datas.spell[act].description"></jyfParser>
					<view :class="'intorLi ' + (datas.spell[act].consume == null ? 'disNone' : '')">
						<view class="left">消耗法力：</view>
						<view class="right">{{ datas.spell[act].consume }}</view>
					</view>
					<view :class="'intorLi ' + (datas.spell[act].cooling == null ? 'disNone' : '')">
						<view class="left">冷却时间：</view>
						<view class="right">{{ datas.spell[act].cooling }}</view>
					</view>
					<view :class="'intorLi ' + (datas.spell[act].effect == null ? 'disNone' : '')">
						<view class="left">效果：</view>
						<jyfParser class="right r2" v-html="datas.spell[act].effect"></jyfParser>
					</view>
				</view>
				<view class="list">
					<view class="title">英雄数值</view>
					<view class="numerical">
						<view class="valList">
							<view class="valName">攻击属性</view>
							<view class="middle">
								<view class="per"><view class="act" :style="'width: ' + statusNum(statusList[0]) + '%'"></view></view>
							</view>
							<!-- <view class="valNum">{{ statusList[0] }}</view> -->
						</view>
						<view class="valList">
							<view class="valName">防御属性</view>
							<view class="middle">
								<view class="per"><view class="act" :style="'width: ' + statusNum(statusList[1]) + '%'"></view></view>
							</view>
							<!-- <view class="valNum">{{ statusList[1] }}</view> -->
						</view>
						<view class="valList">
							<view class="valName">辅助系数</view>
							<view class="middle">
								<view class="per"><view class="act" :style="'width: ' + statusNum(statusList[2]) + '%'"></view></view>
							</view>
							<!-- <view class="valNum">{{ statusList[2] }}</view> -->
						</view>
						<view class="valList">
							<view class="valName">上手难度</view>
							<view class="middle">
								<view class="per"><view class="act" :style="'width: ' + statusNum(statusList[3]) + '%'"></view></view>
							</view>
							<!-- <view class="valNum">{{ statusList[3] }}</view> -->
						</view>
					</view>
				</view>
				<!-- <view class="list">
					<view class="title">优缺点评价</view>
					<view class="evaluateCnt">
						<view class="tit t1">优点：</view>
						<view class="cnt">优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点</view>
					</view>
					<view class="evaluateCnt">
						<view class="tit t2">缺点：</view>
						<view class="cnt">优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点优点</view>
					</view>
				</view> -->
				<!-- <view class="list">
					<view class="title">阵容推荐</view>
					<view class="lineup">
						<view class="lineupName">躲猫猫组合</view>
						<view class="lineupList">
							<view class="left">
								<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
							</view>
							<view class="right">
								<view class="peoName">名字</view>
								<view class="skillList">
									<view class="skillImg">
										<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
									</view>
									<view class="skillImg">
										<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
									</view>
									<view class="skillImg">
										<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1544919989,1135722313&fm=26&gp=0.jpg" mode="aspectFill"></image>
									</view>
								</view>
							</view>
						</view>
						<view class="comment"><text>阵容点评：</text>点评点评点评点评点评点评点评点评点评点评</view>
					</view>
				</view> -->
			</view>
			<bomad :share="isShare"></bomad>
		</view>
	</view>
</template>

<script>
import bomad from '../../components/bomAd.vue';
import jyfParser from '@/components/jyf-parser/jyf-parser';
// import { data,roles } from '@/static/json/heroDatas.js'
export default {
	data() {
		return {
			heroDatas: [],
			datas: {},
			rolesList: [],
			statusList: [],
			roles: {
				mage: '法师',
				support: '辅助',
				fighter: '战士',
				tank: '坦克',
				marksman: '射手',
				assassin: '刺客'
			},
			act: 0,
			shareId: 0,
			isShare: false
		};
	},
	components: {
		bomad,
		jyfParser
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'value': '分享页面：百科英雄详情页'+ this.datas.name});
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：百科英雄详情页'+ this.datas.name]);
		// #endif
		let title = '【lol手游】英雄介绍：' + this.datas.name;
		let path = '/pages/database/peoDetail?id=' + this.shareId + '&share=1';
		return {
			title: title,
			path: path
		};
	},
	onLoad(opts) {
		let id = opts.id;
		this.shareId = id;
		let isShare = opts.share;
		this.isShare = isShare == '1';
		uni.request({
			url: this.baseUrl + 'hreo.json',
			method: 'GET',
			data: {},
			success: res => {
				this.heroDatas = res.data;
				let _i = res.data.findIndex((v, i) => {
					return v.heroId == id;
				});
				let datas = this.heroDatas[_i];
				// #ifndef H5
				wx.aldstat.sendEvent('Click', { 'value': '查看英雄详情：' + datas.name });
				// #endif
				// #ifdef H5
				_czc.push(["_trackEvent", "Click", "点击事件", '查看英雄详情：' + datas.name]);
				// #endif
				this.datas = datas;
				this.rolesList = datas.roles;
				this.statusList[0] = datas.info.status1;
				this.statusList[1] = datas.info.status2;
				this.statusList[2] = datas.info.status3;
				this.statusList[3] = datas.info.status4;
				uni.setNavigationBarTitle({
					title: this.datas.name
				});
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		roleStr(tagName) {
			if (this.roles != null) {
				return this.roles[tagName];
			}
		},
		statusNum(num) {
			return (num / 10) * 100;
		},
		changeAct(i) {
			this.act = i;
		},
		goQuan() {
			let src = encodeURIComponent('https://mp.weixin.qq.com/s/gGQt_LQbbQg8x5Hgs1Itug');
			uni.navigateTo({
				url: '../../pages/tool/webView?src=' + src,
				success: res => {},
				fail: err => {
					console.log(err);
				},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="less">
page {
	width: 100%;
	height: 100%;
}
.main {
	width: 100%;
	height: 100%;
	background: #ffe807;
	.mid {
		width: 100%;
		height: 100%;
		background: #fff;
		border-radius: 40rpx 40rpx 0 0;
		overflow: auto;
		.topMask {
			width: 100%;
			height: 280rpx;
			position: relative;
			background: #fff;
			swiper {
				height: 100%;
				padding: 20rpx 30rpx 0;
				.swiper-item {
					width: 100%;
					height: 100%;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 98%;
						height: 98%;
						border-radius: 20rpx;
					}
					.mask {
						position: absolute;
						width: 98%;
						height: 98%;
						top: 1%;
						left: 1%;
						background: rgba(0, 0, 0, 0.2);
						display: flex;
						flex-direction: column;
						padding: 35rpx;
						color: #fff;
						align-items: flex-end;
						justify-content: flex-end;
						border-radius: 20rpx;
					}
				}
			}
			// .mask {
			// 	position: absolute;
			// 	width: 100%;
			// 	height: 100%;
			// 	top: 0;
			// 	left: 0;
			// 	background: rgba(0, 0, 0, 0.2);
			// 	display: flex;
			// 	flex-direction: column;
			// 	padding: 35rpx;
			// 	color: #fff;
			// 	align-items: flex-end;
			// 	justify-content: flex-end;
			// 	> view {
			// 		padding: 20rpx 0 0 0;
			// 	}
			// 	.hot,
			// 	.started {
			// 		font-size: 24rpx;
			// 		font-weight: bold;
			// 		display: flex;
			// 		.left {
			// 			padding-right: 10rpx;
			// 		}
			// 		.right {
			// 			display: flex;
			// 			align-items: center;
			// 			.per {
			// 				display: flex;
			// 				.li {
			// 					width: 40rpx;
			// 					height: 10rpx;
			// 					border: 1rpx solid #fff;
			// 					+ .li {
			// 						margin: 0 0 0 10rpx;
			// 					}
			// 					&.act {
			// 						background: #aaff00;
			// 						border: 1rpx solid #aaff00;
			// 					}
			// 				}
			// 			}
			// 		}
			// 	}
			// }
		}
		.middle {
			padding: 0 0 35rpx;
			background: #fff;
			.der {
				width: 100%;
				padding: 35rpx;
				font-size: 28rpx;
				border-bottom: 2rpx solid #f2f2f2;
				color: #333;
				.name {
					font-size: 32rpx;
					font-weight: bold;
					padding-bottom: 10rpx;
				}
				.label {
					font-size: 28rpx;
					padding-bottom: 10rpx;
					color: #fff;
					.tags {
						display: inline-block;
						background: rgba(0, 0, 0, 0.6);
						padding: 5rpx 10rpx;
						border-radius: 10rpx;
						+ .tags {
							margin-left: 5rpx;
						}
					}
				}
			}
			> .list {
				border-top: 20rpx solid #f2f2f2;
				padding: 0 35rpx 35rpx;
				.title {
					font-size: 32rpx;
					color: #333;
					background: #fff;
					padding: 20rpx 0;
					width: 100%;
					z-index: 999;
					position: relative;
					&::before {
						content: '';
						position: absolute;
						width: 74rpx;
						height: 12rpx;
						background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 204, 3, 1) 100%);
						border-radius: 6rpx;
						z-index: -1;
						bottom: 25rpx;
						left: 0;
					}
				}
				.numerical {
					display: flex;
					font-size: 22rpx;
					color: #080808;
					flex-direction: column;
					.valList {
						display: flex;
						align-items: center;
						width: 100%;
						+ .valList {
							padding-top: 20rpx;
						}
						.valName {
							width: 20%;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.middle {
							width: 80%;
							padding: 0 10rpx;
							.per {
								width: 100%;
								height: 50rpx;
								background: #c0c0c0;
								position: relative;
								.act {
									position: absolute;
									top: 0;
									left: 0;
									width: 50%;
									height: 100%;
									background: #c43529;
								}
							}
						}
						.valNum {
							width: 20%;
							display: flex;
							justify-content: flex-end;
						}
					}
				}
				.list {
					.li {
						width: 20%;
						display: inline-flex;
						vertical-align: top;
						flex-direction: column;
						align-items: center;
						padding: 0 0 20rpx 0;
						&.act {
							.img {
								border: 10rpx solid #ffcc03;
							}
						}
						.img {
							width: 120rpx;
							height: 120rpx;
							border-radius: 50%;
							overflow: hidden;
							border: 10rpx solid #e6e6e6;
							transition: all 0.2s;
							image {
								width: 100%;
								height: 100%;
								display: block;
							}
						}
					}
				}
				.name {
					font-size: 32rpx;
					color: #ffcc03;
					padding-top: 10rpx;
					text-align: center;
				}
				.peoder {
					padding-top: 20rpx;
					font-size: 28rpx;
					color: #323232;
				}
				.intorLi {
					display: flex;
					margin-top: 30rpx;
					&.disNone {
						display: none;
					}
					.left {
						width: 25%;
						font-size: 28rpx;
						color: #7f7f7f;
					}
					.right {
						width: 75%;
						font-size: 28rpx;
						color: #333;
						&.r2 {
							.font7{
								display: inline;
							}
							.font8 {
								color: #ff0000;
								display: inline;
							}
						}
					}
					/* #ifdef H5 */
					/deep/.font7{
						display: inline;
					}
					/deep/.font8{
						color: #ff0000;
						display: inline;
					}
					/* #endif */
				}
				.lineup {
					border-radius: 25rpx;
					box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.6);
					padding: 20rpx;
					background: linear-gradient(45deg, #e1582e, #c6382e);
					.lineupName {
						font-size: 28rpx;
						color: #fff;
						text-align: center;
						width: 100%;
					}
					.lineupList {
						display: flex;
						padding-top: 20rpx;
						.left {
							width: 50%;
							height: 100%;
							image {
								width: 100%;
								height: 400rpx;
								border-radius: 25rpx;
								box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.6);
							}
						}
						.right {
							width: 50%;
							height: 100%;
							padding: 0 0 0 10rpx;
							.peoName {
								color: #fff;
								width: 100%;
								text-align: center;
								font-size: 24rpx;
								padding-bottom: 10rpx;
							}
							.skillList {
								.skillImg {
									width: 50%;
									vertical-align: top;
									display: inline-flex;
									justify-content: center;
									align-items: center;
									padding-bottom: 20rpx;
									image {
										width: 100rpx;
										height: 100rpx;
										border-radius: 999rpx;
										border: 2rpx solid #ffaa00;
										box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.6);
									}
								}
							}
						}
					}
					.comment {
						color: #fff;
						font-size: 24rpx;
						padding-top: 20rpx;
						text {
							font-size: 28rpx;
							font-weight: bold;
						}
					}
				}
				.evaluateCnt {
					display: flex;
					+ .evaluateCnt {
						padding-top: 30rpx;
					}
					.tit {
						flex: 1;
						font-size: 32rpx;
						&.t1 {
							color: #ffcc03;
						}
						&.t2 {
							color: #ff556e;
						}
					}
					.cnt {
						flex: 4;
						font-size: 28rpx;
					}
				}
			}
		}
	}
}
</style>
