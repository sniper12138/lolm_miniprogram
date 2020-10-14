<template>
	<view class="main">
		<image :src="'https://cdn.tinytiger.cn/'+ (type == 'goods'?'lolitem':(type == 'skill'?'lolrunes': 'lolspell')) +'/'+(type == 'goods'?datas.itemId:(type == 'skill'?datas.pic:datas.runeId))+'.png'" mode="widthFix"></image>
		<view class="content">
			<block v-if="type == 'goods'">
				<view class="li">售价或合成费用：{{datas.price}}</view>
				<jyf-parser class="li" v-html="datas.description"></jyf-parser>
			</block>
			<block v-if="type == 'skill'">
				<jyf-parser class="li" v-html="datas.des"></jyf-parser>
			</block>
			<block v-if="type == 'rune'">
				<jyf-parser class="li" v-html="datas.longDescription"></jyf-parser>
			</block>
			<bomad></bomad>
		</view>
	</view>
</template>

<script>
	// import { datas } from '@/static/json/goodsDatas.js'
	// import { skilldata } from '@/static/json/skillDatas.js'
	// import { runeDatas } from '@/static/json/runeDatas.js'
	import jyfParser from "@/components/jyf-parser/jyf-parser";
	import bomad from '../../components/bomAd.vue';
	export default {
		data(){
			return {
				AllDatas: [],
				type: '',
				datas: {}
			}
		},
		components:{
			jyfParser,
			bomad
		},
		onShareAppMessage() {
			let title = this.datas.name
			return {
				title: title
			}
		},
		onLoad(opts) {
			let type = opts.path
			let id = opts.id
			let _i
			this.type = type
			const _this = this
			if(type == 'goods'){
				uni.request({
					url: this.baseUrl+'item.json',
					method: 'GET',
					data: {},
					success: res => {
						this.AllDatas = res.data
						_i = this.AllDatas.findIndex((v,i) => {
							return v.itemId == id
						})
						this.datas = this.AllDatas[_i]
						uni.setNavigationBarTitle({
							title: this.datas.name
						})
					},
					fail: () => {},
					complete: () => {}
				});
			} else if (type == 'skill'){
				uni.request({
					url: this.baseUrl+'rune.json',
					method: 'GET',
					data: {},
					success: res => {
						this.AllDatas = res.data
						_i = this.AllDatas.findIndex((v,i) => {
							return v.pic == id
						})
						this.datas = this.AllDatas[_i]
						uni.setNavigationBarTitle({
							title: this.datas.name
						})
					},
					fail: () => {},
					complete: () => {}
				});
			} else {
				uni.request({
					url: this.baseUrl + 'spell.json',
					method: 'GET',
					data: {},
					success: res => {
						this.AllDatas = res.data
						_i = this.AllDatas.findIndex((v,i) => {
							return v.runeId == id
						})
						this.datas = this.AllDatas[_i]
						uni.setNavigationBarTitle({
							title: this.datas.name
						})
					},
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
		image{
			width: 90%;
			margin: 0 auto;
			display: block;
		}
		.content{
			font-size: 30rpx;
			color: #C0C0C0;
			padding: 20rpx 0 0;
		}
	}
</style>
