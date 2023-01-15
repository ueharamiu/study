import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

export function gsapConfig( element ) {
	gsap.to(".list-1", { backgroundColor: "#000000", duration: 1, repeat: 2 });
}

// 画像アニメーションの実装
export function gsapWidth( element ) {
	let showDiv = document.querySelectorAll( '.js-show-width' );
	let showBg = document.querySelectorAll( '.js-show-bg' );

	gsap.set( showBg, { width: '0%' } );

	gsap.timeline({
		repeat: -1,
	})

	.from( showBg, {
		width: '0%',
	})
	.to( showBg, {
		width: '100%',
		x: -220,
		duration: 5,
	})
	.to( showBg, {
		autoAlpha: 0,
		duration: 2,
	})
}

// セクション2 横スクロールの実装
export function gsapScroll( element ) {
	let scrollDiv = document.querySelector( '.side-scroll-div' );
	let scrollUl = document.querySelector( '.side-scroll-ul' );

	gsap.to( scrollUl, {
		x: () => -( 10 + scrollUl.clientWidth - scrollDiv.clientWidth ),
		ease: 'none', // easing （アニメーションの動き）はナシ
		scrollTrigger: {
			trigger: '.side-scroll',
			start: 'top top',
			end: () => `+=${ 10 + scrollUl.clientWidth - scrollDiv.clientWidth }`,
			scrub: true,
			pin: true,
			anticipatePin: 1,
			invalidateOnRefresh: true,
		},
	});
}

// タイムラインアニメーションの実装
export function gsapTimeLine( element ) {
	let timelineImg = document.querySelector( '.timeline-img' );
	let timelineBg = document.querySelector( '.timeline-bg' );

	gsap.set( timelineImg, { scale: 0 } );
	gsap.set( timelineBg, { scale: 0 } );

	gsap.timeline({
		scrollTrigger: {
			trigger: '.js-trigger',
			start: 'top center',
		},
	})
	.from( // アニメーション前
		timelineImg,
		{
			scale: 0,
		}
	).to( // アニメーション後
		timelineImg,
		{
			scale: 1,
		},
	).to(
		timelineBg,
		{
			scale: 1,
		}
	)
}
