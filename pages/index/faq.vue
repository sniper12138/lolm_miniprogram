<template>
	<view class="main">
		<view class="top">
			<view class="search">
				<view class="btn" @tap="searchData">
					<image class="search-btn" src="../../static/images/search.png" mode=""></image>
				</view>
				<input type="text" placeholder="请输入您的问题,例如：预约" :value="search" @input="inputChange" @confirm="searchData" />
				<cover-image class="close" src="../../static/images/close.png" @tap="clearSearch" v-show="search != ''">
				</cover-image>
			</view>
		</view>
		<view class="mid">
			<view class="hotWord" v-show="showWord">
				<view class="title">
					<image src="../../static/images/lolm-faq-hotIcon.png" mode=""></image>
					<text>热搜问题：</text>
				</view>
				<view class="list">
					<view class="li" v-for="(item, index) in hotWord" :key="index" :data-word="item.word" @tap="searchHotWord">{{ item.word }}</view>
					<view class="li li3" @tap="goView">进入小虎Hoo获取更多信息</view>
				</view>
			</view>
			<scroll-view scroll-y="true" class="faqList">
				<view class="li" v-for="(item, index) in faq2" :key="index" @tap="gedetail(item)">
					<view class="title">{{ item.ans }}</view>
					<view class="arrow"></view>
				</view>
				<view class="nodata" v-if="faq2.length == 0">暂无相关问题</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
