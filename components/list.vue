<template name="list">
	<view class="list index-detail-list" @tap="godetail(item)">
		<view class="left">
			<view class="title">{{ item.title }}</view>
			<view class="auth">{{ item.auth }} · {{ item.date }}</view>
		</view>
		<view class="right">
			<view class="img">
				<!-- <image :src="item.cover" mode="aspectFill" :lazy-load="true"></image> -->
				<easy-loadimage mode="aspectFill" :scroll-top="scrollTop" :image-src="item.cover" :loading-mode="'skeleton-1'"></easy-loadimage>
				<!-- <view v-if="item.path == 'vdo'" class="mask"><image src="@/static/images/play.png" mode="" class="isVideo"></image></view> -->
			</view>
		</view>
	</view>
</template>

<script>
import easyLoadimage from '@/components/easy-loadimage/easy-loadimage.vue';
export default {
	name: 'list',
	components: {
		easyLoadimage
	},
	props: {
		item: {
			id: Number,
			date: String,
			auth: String,
			path: String,
			title: String,
			cnt: String,
			cover: String
		},
		index: Number,
		scrollTop: Number
	},
	methods: {
		godetail(item) {
			const _this = this
			uni.navigateTo({
				url: '../../pages/index/detail?id=' + item.id + '&path=' + item.path,
				success() {
					uni.getStorage({
						key: 'recent',
						success: res => {
							let oldRecent = JSON.parse(res.data);
							if (oldRecent.length >= 2) {
								oldRecent.length = 2;
							}
							let _i = oldRecent.findIndex((v, i) => {
								return v.title == item.title;
							});
							if (_i == -1) {
								let datas = {
									title: item.title,
									src: 'pages/index/detail?id=' + item.id + '&path=' + item.path
								};
								oldRecent.unshift(datas);
								uni.setStorage({
									key: 'recent',
									data: JSON.stringify(oldRecent)
								});
							}
						},
						fail: err => {
							console.log(err);
							let datas = [
								{
									title: item.title,
									src: 'pages/index/detail?id=' + item.id + '&path=' + item.path
								}
							];
							uni.setStorage({
								key: 'recent',
								data: JSON.stringify(datas)
							});
						}
					});
				},
				fail(err) {
					console.log(err);
				}
			});
		},
		getDateTimeBefor(dateTime) {
			if (dateTime != null) {
				var timestamp = new Date(dateTime.replace(/-/g, '/')).getTime() / 1000;
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
			}
		}
	}
};
</script>

<style lang="less">
.list {
	display: flex;
	align-items: center;
	padding: 20rpx 0;
	border-top: 1rpx solid #f2f2f2;
	.left {
		width: 70%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.title {
			font-size: 30rpx;
			color: #000;
			// &::before {
			// 	content: '';
			// 	display: inline-block;
			// 	width: 10rpx;
			// 	background: #d73f31;
			// 	height: 20rpx;
			// 	margin-right: 10rpx;
			// 	vertical-align: baseline;
			// }
		}
		.auth {
			font-size: 24rpx;
			color: #999999;
			padding-top: 10rpx;
		}
	}
	.right {
		width: 30%;
		height: 100%;
		padding: 0 0 0 10rpx;
		display: flex;
		align-items: center;
		.img {
			width: 100%;
			height: 140rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			easy-loadimage{
				width: 100%;
				height: 140rpx;
				border-radius: 10rpx;
				overflow: hidden;
				display: block;
				.easy-loadimage{
					width: 100%;
					height: 140rpx;
					border-radius: 10rpx;
				}
			}
			image {
				width: 100%;
				height: 140rpx;
				border-radius: 10rpx;
			}
			// .mask {
			// 	position: absolute;
			// 	width: 100%;
			// 	height: 100%;
			// 	display: flex;
			// 	align-items: center;
			// 	justify-content: center;
			// 	background: rgba(0, 0, 0, 0.4);
			// 	top: 0;
			// 	left: 0;
			// 	.isVideo {
			// 		width: 50rpx;
			// 		height: 50rpx;
			// 	}
			// }
		}
	}
}
</style>
