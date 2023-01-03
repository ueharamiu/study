import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

export function gsapConfig( element ) {
	gsap.to(".list-1", { backgroundColor: "#000000", duration: 1, repeat: 2 });
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

	gsap.fromTo( timelineImg, {
		scale: 0, //０％まで縮小
	},
	{
		scale: 1,
			scrollTrigger: {
				trigger: '.js-trigger',
				start: 'top center'
			}
	});

	gsap.fromTo( timelineBg, {
		scale: 0,
	},
	{
		scale: 1,
			scrollTrigger: {
				trigger: '.js-trigger',
			}
	},'>5',);
}
