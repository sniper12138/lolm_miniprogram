<template>
	<view class="content">
		<!-- <view class="top"> -->
		<view class="topMask">
			<view class="title">小虎Hoo联盟手游播报站</view>
		</view>
		<view class="top">
			<view class="swiper">
				<swiper :indicator-dots="true" :indicator-color="'#fff'" :indicator-active-color="'#ffcc03'" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
					<swiper-item v-for="(item, index) in banner" :key="index" @tap="godetail(item.id, item.path)">
						<view class="swiper-item"><image :src="item.img" mode="aspectFill"></image></view>
					</swiper-item>
				</swiper>
			</view>
			<view class="top-bar">
				<view class="li" id="li" data-name="爆料" @tap="goTopdetail('art')">
					<image src="https://cdn.tinytiger.cn/20200618/lolm-index-tab-icon1.png" mode="widthFix"></image>
					<view class="name">爆料</view>
				</view>
				<view class="li" id="li" data-name="看一看" @tap="goTopdetail('vdo')">
					<image src="https://cdn.tinytiger.cn/20200618/lolm-index-tab-icon2.png" mode="widthFix"></image>
					<view class="name">看一看</view>
				</view>
				<view class="li" id="li" data-name="情报" @tap="goFaq()">
					<image src="https://cdn.tinytiger.cn/20200618/lolm-index-tab-icon3.png" mode="widthFix"></image>
					<view class="name">情报</view>
				</view>
				<view class="li" id="li" data-name="预约&礼包" @tap="goGift()">
					<image src="https://cdn.tinytiger.cn/20200618/lolm-index-tab-icon4.png" mode="widthFix"></image>
					<view class="name">预约&礼包</view>
				</view>
			</view>
		</view>
		<!-- </view> -->
		<!-- <view class="mid"> -->
			<!-- <view class="barMask"></view> -->
			<scroll-view class="scrollView" scroll-y="true" @scrolltolower="scrolltolower">
				<list :class="index == 0 ? 'noborder' : ''" v-for="(item, index) in newDatas" :item="item" :scrollTop="scrollTop" :key="index"></list>
			</scroll-view>
		<!-- </view> -->
	</view>
</template>

