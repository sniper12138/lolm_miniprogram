<script>
	export default {
		onLaunch: function() {
			// #ifndef H5
			wx.aldstat.sendEvent('Gopage', {'page':'进入页面'});
			// #endif
			// #ifdef H5
			setTimeout(() => {
				_czc.push(["_trackEvent", "Gopage", "进入页面", '进入页面']);
			},200)
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	/* #ifdef H5 */
	// uni-page-head,.uni-app--showtabbar uni-page-wrapper:after{
	// 	display: none;
	// }
	// .uni-app--showtabbar uni-page-head[uni-page-head-type=default]~uni-page-wrapper{
	// 	height: calc(100% - 50px - env(safe-area-inset-bottom));
	// }
	[title='站长统计'] {
		display: none;
	}
	/* #endif */
	
	*,
	page,
	view,
	scroll-view,
	swiper,
	swiper-item,
	movable-area,
	movable-view,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox-group,
	checkbox,
	form,
	input,
	label,
	picker,
	picker-view,
	radio-group,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	functional-page-navigator,
	image,
	video,
	camera,
	live-player,
	live-pusher,
	map,
	canvas,
	open-data,
	web-view,
	ad {
	  box-sizing: border-box;
		word-break: break-word;
	}
	*,
	page::after,
	view::after,
	scroll-view::after,
	swiper::after,
	swiper-item::after,
	movable-area::after,
	movable-view::after,
	cover-view::after,
	cover-image::after,
	icon::after,
	text::after,
	rich-text::after,
	progress::after,
	button::after,
	checkbox-group::after,
	checkbox::after,
	form::after,
	input::after,
	label::after,
	picker::after,
	picker-view::after,
	radio-group::after,
	radio::after,
	slider::after,
	switch::after,
	textarea::after,
	navigator::after,
	functional-page-navigator::after,
	image::after,
	video::after,
	camera::after,
	live-player::after,
	live-pusher::after,
	map::after,
	canvas::after,
	open-data::after,
	web-view::after,
	ad::after {
	  box-sizing: border-box;
		word-break: break-word;
	}
	*,
	page::before,
	view::before,
	scroll-view::before,
	swiper::before,
	swiper-item::before,
	movable-area::before,
	movable-view::before,
	cover-view::before,
	cover-image::before,
	icon::before,
	text::before,
	rich-text::before,
	progress::before,
	button::before,
	checkbox-group::before,
	checkbox::before,
	form::before,
	input::before,
	label::before,
	picker::before,
	picker-view::before,
	radio-group::before,
	radio::before,
	slider::before,
	switch::before,
	textarea::before,
	navigator::before,
	functional-page-navigator::before,
	image::before,
	video::before,
	camera::before,
	live-player::before,
	live-pusher::before,
	map::before,
	canvas::before,
	open-data::before,
	web-view::before,
	ad::before {
	  box-sizing: border-box;
		word-break: break-word;
	}

</style>
