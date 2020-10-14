<template>
	<view class="main">
		<view class="topTab" v-if="type == 'vdo'">
			<view :class="act == 0? 'li act' : 'li'" @tap="changeAct(0)">英雄爆料</view>
			<view :class="act == 1? 'li act' : 'li'" @tap="changeAct(1)">端游对比</view>
			<view class="bomArrow" :style="'transform: translateX('+ act * 375 +'rpx);'"></view>
		</view>
		<scroll-view class="scrollView" scroll-y="true" @scrolltolower="scrolltolower" v-if="act == 0">
			<list v-for="(item,index) in fstList" :class="index == 0?'noborder': ''" :item="item" :key="index" :scrollTop="scrollTop"></list>
		</scroll-view>
		<scroll-view class="scrollView" scroll-y="true" @scrolltolower="scrolltolower" v-if="act == 1">
			<list v-for="(item,index) in sedList" :class="index == 0?'noborder': ''" :item="item" :key="index" :scrollTop="scrollTop"></list>
		</scroll-view>
	</view>
</template>

<script>
	import list from 'components/list';
	// import {newDatas} from '@/static/json/data.js'
	// import {artDatas} from '@/static/json/art.js'
	// import {vdoDatas} from '@/static/json/vdo.js'
	export default {
		data() {
			return{
				newDatas: [],
				fstList: [],
				sedList: [],
				type: '',
				scrollTop: 0,
				act: 0
			}
		},
		onShareAppMessage() {
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '分享页面：' + (this.type == 'art'?'资讯':'视频') + '列表页' });
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：' + (this.type == 'art'?'资讯':'视频') + '列表页']);
			// #endif
		},
		components: {
			list
		},
		async onLoad(opts) {
			const _this = this
			
			const artDatas = await this.getDatas('art')
			const vdoDatas = await this.getDatas('vdo')
			
			let type = opts.type
			this.type = type
			if(type == 'art'){
				this.fstList = this.sortDatas(artDatas.data)
			} else {
				let datas = this.sortDatas(vdoDatas.data)
				let fstDatas = datas.filter((v,i) => {
					return v.auth == '手游英雄试玩'
				})
				let sedDatas = datas.filter((v,i) => {
					return v.auth == '端游手游对比'
				})
				this.fstList = fstDatas
				this.sedList = sedDatas
			}
		},
		mounted() {
		},
		methods:{
			changeAct(i){
				this.act = i
				this.$nextTick(() => {
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				})
			},
			onPageScroll({scrollTop}) {
					this.scrollTop = scrollTop
			},
			getDatas(name){
				uni.showLoading({
					title: '加载中',
					mask: false
				});
				return new Promise((res,rej) => {
					uni.request({
						url: this.baseUrl+ name + '.json',
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
			sortDatas(datas){
				let sortDatas = datas.sort((a,b) => {
					return a.date < b.date ? 1 : -1
				})
				return sortDatas
			},
			scrolltolower(){
				// console.log(1)
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		// height: 100%;
		.main{
			width: 100%;
			// height: 100%;
			display: flex;
			flex-direction: column;
			background: #FFE807;
			.topTab{
				position: sticky;
				top: 0;
				width: 100%;
				display: flex;
				background: #FFE807;
				z-index: 9;
				.li{
					width: 50%;
					font-size: 32rpx;
					color: #998500;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20rpx 0;
					&.act{
						color: #333333;
					}
				}
				.bomArrow{
					position: absolute;
					width: 48rpx;
					height: 9rpx;
					background: rgba(255, 255, 255, 1);
					border-radius: 10rpx 10rpx 0 0;
					bottom: 0;
					left: 165rpx;
					transition: all 0.2s;
				}
			}
			.scrollView{
				flex: 1;
				overflow: auto;
				padding-top: 20rpx;
				background: #fff;
				padding: 0 30rpx;
				margin-top: -4rpx;
				border-radius: 40rpx 40rpx 0 0;
				.noborder{
					border: none;
					.list{
						border: none;
					}
				}
			}
		}
	}
</style>