<script>
// import {banner,newDatas} from '@/static/json/data.js'
// import {artDatas} from '@/static/json/art.js'
// import {vdoDatas} from '@/static/json/vdo.js'
// import {banner} from '@/static/json/banner.js'
import list from 'components/list';
export default {
	data() {
		return {
			banner: [],
			newDatas: [],
			topName: '',
			scrollTop: 0
		};
	},
	components: {
		list
	},
	onLoad() {
	},
	onShow() {
		// #ifndef H5
		wx.aldstat.sendEvent('Gopage', { 'page': '资讯' });
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Gopage", "进入页面", "资讯"]);
		// #endif
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'value': '分享页面：资讯' });
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", "分享页面：资讯"]);
		// #endif
	},
	async mounted() {
		uni.showLoading({
			title: '加载中',
			mask: false
		});
		const _this = this;
		
		const arts = await this.getDatas('art')
		const vdos = await this.getDatas('vdo')
		let artDatas = arts.data
		let vdoDatas = vdos.data
		let datas = artDatas.concat(vdoDatas);
		let sortDatas = this.sortDatas(datas);
		this.newDatas = sortDatas;
		
		const banners = await this.getDatas('banner')
		this.banner = banners.data
		
	},
	methods: {
		getDatas(name){
			uni.showLoading({
				title: '加载中',
				mask: false
			});
			return new Promise((res,rej) => {
				uni.request({
					url: this.baseUrl + name + '.json',
					method: 'GET',
					data: {},
					success: resolve => {
						res(resolve)
						uni.hideLoading()
					},
					fail: (err) => {
						rej(err)
						uni.hideLoading()
					},
					complete: () => {}
				});
			})
		},
		onPageScroll({scrollTop}) {
				this.scrollTop = scrollTop
		},
		changeName(e) {
			this.topName = e;
		},
		goTopdetail(type) {
			const _this = this
			uni.navigateTo({
				url: '../../pages/index/topDetail?type=' + type,
				success() {
					let val = type == 'art'?'爆料':'看一看'
					// #ifndef H5
					wx.aldstat.sendEvent('Click', { 'value':'点击首页tab：' + val });
					// #endif
					// #ifdef H5
					_czc.push(["_trackEvent", "Click", "点击事件", '点击首页tab：' + val]);
					// #endif
				},
				fail(err) {
					// console.log(err);
				}
			});
		},
		goFaq() {
			const _this = this
			uni.navigateTo({
				url: '../../pages/index/faq',
				success() {
					// #ifndef H5
					wx.aldstat.sendEvent('Click', { 'value':'点击首页tab：情报' });
					// #endif
					// #ifdef H5
					_czc.push(["_trackEvent", "Click", "点击事件", '点击首页tab：情报']);
					// #endif
				},
				fail(err) {
					// console.log(err);
				}
			});
		},
		goGift() {
			const _this = this
			uni.navigateTo({
				url: '../../pages/index/giftBag',
				success() {
					// #ifndef H5
					wx.aldstat.sendEvent('Click', { 'value':'点击首页tab：预约&礼包' });
					// #endif
					// #ifdef H5
					_czc.push(["_trackEvent", "Click", "点击事件", '点击首页tab：预约&礼包']);
					// #endif
				},
				fail(err) {
					// console.log(err);
				}
			});
		},
		godetail(id, path) {
			const _this = this
			uni.navigateTo({
				url: '../../pages/index/detail?id=' + id + '&path=' + path,
				success() {
					// #ifndef H5
					wx.aldstat.sendEvent('Click', { 'banner_id': id });
					// #endif
					// #ifdef H5
					_czc.push(["_trackEvent", "Click", "点击事件", 'banner_id: ' + id]);
					// #endif
				},
				fail(err) {
					// console.log(err);
				}
			});
		},
		sortDatas(datas) {
			let sortDatas = datas.sort((a, b) => {
				return a.date < b.date ? 1 : -1;
			});
			return sortDatas;
		},
		scrolltolower() {
			// console.log(1);
		}
	}
};
</script>

<style lang="less">
page {
	width: 100%;
	height: 100%;
	/* #ifdef H5 */
	height: auto;
	/* #endif */
	.content {
		width: 100%;
		// height: 100%;
		// padding: 35rpx;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
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
		.top{
			padding: 220rpx 15rpx 100rpx;
			/* #ifdef H5 */
			padding-top: 120rpx;
			/* #endif */
			background: #ffe006;
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
			.swiper {
				position: relative;
				swiper {
					height: 280rpx;
					.swiper-item {
						width: 100%;
						height: 280rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						image {
							width: 98%;
							height: 98%;
							margin: 0 auto;
							display: block;
							border-radius: 20rpx;
							box-shadow: 0 0 10rpx rgba(0,0,0,.6);
						}
					}
				}
			}
			.top-bar {
				width: 100%;
				display: flex;
				position: relative;
				padding: 20rpx 0 0 0;
				.li {
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 10rpx 20rpx;
					image {
						width: 120rpx;
					}
					.name {
						padding-top: 15rpx;
						color: #333333;
						font-size: 24rpx;
					}
				}
			}
		}
		// .mid{
			// position: absolute;
			// top: 750rpx;
			// left: 0;
			// .barMask{
			// 	width: 100%;
			// 	height: 300rpx;
			// 	background: #fff;
			// 	position: fixed;
			// 	top: 0;
			// 	left: 0;
			// }
			.scrollView {
				background: #fff;
				z-index: 2;
				padding: 35rpx;
				border-radius: 25rpx 25rpx 0 0;
				margin-top: -80rpx;
				.noborder{
					border: none;
				}
				list {
					&.noborder {
						border: none;
						.list {
							border: none;
						}
					}
				}
			}
		// }
	}
}
</style>
