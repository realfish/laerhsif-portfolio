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

}
