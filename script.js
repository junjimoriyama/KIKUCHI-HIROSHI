/* loading画面 */
function loaded() {
  document.querySelector('.loading').classList.remove('active');
} 
setTimeout(loaded, 100);
// ===============================================================================================


/* スライドショー */
const mainVisualImage = document.getElementById('js_main_visual_image');
const slidImage = document.createElement('img');
slidImage.setAttribute('class','slide_img');

// pc用、sp用で写真サイズ分ける
const imgScr = ['image/img13.jpeg','image/img11.jpeg','image/img12.jpeg'];
const imgScrSp = ['image/img13_sp.jpeg','image/img11_sp.jpeg','image/img12_sp.jpeg'];
let num = 0;


mainVisualImage.appendChild(slidImage);
// window幅が450以下
if(window.innerWidth < 450) {
  slidImage.src = 'image/img13_sp.jpeg';
  setInterval(slideTimeSp, 20000);
} else {
  slidImage.src = 'image/img13.jpeg';
  setInterval(slideTime, 20000);
}

function slideTime() {
  if(num === imgScr.length - 1) {
    num = 0;
  }else{
    num++;
  }
  document.querySelector('.slide_img').src = imgScr[num];
}

function slideTimeSp() {
  if(num === imgScrSp.length - 1) {
    num = 0;
  }else{
    num++;
  }
  document.querySelector('.slide_img').src = imgScrSp[num];
}

// ===============================================================================================

/* バンバーガーメニュー */
document.getElementById('js_hamburger_menu').addEventListener('click', function(){
  document.querySelector('.nav_sp').classList.toggle('open');
  document.querySelector('.menu_sp').classList.toggle('open');
});
// ===============================================================================================


/* 一文字ずつ表示 */
const animationVisualName = document.querySelector('.js_main_visual_name > p');
const visualNameText = animationVisualName.textContent,
      visualNameTextArray = [];

      animationVisualName.textContent = '';

for (let i = 0; i < visualNameText.split('').length; i++) {
  const oneText = visualNameText.split('')[i];
  if(oneText === ' ') {
    visualNameTextArray.push(' ');
  } else {
    visualNameTextArray.push('<span style="animation-delay: ' + (i * .2) + 'S;">' + oneText + '</span>')
  }
}

for (let j = 0; j < visualNameTextArray.length; j++) {
  animationVisualName.innerHTML += visualNameTextArray[j]
}
// ===============================================================================================


/* スクロールしたら表示 */



// ===============================================================================================

const scrollDisplay = document.querySelectorAll('.js_scroll_display');

document.addEventListener('scroll', () => {
  scrollDisplay.forEach((element,index) => {
    const scrollDisplayDistance = scrollDisplay[index].getBoundingClientRect().top 
    + scrollDisplay[index].clientHeight * .6;
    if(window.innerHeight > scrollDisplayDistance) {
      scrollDisplay[index].classList.add('fade_in');
    }
  });
});








// // slideMenuの動き
// const slideMenu = document.querySelector('.slide-menu-btn'),
//       slideNav = document.querySelector('.slide-menu-nav'),
//       menuTrigger = document.querySelector('.menu-trigger');

// slideMenu.addEventListener('click', function() {
// slideNav.classList.toggle('active');
// menuTrigger.classList.toggle('active');
// });

// //スクロールした時の動き
// const scollAnimation = document.querySelectorAll('.mission, .service, .news');
// document.addEventListener("scroll", function(){
//   for (let i = 0; i < scollAnimation.length; i++) {
//   const scollAnimationDistance = scollAnimation[i].
//   getBoundingClientRect().top + scollAnimation[i].clientHeight * .6
//   if (window.innerHeight > scollAnimationDistance) {
//     scollAnimation[i].classList.add("show");
//   };
//   };
// });


// // スクロール
// const pageTop = document.querySelector('.page-top')
// pageTop.addEventListener('click', e => {
//   e.preventDefault()

//   window.scrollTo({
//   top: 0,
//   behavior: 'smooth'
//   })
// })

