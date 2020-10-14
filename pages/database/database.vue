<template>
	<view class="main">
		<!-- <view class="mask">敬请期待</view> -->
		<view class="topMask"><view class="title">小虎Hoo联盟手游播报站</view></view>
		<view class="mask" v-if="showMask" @tap="showMask = false">
			<view class="popup">
				<image
					:src="
						'https://cdn.tinytiger.cn/' +
							(detailPath == 'goods' ? 'lolitem' : detailPath == 'skill' ? 'lolrunes' : 'lolspell') +
							'/' +
							(detailPath == 'goods' ? partDetail.itemId : detailPath == 'skill' ? partDetail.pic : partDetail.runeId) +
							'.png'
					"
					mode="aspectFill"
				></image>
				<view class="detailName">{{ partDetail.name }}</view>
				<view class="content">
					<block v-if="detailPath == 'goods'">
						<view class="li">售价或合成费用：{{ partDetail.price }}</view>
						<jyf-parser class="li" v-html="partDetail.description"></jyf-parser>
					</block>
					<block v-if="detailPath == 'skill'"><jyf-parser class="li" v-html="partDetail.des"></jyf-parser></block>
					<block v-if="detailPath == 'rune'"><jyf-parser class="li" v-html="partDetail.longDescription"></jyf-parser></block>
				</view>
			</view>
		</view>
		<view class="topTab">
			<view :class="act == 0 ? 'li act' : 'li'" @tap="changeAct(0, 'Hero')">英雄</view>
			<view :class="act == 1 ? 'li act' : 'li'" @tap="changeAct(1, 'Goods')">物品</view>
			<view :class="act == 2 ? 'li act' : 'li'" @tap="changeAct(2, 'Skill')">技能</view>
			<view :class="act == 3 ? 'li act' : 'li'" @tap="changeAct(3, 'Rune')">符文</view>
			<view class="bomArrow" :style="'transform: translateX(' + act * 180 + 'rpx);'"></view>
		</view>
		<scroll-view scroll-y="true" @scroll="scroller" :scroll-top="scrollTop" class="mid">
			<view class="list" id="Hero" v-show="act == 0">
				<!-- <view class="title">英雄</view> -->
				<view class="contentList">
					<view class="liA" v-for="(item, index) in heroDatas" :key="index" @tap="goPeoDetail(item.heroId)">
						<image :src="item.skins[0].big" mode="aspectFill" :lazy-load="true"></image>
						<!-- <easy-loadimage mode="aspectFill" :scroll-top="scrollTop" :image-src="item.skins[0].big" :loading-mode="'looming-gray'"></easy-loadimage> -->
						<view class="name">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="list" id="Goods" v-show="act == 1">
				<!-- <view class="title">物品</view> -->
				<view class="contentList">
					<view class="liB" v-for="(item, index) in goodsDatas" :key="index" @tap="showDetail('goods', item.itemId)">
<!-- 						<easy-loadimage
							mode="aspectFill"
							:scroll-top="scrollTop"
							:image-src="'https://cdn.tinytiger.cn/lolitem/' + item.itemId + '.png'"
							:loading-mode="'looming-gray'"
						></easy-loadimage> -->
						<image :src="'https://cdn.tinytiger.cn/lolitem/' + item.itemId + '.png'" mode="aspectFill" :lazy-load="true"></image>
						<view class="name">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="list" id="Skill" v-show="act == 2">
				<!-- <view class="title">召唤师技能</view> -->
				<view class="contentList">
					<view class="liB" v-for="(item, index) in skillDatas" :key="index" @tap="showDetail('skill', item.pic)">
						<image :src="'https://cdn.tinytiger.cn/lolrunes/' + item.pic + '.png'" mode="aspectFill" :lazy-load="true"></image>
						<!-- <easy-loadimage
							mode="aspectFill"
							:scroll-top="scrollTop"
							:image-src="'https://cdn.tinytiger.cn/lolrunes/' + item.pic + '.png'"
							:loading-mode="'looming-gray'"
						></easy-loadimage> -->
						<view class="name">{{ item.name }}</view>
					</view>
				</view>
			</view>
			<view class="list" id="Rune" v-show="act == 3">
				<!-- <view class="title">符文</view> -->
				<view class="contentList">
					<view class="liB" v-for="(item, index) in runeDatas" :key="index" @tap="showDetail('rune', item.runeId)">
						<image :src="'https://cdn.tinytiger.cn/lolspell/' + item.runeId + '.png'" mode="aspectFill" :lazy-load="true"></image>
						<!-- <easy-loadimage
							mode="aspectFill"
							:scroll-top="scrollTop"
							:image-src="'https://cdn.tinytiger.cn/lolspell/' + item.runeId + '.png'"
							:loading-mode="'looming-gray'"
						></easy-loadimage> -->
						<view class="name">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
