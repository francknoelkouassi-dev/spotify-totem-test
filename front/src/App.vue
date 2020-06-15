<template>
	<div id="app">
		<Header/>
		<main class="main loading-scale">
			<transition :mode="transitionMode" :name="transitionName">
				<keep-alive :max="5">
					<router-view/>
				</keep-alive>
			</transition>
		</main>
	</div>
</template>

<script>
	import Header from '@/components/static/Header.vue';
	
	const DEFAULT_TRANSITION = 'slide-left';
	const DEFAULT_TRANSITION_MODE = 'out-in';
	
	export default {
		name: 'App',
		components: {
			Header
		},
		data() {
			return {
				transitionName: DEFAULT_TRANSITION,
				transitionMode: DEFAULT_TRANSITION_MODE,
				transitionEnterActiveClass: null
			};
		},
		created() {
			this.$router.beforeEach((to, from, next) => {
				let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;
				
				if (transitionName === 'slide') {
					const toDepth = to.path.split('/').length;
					const fromDepth = from.path.split('/').length;
					transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
				}
				
				this.transitionMode = DEFAULT_TRANSITION_MODE;
				this.transitionEnterActiveClass = `${transitionName}-enter-active`;
				
				if (to.meta.transitionName === 'zoom') {
					this.transitionMode = DEFAULT_TRANSITION_MODE;
					this.transitionEnterActiveClass = 'zoom-enter-active';
				}
				if (from.meta.transitionName === 'zoom') {
					this.transitionMode = null;
					this.transitionEnterActiveClass = null;
					transitionName = 'zoom';
				}
				
				this.transitionName = transitionName;
				
				next();
			});
		},
		mounted() {
			window.stopLoadingWithDelay(4000);
		}
	};
</script>

<style lang="less">
	@import (less) "./assets/styles/main.less";
	@import (less) "./assets/styles/loading.less";
	
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: 0.4s;
		transition-property: opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		transform: translateX(100%);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		transform: translateX(-100%);
	}
	
	.zoom-enter-active,
	.zoom-leave-active {
		animation-duration: 0.4s;
		animation-fill-mode: both;
		animation-name: zoom;
	}
	
	.zoom-leave-active {
		animation-direction: reverse;
		position: absolute;
	}
	
	@keyframes zoom {
		from {
			opacity: 0;
			transform: scale3d(0.3, 0.3, 0.3);
		}
		
		100% {
			opacity: 1;
		}
	}
</style>
