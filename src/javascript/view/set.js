/* global bodyScrollLock, _ */
export default function () {

let doc = document;
let win = window;



// Handle $desc on narrow screens
let $desc       = doc.querySelector('.set-desc');
let $descWrap   = doc.querySelector('.set-desc-wrap');
let $descHandle = doc.querySelector('.set-desc-handle');
let isDescActive = false;
$descHandle.addEventListener('click', function () {
	if ($desc.classList.contains('is-active')) {
		$desc.classList.remove('is-active');
		bodyScrollLock.enableBodyScroll($descWrap);
		isDescActive = false;
	} else {
		$desc.classList.add('is-active');
		bodyScrollLock.disableBodyScroll($descWrap);
		isDescActive = true;
	}
});
win.addEventListener('resize', _.debounce(function() {
	let winWidth = win.innerWidth || doc.clientWidth || doc.body.clientWidth;
	if (winWidth > 640 && isDescActive) {
		console.log('bang');
		$desc.classList.remove('is-active');
		bodyScrollLock.enableBodyScroll($descWrap);
		isDescActive = false;
	}
}, 400));



// Image lazy load
// Ref 1: https://css-tricks.com/tips-for-rolling-your-own-lazy-loading/
// Ref 2: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
let lazyLoad = function (allLazyImgs) {
	// console.log(allLazyImgs);
	allLazyImgs.forEach(lazyImg => {
		if (lazyImg.intersectionRatio > 0) {
			// console.log(lazyImg);
			let $lazyImg = lazyImg.target;
			$lazyImg.src = $lazyImg.dataset.src;
			lazyImgObserver.unobserve($lazyImg);
		}
	});
};
let lazyImgObserver = new IntersectionObserver(lazyLoad, {
	rootMargin: "100px",
	threshold:  1.0
});

let $allArtworkImgs = doc.querySelectorAll('.set-artwork img');
$allArtworkImgs.forEach($artworkImg => {
	lazyImgObserver.observe($artworkImg);
});

}
