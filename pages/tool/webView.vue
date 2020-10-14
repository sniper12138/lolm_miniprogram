<template>
	<web-view :src="src"></web-view>
</template>

<script>
	export default {
		data(){
			return{
				src: ''
			}
		},
		onShareAppMessage() {
			
		},
		onLoad(opts) {
			let src = decodeURIComponent(opts.src)
			this.src = src
		}
	}
</script>

<style>
</style>
