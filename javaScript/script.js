// loading ------------------------------------------------------------

const loading = document.querySelector('.loading');
// ローディング時にクラス名外す
function loaded() {
  sessionStorage.setItem('visited', 'first');
  if (loading) loading.classList.remove('active');
}

if (document.querySelector('.loading')) {
  // 初めて閲覧した時
  if (!sessionStorage.getItem('visited')) {
    // ローディングしたら
    window.addEventListener('load', function () {
      setTimeout(loaded, 3000);
    });
    setTimeout(loaded, 5000);
  } else {
    loaded();
  }
}

// slideShow ----------------------------------------------------------------
// pc用、sp用で写真サイズ分ける
const imgScr = ['image/slide/img13.jpg', 'image/slide/img11.jpg', 'image/slide/img12.jpg'],
  imgScrSp = ['image/slide/img13_sp.jpg', 'image/slide/img11_sp.jpg', 'image/slide/img12_sp.jpg'];

const mainVisualImage = document.getElementById('js_main_visual_image'),
  slidImage = document.createElement('img');
mainVisualImage.appendChild(slidImage);

// 画面幅によって写真サイズ変える
// sp
if (window.innerWidth < 450) {
  slidImage.setAttribute('class', 'slide_img_sp')
  slidImage.src = 'image/slide/img13_sp.jpg'
  setInterval(slideChangeSp, 10000)
// pc
} else {
  slidImage.setAttribute('class', 'slide_img')
  slidImage.src = 'image/slide/img13.jpg'
  setInterval(slideChange, 20000)
}

let slideNumSp = 0,
  slideNum = 0

// スライドの動き
function slideChangeSp() {
  // sp
  if (slideNumSp === imgScr.length - 1) {
    slideNumSp = 0;
  } else {
    slideNumSp++;
  }
  document.querySelector('.slide_img_sp').src = imgScrSp[slideNumSp];
}
function slideChange() {
  // pc
  if (slideNum === imgScr.length - 1) {
    slideNum = 0;
  } else {
    slideNum++;
  }
  document.querySelector('.slide_img').src = imgScr[slideNum];
}

// hamburger 🍔 ----------------------------------------------------------------

document.getElementById('js_hamburger_menu').addEventListener('click', function () {
  document.querySelector('.nav_sp').classList.toggle('open');
  document.querySelector('.menu_sp').classList.toggle('open');
});

//  一文字ずつ表示 ----------------------------------------------------------------

if (!sessionStorage.getItem('visited')) {
  if (document.querySelector('.js_main_visual_name')) {
  
    const animationVisualName = document.querySelector('.js_main_visual_name > p'),
      visualNameText = animationVisualName.textContent,
      // 空の配列定義
      visualNameTextArray = [];
  
    animationVisualName.textContent = '';
  
    // 一文字ずつ区切る
    for (let i = 0; i < visualNameText.split('').length; i++) {
      const oneText = visualNameText.split('')[i];
      if (oneText === ' ') {
        // 空白は空白で返す
        visualNameTextArray.push(' ');
        // 文字はspanタグで囲って返す
      } else {
        visualNameTextArray.push('<span style="animation-delay: ' + (i * .2) + 'S;">' + oneText + '</span>')
      }
    }
    // 元のHTMLに戻す
    for (let j = 0; j < visualNameTextArray.length; j++) {
      animationVisualName.innerHTML += visualNameTextArray[j]
    }
  }
  
}

// scrollDisplay ----------------------------------------------------------------

const scrollDisplay = document.querySelectorAll('.js_scroll_display');

// スクロールしたら
document.addEventListener('scroll', () => {
  scrollDisplay.forEach((_, index) => {
    // 要素までのスクロール量＋要素の0.6倍分スクロールしたら
    const scrollDisplayDistance = scrollDisplay[index].getBoundingClientRect().top
      + scrollDisplay[index].clientHeight * .6;
    if (window.innerHeight > scrollDisplayDistance) {
      scrollDisplay[index].classList.add('fade_in');
    }
  });
});

// scrollBackgroundChange ----------------------------------------------------

const body = document.getElementById('body'),
  header = document.querySelector('.header'),
  profile = document.getElementById('profile');

const mainVisualNameSp = document.querySelector('.js_main_visual_name_sp'),
  hamburgerBar = document.querySelectorAll('.hamburger_bar'),
  navSP = document.querySelector('.nav_sp')

// スクロールしたら
window.addEventListener('scroll', function () {
  // Y軸のスクロール量
  let scroll = window.pageYOffset;

  // スクロール量500以上の背景色
  if (scroll > 500) {
    document.body.style.backgroundColor = "#000";
    header.style.backgroundColor = "#000";
    profile.style.color = '#fff';
    mainVisualNameSp.style.color = '#fff';
    // ハンバーガーメニューのライン
    for (let i = 0; i < hamburgerBar.length; i++) {
      hamburgerBarLine = hamburgerBar[i]
      hamburgerBarLine.style.backgroundColor = '#fff';
    }
    // スクロール量300以上の背景色
  } else if (scroll > 300) {
    document.body.style.backgroundColor = "#fff"
    header.style.backgroundColor = "#fff";
    profile.style.color = '#000';
    mainVisualNameSp.style.color = '#000';
    // ハンバーガーメニューのライン
    for (let i = 0; i < hamburgerBar.length; i++) {
      hamburgerBarLine = hamburgerBar[i]
      hamburgerBarLine.style.backgroundColor = '#000';
    }
  }
});

// innerWidthChangeNamePlace ----------------------------------------------------

// プロフィールのレイアウト切り替え
if (document.querySelector('.js_change_position')) {
  const jsChangePosition = document.querySelector('.js_change_position');
  const profileNameEn = document.querySelector('.profile_name_en')
  const profileNameJa = document.querySelector('.profile_name_ja')

  // width1280以下のレイアウト
  if (window.innerWidth <= 1280) {
    jsChangePosition.insertBefore(profileNameJa, profileNameEn)
  }
}