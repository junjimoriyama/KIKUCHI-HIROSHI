// hamburger 🍔 ----------------------------------------------------------------

document.getElementById('js_hamburger_menu').addEventListener('click', function () {
	document.querySelector('.nav_sp').classList.toggle('open');
	document.querySelector('.menu_sp').classList.toggle('open');
});

// gallary -------------------------------------------------------------------
const images = document.querySelectorAll('.gallary_container li');
// swiperを定義
let swiper

// 全てのliに対して
images.forEach((el, index) => {
	// 画像の複製
	const image = el.querySelector('img').cloneNode();
	// imgに対してクラスthumbnailを付与
	el.querySelector('img').classList.add('thumbnail');
	// 複製したimgに対してクラスpopUpを付与
	image.classList.add('popUp');
	// liに複製したimgを加える
	el.appendChild(image);
	// カーソル当たればliにクラスactive付与
	el.addEventListener('mouseleave', e => {
		e.target.classList.remove('active');
	})
	// カーソル離れればliのクラスactive消える
	el.addEventListener('mouseenter', e => {
		e.target.classList.add('active');
	})
	// modalのクラス取得
	const modal = document.querySelector('.modal');
	// 中央表示の写真する場所のクラス取得
	const mainImage = document.getElementById('main_image');
	// 各liの写真をクリックすると
	el.addEventListener('click', () => {

		swiper.slideTo(index, 0)
		// modalにクラスshowを付与
		modal.classList.add('show');

		// ギャラリーの写真閉じるボタン
		const closeEl = document.querySelector('.close');
		closeEl.classList.add('show');

		// closeボタンをクリックしたらmodalにクラスshowを付与
		closeEl.addEventListener('click', () => {
			modal.classList.remove('show');
		})
		// mainImageにクリックされた写真を表示
		mainImage.setAttribute('src', `img/img${index + 1}.jpg`);
	})

	// swiper生成 ---------------------------------------------------
	// 各要素取得
	const swiperWrapper = document.querySelector('.swiper-wrapper'),
		swiperSlide = document.createElement('div');
	swiperSlide.classList.add('swiper-slide');
	const swiperSlideImage = document.createElement('img');
	// 写真の表示
	swiperSlideImage.setAttribute('src', `/image/gallary/img${index + 1}.jpg`);
	swiperSlide.appendChild(swiperSlideImage);
	swiperWrapper.appendChild(swiperSlide);

	const imagesWrapper = document.querySelector('.gallary_container')
	// カーソルが離れたとき
	imagesWrapper.addEventListener('mouseleave', e => {
		e.target.classList.remove('active');
	});
	// カーソルがのったとき
	imagesWrapper.addEventListener('mouseenter', e => {
		e.target.classList.add('active');
	});
});

// swiperインスタンス化
swiper = new Swiper('.swiper', {

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});