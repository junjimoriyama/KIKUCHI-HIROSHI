/* loading画面 */
function loaded() {
  document.querySelector('.loading').classList.remove('active');
} 
setTimeout(loaded, 100);
// ===============================================================================================


/* スライドショー */
const imgScr = ['image/img7.jpeg','image/img11.jpeg','image/img12.jpeg'];
let num = 0;

function slideTime() {
  if(num === imgScr.length - 1) {
    num = 0;
  }else{
    num++;
  }
  document.getElementById('slide_img').src = imgScr[num];
}

setInterval(slideTime, 20000);
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

