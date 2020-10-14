<template>
	<view class="main">
		<view class="mid">
			<view class="title">{{datas.ans}}</view>
			<view class="content">
				<jyf-parser ref="article"></jyf-parser>
			</view>
		</view>
		<bomad :share="isShare"></bomad>
	</view>
</template>

<script>
	// import { faq, hotWord } from '../../static/json/faq';
	import bomad from '../../components/bomAd.vue';
	import jyfParser from '../../components/jyf-parser/jyf-parser.vue';
	export default {
		data(){
			return {
				faq: [],
				id: 0,
				datas: [],
				shareId: 0,
				isShare: false
			}
		},
		onShareAppMessage() {
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '分享页面：情报详情页'+ this.datas.ans });
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：情报详情页'+ this.datas.ans]);
			// #endif
			let title = '【lol手游】'+this.datas.ans
			let path = '/pages/index/faqDetail?id=' + this.shareId + '&share=1'
			return {
				title: title,
				path: path
			}
		},
		components: {
			bomad,
			jyfParser
		},
		async onLoad(opts){
			uni.showLoading({
				title: '加载中',
				mask: false
			});
			const _this = this
			let isShare = opts.share
			this.isShare = isShare == '1'
			
			const res = await this.getDatas('faq')
			_this.faq = res.data
			let id = opts.id
			this.shareId = id
			let _index = res.data.findIndex((v,i) => {
				return v.id == id
			})
			_this.datas = _this.faq[_index]
			_this.$refs.article.setContent(_this.datas.quen);
			
		},
		mounted() {
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
							uni.hideLoading();
						},
						fail: (err) => {
							rej(err)
							uni.hideLoading();
						},
						complete: () => {}
					});
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100%;
		height: 100%;
	}
	.main{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #FFE807;
		.mid{
			flex: 1;
			overflow: auto;
			background: #fff;
			padding: 40rpx 30rpx 0;
			border-radius: 25rpx 25rpx 0 0;
			.title {
				font-size: 30rpx;
				font-weight: bold;
				color: #333;
				text-align: center;
				&::after{
					content: '';
					display: block;
					width: 74rpx;
					height: 10rpx;
					background: rgba(230,230,230,1);
					border-radius: 4rpx;
					margin: 20rpx auto 0;
				}
			}
			.content {
				font-size: 28rpx;
				color: #c0c0c0;
				padding: 20rpx 0;
				color: #000;
				._p{
					padding-top: 20rpx;
				}
				.about{
					padding: 10rpx 0 40rpx;
					display: flex;
					justify-content: space-between;
					color: #828282;
					font-size: 24rpx;
				}
			}
		}
		.tabbar{
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 10rpx 0 100rpx;
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
	}
</style>