// import easyLoadimage from '@/components/easy-loadimage/easy-loadimage.vue';
import jyfParser from "@/components/jyf-parser/jyf-parser";
export default {
	data() {
		return {
			heroDatas: [],
			goodsDatas: [],
			skillDatas: [],
			runeDatas: [],
			act: 0,
			domList: [],
			scrollTop: 0,
			oldScrollTop: 0,
			detailPath: 'goods',
			detailId: 0,
			partDatas: [],
			partDetail: {},
			showMask: false
		};
	},
	components: {
		jyfParser
	},
	onLoad() {
		
	},
	onShow() {
		// #ifndef H5
		wx.aldstat.sendEvent('Gopage', { 'page': '百科' });
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Gopage", "进入页面", '百科']);
		// #endif
	},
	async mounted() {
		const _this = this;

		const heroRes = await this.getResDatas('hreo');
		const goodsRes = await this.getResDatas('item');
		const skillRes = await this.getResDatas('rune');
		const runeRes = await this.getResDatas('spell');
		this.heroDatas = heroRes;
		this.goodsDatas = goodsRes;
		this.skillDatas = skillRes;
		this.runeDatas = runeRes;
		
		// uni.request({
		// 	url: this.baseUrl + 'hreo.json',
		// 	method: 'GET',
		// 	data: {},
		// 	success: res => {
		// 		this.heroDatas = res.data
		// 		uni.request({
		// 			url: this.baseUrl + 'item.json',
		// 			method: 'GET',
		// 			data: {},
		// 			success: res2 => {
		// 				this.goodsDatas = res2.data
		// 				uni.request({
		// 					url: this.baseUrl + 'rune.json',
		// 					method: 'GET',
		// 					data: {},
		// 					success: res3 => {
		// 						this.skillDatas = res3.data
		// 						uni.request({
		// 							url: this.baseUrl + 'spell.json',
		// 							method: 'GET',
		// 							data: {},
		// 							success: res4 => {
		// 								this.runeDatas = res4.data
		// 								let $DomList = ['Hero','Goods','Skill','Rune']
		// 								this.$nextTick(async () => {
		// 									let list = []
		// 								  for(let i = 0,len = $DomList.length;i < len; i++){
		// 									const res = await _this.getDom($DomList[i])
		// 									list.push(res.top)
		// 										// _this.getDom($DomList[i]).then(res => {
		// 										// 	let $DomTop = res.top - 57
		// 										// 	list.push($DomTop)
		// 										// })
		// 									}
		// 									// setTimeout(() => {
		// 										_this.domList = list
		// 										console.log(_this.domList)
		// 										// uni.hideLoading()
		// 									// },1000)
		// 								})
		// 							},
		// 							fail: () => {},
		// 							complete: () => {}
		// 						});
		// 					},
		// 					fail: () => {},
		// 					complete: () => {}
		// 				});
		// 			},
		// 			fail: () => {},
		// 			complete: () => {}
		// 		});
		// 	},
		// 	fail: () => {},
		// 	complete: () => {}
		// });
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'value': '分享页面：百科页'});
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：百科页']);
		// #endif
	},
	methods: {
		// onPageScroll({ scrollTop }) {
		// 	this.scrollTop = scrollTop;
		// },
		getDom(id) {
			return new Promise((res, rej) => {
				uni
					.createSelectorQuery()
					.select('#' + id)
					.boundingClientRect(data => {
						//目标节点
						res(data);
					})
					.exec();
			});
		},
		getResDatas(name) {
			uni.showLoading({
				title: '加载中',
				mask: false
			});
			return new Promise((res, rej) => {
				uni.request({
					url: this.baseUrl + name + '.json',
					method: 'GET',
					data: {},
					success: reslove => {
						res(reslove.data);
						uni.hideLoading();
					},
					fail: err => {
						rej(err);
						uni.hideLoading();
					},
					complete: () => {}
				});
			});
		},
		goPeoDetail(id) {
			uni.navigateTo({
				url: './peoDetail?id=' + id,
				success() {},
				fail(err) {
					console.log(err);
				}
			});
		},
		goArmsDetail() {
			uni.navigateTo({
				url: './arms',
				success() {},
				fail(err) {
					console.log(err);
				}
			});
		},
		goPartsDetail(path, id) {
			uni.navigateTo({
				url: './parts?path=' + path + '&id=' + id,
				success() {},
				fail(err) {
					console.log(err);
				}
			});
		},
		scroller(e) {
			this.oldScrollTop = e.detail.scrollTop;
		},
		changeAct(i, Dom) {
			this.act = i;
			this.scrollTop = this.oldScrollTop
			this.$nextTick(() => {
				this.scrollTop = 0
			})
			// uni
			// 	.createSelectorQuery()
			// 	.select('#' + Dom)
			// 	.boundingClientRect(data => {
			// 		//目标节点
			// 		uni
			// 			.createSelectorQuery()
			// 			.select('.main')
			// 			.boundingClientRect(res => {
			// 				//最外层盒子节点
			// 				uni.pageScrollTo({
			// 					duration: 200, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
			// 					scrollTop: -(res.top - data.top) - 57, //滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
			// 					success(res) {
			// 						_this.$nextTick(() => {
			// 							_this.act = i;
			// 						});
			// 					}
			// 				});
			// 			})
			// 			.exec();
			// 	})
			// 	.exec();
		},
		// onPageScroll(e) {
		// 	let list = this.domList.filter((v, i) => {
		// 		return e.scrollTop >= v;
		// 	});
		// 	let _i = list.length - 1;
		// 	this.act = _i;
		// }
		showDetail(path, id) {
			this.detailPath = path;
			this.detailId = id;
			this.partDatas = this[this.getDatas(path)];
			this.partDetail = this[this.getDatas(path)][this.getIndex(id)];
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '查看物品：'+this.partDetail.name});
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '查看物品：'+this.partDetail.name]);
			// #endif
			this.showMask = true;
		},
		getDatas(path) {
			return path == 'goods' ? 'goodsDatas' : path == 'skill' ? 'skillDatas' : 'runeDatas';
		},
		getIndex(id) {
			let partName = this.detailPath == 'goods' ? 'itemId' : this.detailPath == 'skill' ? 'pic' : 'runeId';
			return this.partDatas.findIndex((v, i) => {
				return v[partName] == id;
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
	display: flex;
	flex-direction: column;
	background: #ffe006;
	.topMask {
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
		.title {
			color: #000;
			font-size: 36rpx;
		}
		&::before {
			content: '';
			position: absolute;
			background: rgba(255, 255, 255, 0.2);
			width: 600rpx;
			height: 600rpx;
			border-radius: 50%;
			right: -320rpx;
			top: -200rpx;
		}
	}
	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		.popup {
			width: 80%;
			background: rgba(0, 0, 0, 0.8);
			border-radius: 15rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 40rpx;
			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.detailName {
				padding: 20rpx 0 0;
				color: #fff;
				font-size: 32rpx;
			}
			.content {
				color: #fff;
				font-size: 28rpx;
				padding-top: 40rpx;
				.li {
					+ .li {
						padding-top: 20rpx;
					}
				}
			}
		}
	}
	.popup {
		width: 80%;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 15rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		.detailName {
			padding: 20rpx 0 0;
			color: #fff;
			font-size: 32rpx;
		}
		.content {
			color: #fff;
			font-size: 28rpx;
			padding-top: 40rpx;
			.li {
				+ .li {
					padding-top: 20rpx;
				}
			}
		}
	}
	.topTab {
		width: 100%;
		padding: 220rpx 15rpx 25rpx;
		background: #ffe006;
		position: relative;
		// top: 0;
		overflow: hidden;
		// z-index: 9;
		/* #ifdef H5 */
		padding-top: 120rpx;
		/* #endif */
		&::before {
			content: '';
			position: absolute;
			background: rgba(255, 255, 255, 0.2);
			width: 600rpx;
			height: 600rpx;
			border-radius: 50%;
			right: -320rpx;
			top: -200rpx;
		}
		.bomArrow {
			position: absolute;
			width: 48rpx;
			height: 9rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10rpx 10rpx 0 0;
			bottom: 0;
			left: 80rpx;
			transition: all 0.2s;
		}
		.li {
			width: 23%;
			margin: 0 1%;
			font-size: 32rpx;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			transition: all 0.2s;
			color: #7f6e00;
			position: relative;
			&.act {
				color: #333;
				font-weight: bold;
			}
		}
	}
	// .mask {
	// 	background: rgba(0, 0, 0, 0.8);
	// 	border-radius: 15rpx;
	// 	padding: 20rpx 35rpx;
	// 	font-size: 24rpx;
	// 	color: #fff;
	// }
	.mid {
		padding: 40rpx 20rpx 0;
		flex: 1;
		overflow: auto;
		border-radius: 40rpx 40rpx 0 0;
		background: #fff;
		.list {
			.title {
				font-size: 24rpx;
				color: #000;
				position: sticky;
				top: 0;
				background: #fff;
				padding: 20rpx 35rpx;
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
			.contentList {
				width: 100%;
				padding: 20rpx 35rpx;
				display: flex;
				flex-wrap: wrap;
				.liA {
					width: 46%;
					margin: 0 4% 0 0;
					display: flex;
					align-items: center;
					flex-direction: column;
					padding-bottom: 20rpx;
					// easy-loadimage {
					// 	width: 100%;
					// 	height: 160rpx;
					// 	border-radius: 20rpx;
					// 	overflow: hidden;
					// 	.easy-loadimage {
					// 		width: 100%;
					// 		height: 160rpx;
					// 		border-radius: 20rpx;
					// 	}
					// }
					&:nth-child(2n) {
						margin: 0 0 0 4%;
					}
					image {
						width: 100%;
						height: 160rpx;
						border-radius: 20rpx;
						box-shadow: 0 6rpx 12rpx 0 rgba(0, 0, 0, 0.15);
					}
					.name {
						padding: 10rpx 10rpx 0;
						font-size: 28rpx;
						color: #808080;
					}
				}
				.liB {
					width: 25%;
					display: flex;
					align-items: center;
					flex-direction: column;
					padding-bottom: 20rpx;
					// easy-loadimage {
					// 	width: 120rpx;
					// 	height: 120rpx;
					// 	border-radius: 999rpx;
					// 	.easy-loadimage {
					// 		width: 120rpx;
					// 		height: 120rpx;
					// 		border-radius: 999rpx;
					// 	}
					// }
					image {
						width: 120rpx;
						height: 120rpx;
						border-radius: 999rpx;
						box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.8);
					}
					.name {
						padding: 10rpx 10rpx 0;
						font-size: 28rpx;
						color: #808080;
					}
				}
			}
		}
	}
}
</style>
