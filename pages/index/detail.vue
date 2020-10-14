<template>
	<view class="main" id="main">
		<view class="mid">
			<view class="title">{{ datas.title }}</view>
			<view class="content">
				<!-- <text v-if="datas.path == 'vdo'">观看地址：{{matchStr(datas.cnt)}}</text> -->
				<jyf-parser ref="article"></jyf-parser>
				<view class="about">
					<view class="date">发布于{{ datas.date }}</view>
					<view class="browse">{{changeNumMillon(datas.browse)}}次浏览</view>
				</view>
				<view class="bomText">功能持续开发中</view>
				<view class="bomText">台服预约账号、α测试安装包、预约礼包等将在六月中旬上线~</view>
				<view class="bomText t1">本内容由热心网友提供~</view>
			</view>
		</view>
			<bomad :share="isShare"></bomad>
	</view>
</template>

<script>
// import { newDatas } from '@/static/json/data';
// import { artDatas } from '@/static/json/art';
// import { vdoDatas } from '@/static/json/vdo';
import bomad from '../../components/bomAd.vue';
import jyfParser from "@/components/jyf-parser/jyf-parser";
export default {
	data() {
		return {
			id: 0,
			newDatas: [],
			datas: [],
			shareId: 0,
			sharePath: 'art',
			isShare: false
		};
	},
	components: {
		bomad,
		jyfParser
	},
	onLoad(opts) {
		uni.showLoading({
			title: '加载中',
			mask: false
		});
		const _this = this;
		let isShare = opts.share
		this.isShare = isShare == '1'
		uni.request({
			url: this.baseUrl+'art.json',
			method: 'GET',
			data: {},
			success: res => {
				let artDatas = res.data;
				uni.request({
					url: this.baseUrl+'vdo.json',
					method: 'GET',
					data: {},
					success: res2 => {
						let vdoDatas = res2.data;
						let id = opts.id;
						let path = opts.path;
						this.shareId = id
						this.sharePath = path
						// #ifndef H5
						wx.aldstat.sendEvent('Click', { 'value':'查看'+ (path == 'art'?'资讯':'视频') +'文章id：' + id });
						// #endif
						// #ifdef H5
						_czc.push(["_trackEvent", "Click", "点击事件", '查看'+ (path == 'art'?'资讯':'视频') +'文章id：' + id]);
						// #endif
						let newDatas = path == 'art' ? artDatas : vdoDatas;
						let _index = newDatas.findIndex((v, i) => {
							return v.id == id;
						});
						_this.datas = newDatas[_index];
						_this.$refs.article.setContent(_this.datas.cnt);
						uni.hideLoading();
					},
					fail: (err) => {
						// console.log(err)
						uni.hideLoading();
					},
					complete: () => {}
				});
			},
			fail: (err) => {
				// console.log(err)
			},
			complete: () => {}
		});
	},
	onShareAppMessage() {
		// #ifndef H5
		wx.aldstat.sendEvent('Click', { 'value': '分享页面：资讯详情页'+ this.datas.title});
		// #endif
		// #ifdef H5
		_czc.push(["_trackEvent", "Click", "点击事件", '分享页面：资讯详情页'+ this.datas.title]);
		// #endif
		let title = '【lol手游】'+this.datas.title
		let path = '/pages/index/detail?id=' + this.shareId + '&path=' + this.sharePath + '&share=1'
		return {
			title: title,
			path: path
		}
	},
	mounted() {
			// this.$nextTick(() => {
			// 	setTimeout(() => {
			// 		let main = uni.createSelectorQuery().select('#main');
			// 		main
			// 			.boundingClientRect(data => {
			// 				console.log(data.height);
			// 			})
			// 			.exec();
			// 	},1000)
			// })
	},
	methods: {
		matchStr(str){
			return str.replace("<video src='","").replace("' controls></video>","")
		},
		changeNumMillon(num){
			return num > 9999 ? (num / 10000).toFixed(1) + '万' : num
		},
		getDateTimeBefor(dateTime) {
			let date;
			if (dateTime != null) {
				date = dateTime.replace(/-/g, '/');
			}
			var timestamp = new Date(date).getTime() / 1000;
			var mistiming = Math.round(new Date() / 1000) - timestamp;
			var postfix = mistiming > 0 ? '前' : '后';
			mistiming = Math.abs(mistiming);
			var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
			var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];

			for (var i = 0; i < 7; i++) {
				var inm = Math.floor(mistiming / arrn[i]);
				if (inm != 0) {
					return inm + arrr[i] + postfix;
				}
			}
		},
		goQuan(){
			let src = encodeURIComponent('https://mp.weixin.qq.com/s/gGQt_LQbbQg8x5Hgs1Itug')
			uni.navigateTo({
				url: '../../pages/tool/webView?src='+ src,
				success: res => {},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			});
		},
		gotolower() {
			console.log(1);
		},
		scroller(e){
			// console.log(e.detail.scrollHeight)
		},
		onPageScroll(e){
			// console.log(e)
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
	// padding: 35rpx;
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
			// &::after{
			// 	content: '';
			// 	display: block;
			// 	width: 74rpx;
			// 	height: 10rpx;
			// 	background: rgba(230,230,230,1);
			// 	border-radius: 4rpx;
			// 	margin: 20rpx auto 0;
			// }
		}
		.auth {
			font-size: 24rpx;
			color: #c0c0c0;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #c0c0c0;
		}
		.content {
			font-size: 28rpx;
			color: #c0c0c0;
			padding: 20rpx 0;
			color: #000;
			.about{
				padding: 10rpx 0 40rpx;
				display: flex;
				justify-content: space-between;
				color: #828282;
				font-size: 24rpx;
			}
			video {
				width: 100%;
				display: block;
				border-radius: 10rpx;
			}
			image{
				border-radius: 10rpx;
			}
			.bomText {
				font-size: 24rpx;
				color: #808080;
				font-weight: bold;
				text-align: center;
				&.t1 {
					font-weight: normal;
					color: #c0c0c0;
				}
				+ .bomText {
					padding-top: 20rpx;
				}
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
	// bomad {
	// 	&.fixed {
	// 		position: fixed;
	// 		bottom: 0;
	// 		left: 50%;
	// 		transform: translateX(-50%);
	// 	}
	// }
}
</style>