// import { faq, hotWord } from '../../static/json/faq';
export default {
	data() {
		return {
			faq: [],
			faq2: [],
			hotWord: [],
			search: '',
			showWord: true
		};
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'Value': '分享页面：情报' });
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：情报']);
		// #endif
	},
	onLoad() {},
	mounted() {
		const _this = this
		uni.request({
			url: this.baseUrl+'faq.json',
			method: 'GET',
			data: {},
			success: res => {
				_this.faq = res.data
				_this.faq2 = res.data
			},
			fail: () => {},
			complete: () => {}
		});
		uni.request({
			url: this.baseUrl+'hotWord.json',
			method: 'GET',
			data: {},
			success: res2 => {
				_this.hotWord = res2.data
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		gedetail(item) {
			uni.navigateTo({
				url: './faqDetail?id=' + item.id,
				success: res => {
					uni.getStorage({
						key: 'recent',
						success: res => {
							let oldRecent = JSON.parse(res.data)
							if(oldRecent.length >= 2){
								oldRecent.length = 2
							}
							let _i = oldRecent.findIndex((v,i) => {
								return v.title == item.ans
							})
							if(_i == -1){
								let datas = {
									title: item.ans,
									src: 'pages/index/faqDetail?id='+item.id
								}
								oldRecent.unshift(datas)
								uni.setStorage({
									key: "recent",
									data: JSON.stringify(oldRecent),
								})
							}
						},
						fail:err => {
							let datas = [{
								title: item.ans,
								src: 'pages/index/faqDetail?id='+item.id
							}]
							uni.setStorage({
								key: "recent",
								data: JSON.stringify(datas),
							})
						}
					})
				},
				fail: () => {},
				complete: () => {}
			});
		},
		inputChange(e){
			this.search = e.detail.value
			if(this.search == ''){
				this.faq2 = this.faq
				this.showWord = true
			}
		},
		clearSearch(){
			this.search = ''
			if(this.search == ''){
				this.faq2 = this.faq
				this.showWord = true
			}
		},
		searchData() {
			let text = this.search;
			let datas = this.faq;
			if (text.trim() == '') {
				uni.showToast(
					{
						title: '请输入搜索内容。',
						icon: 'none',
						mask: true
					},
					2000
				);
			} else {
				uni.showLoading({
					title: '加载中...',
					mask: true
				});
				setTimeout(() => {
					let searchlist = datas.filter(product => {
						return Object.keys(product).some(key => {
							if (key == 'ans' || key == 'quen') {
								return (
									String(product[key])
										.toLowerCase()
										.indexOf(text) > -1
								);
							}
						});
					});
					this.faq2 = searchlist
					uni.hideLoading();
					this.showWord = false
				},500)
			}
		},
		searchHotWord(e){
			// #ifndef H5
			wx.aldstat.sendEvent('Click', { 'value': '搜索热词：'+e.currentTarget.dataset.word });
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '搜索热词：'+e.currentTarget.dataset.word]);
			// #endif
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			setTimeout(() => {
				let text = e.currentTarget.dataset.word
				this.search = text
				let datas = this.faq
				let searchlist = datas.filter(product => {
					return Object.keys(product).some(key => {
						if (key == 'ans' || key == 'quen') {
							return (
								String(product[key])
									.toLowerCase()
									.indexOf(text) > -1
							);
						}
					});
				});
				this.faq2 = searchlist
				this.showWord = false
				uni.hideLoading();
			},500)
		},
		goView(){
			// #ifndef H5
			wx.aldstat.sendEvent('Click', {'value': '#进入小虎Hoo获取更多信息#'});
			// #endif
			// #ifdef H5
			_czc.push(["_trackEvent", "Click", "点击事件", '#进入小虎Hoo获取更多信息#']);
			// #endif
			let src = encodeURIComponent('https://mp.weixin.qq.com/s/Kq2ItTWiB0-zGfg5o8q8PQ')
			uni.navigateTo({
				url: '../tool/webView?src='+src,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="less">
page {
	// padding: 35rpx;
	width: 100%;
	height: 100%;
	.main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #FFE807;
		.top{
			padding: 10rpx 30rpx 30rpx;
			.search {
				width: 100%;
				display: flex;
				border-radius: 999rpx;
				position: relative;
				height: 68rpx;
				background: #FFF8C7;
				box-shadow: 0 0 10rpx rgba(247, 248, 250, 0.6);
				input {
					width: 90%;
					display: block;
					padding: 10rpx;
					height: 100%;
					font-size: 28rpx;
				}
				.close{
					width: 28rpx;
					height: 28rpx;
					position: absolute;
					top: 50%;
					margin-top: -14rpx;
					right: 30rpx;
					z-index: 9;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.btn {
					width: 10%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.search-btn {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
		}
		.mid{
			flex: 1;
			display: flex;
			flex-direction: column;
			border-radius: 40rpx 40rpx 0 0;
			overflow: hidden;
			.hotWord {
				width: 100%;
				overflow: auto;
				padding: 38rpx 30rpx 20rpx;
				background: #fff;
				.title {
					font-size: 32rpx;
					color: #808080;
					display: flex;
					align-items: center;
					padding-bottom: 20rpx;
					image{
						width: 28rpx;
						height: 28rpx;
					}
					text{
						padding-left: 20rpx;
					}
				}
				.list {
					display: flex;
					flex-wrap: wrap;
					.li {
						font-size: 28rpx;
						color: #333;
						padding: 10rpx 16rpx;
						background: #FFF8DB;
						border-radius: 16rpx 16rpx 0 0;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						&.li3{
							// width: 50%;
						}
					}
				}
			}
			.faqList {
				flex: 1;
				padding: 10rpx 30rpx;
				overflow: auto;
				position: relative;
				background: #fff;
				.li {
					display: flex;
					padding: 28rpx 0;
					border-bottom: 1rpx solid #F2F2F2;
					.title {
						width: 90%;
						font-size: 32rpx;
						padding-left: 20rpx;
						color: #333;
					}
					.arrow {
						width: 10%;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						padding-right: 20rpx;
						&::before {
							content: '';
							display: block;
							width: 20rpx;
							height: 20rpx;
							border: 2rpx solid #ccc;
							border-width: 4rpx 0 0 4rpx;
							transform: rotate(135deg);
						}
					}
				}
				.nodata{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					color: #000;
				}
			}
		}
	}
}
</style>
