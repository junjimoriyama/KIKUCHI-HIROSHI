// hamburger 🍔 ----------------------------------------------------------------

document.getElementById('js_hamburger_menu').addEventListener('click', function () {
  document.querySelector('.nav_sp').classList.toggle('open');
  document.querySelector('.menu_sp').classList.toggle('open');
});

// --------------------------------------------------------------------------


// gallary -------------------------------------------------------------------
const images = document.querySelectorAll('.gallary_container li');
console.log(images)
let swiper

// 全てのliに対して
images.forEach((el, index) => {
	// 画像の複製
	const image = el.querySelector('img').cloneNode();
	// imgに対してクラスthumbnailを付与
	el.querySelector('img').classList.add('thumbnail');
	// 複製したimgに対してクラスpopUpを付与
	image.classList.add('popUp');
	// liに複製したimgを加えるRS
	el.appendChild(image);
	// カーソル当たればliにクラスactive付与
	el.addEventListener('mouseleave', e => {
		e.target.classList.remove('active');
	// TODO--- 　上記との違いを知りたい
	// el.addEventListener('mouseleave', () => {
	// 	el.classList.remove('active');
	})
	// カーソル離れればliのクラスactive消える
	el.addEventListener('mouseenter', e => {
		e.target.classList.add('active');
	})
		// modalのクラス取得
		const modal = document.querySelector('.modal');
		// 中央表示の写真する場所のクラス取得
		const mainImage= document.getElementById('main_image');
		// 各liの写真をクリックすると
		el.addEventListener('click', () => {

			swiper.slideTo(index, 0)
			// modalにクラスshowを付与
			modal.classList.add('show');

			//TODO     closeのタグをHTMLで作って置いてからクラス名付け表示させる
			// //!  closeElにクラスshowを付与
			// // closeの要素を取得
			const closeEl = document.querySelector('.close');
			// // closeにクラスshow付与
			closeEl.classList.add('show');
			//TODO    ---------------------------------------------------

			//TODO     createElementでcloseElを生成--------------------------
		// 	// aタグ生成
		// 	const closeEl = document.createElement('a');
		// 	//!  このif文ではcloseボタンが表示されない
		//   // if(closeEl === null) {
		// 	// closeボタンの生成/クラスcloseを付与
		// 	closeEl.classList.add('close');
		// 	// closeをmodalの子要素としてhtmlに反映
		// 	modal.appendChild(closeEl);
		// 	// closeボタンをクリックするとmodal表示
		// // }
		//TODO    ---------------------------------------------------


		// closeボタンをクリックしたらmodalにクラスshowを付与
		closeEl.addEventListener('click', () => {
			modal.classList.remove('show');
		})
		// mainImageにクリックされた写真を表示
		// mainImage.setAttribute('src', `img/img${index + 1}.jpg`);
	})
	
		// swiper生成 ---------------------------------------------------
		const swiperWrapper = document.querySelector('.swiper-wrapper')
		const swiperSlide =  document.createElement('div');
		swiperSlide.classList.add('swiper-slide');
		const swiperSlideImage = document.createElement('img');
		swiperSlideImage.setAttribute('src', `image/gallary/img${index + 1}.jpg`);
		swiperSlide.appendChild(swiperSlideImage);
		swiperWrapper.appendChild(swiperSlide);

		const imagesWrapper = document.querySelector('.gallary_container')
		imagesWrapper.addEventListener('mouseleave', e => {
			e.target.classList.remove('active');
		});

		imagesWrapper.addEventListener('mouseenter', e => {
			e.target.classList.add('active');
		});
	});

	swiper = new Swiper('.swiper', {
		// // If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	

// --------------------------------------------------------------------------