import { gsap } from 'gsap'

export function gsapConfig( element ) {
	gsap.to(".list-1", { backgroundColor: "#000000", duration: 1, repeat: 2 });
}

// セクション2 横スクロールの実装
let scrollDiv = document.querySelector( '.side-scroll-div' );
let scrollUl = document.querySelector( '.side-scroll-ul' );

export function gsapScroll( element ) {
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
