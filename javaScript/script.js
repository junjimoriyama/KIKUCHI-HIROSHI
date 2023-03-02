// loading ------------------------------------------------------------

const loading = document.querySelector('.loading');
// ローディング時にクラス名外す
function loaded() {
  loading.classList.remove('active');
}

if (document.querySelector('.loading')) {
  if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'first');
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
if (window.innerWidth < 450) {
  slidImage.setAttribute('class', 'slide_img_sp')
  slidImage.src = 'image/slide/img13_sp.jpg'
  setInterval(slideChangeSp, 10000)
} else {
  slidImage.setAttribute('class', 'slide_img')
  slidImage.src = 'image/slide/img13.jpg'
  setInterval(slideChange, 20000)
}

let slideNumSp = 0,
  slideNum = 0

// スライドの動き
function slideChangeSp() {
  if (slideNumSp === imgScr.length - 1) {
    slideNumSp = 0;
  } else {
    slideNumSp++;
  }
  document.querySelector('.slide_img_sp').src = imgScrSp[slideNumSp];
}
function slideChange() {
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
  // 最終的には元のHTMLに入れ込む
  for (let j = 0; j < visualNameTextArray.length; j++) {
    animationVisualName.innerHTML += visualNameTextArray[j]
  }
}

// scrollDisplay ----------------------------------------------------------------
// スクロール量に応じて画面を表示させる
const scrollDisplay = document.querySelectorAll('.js_scroll_display');

document.addEventListener('scroll', () => {
  scrollDisplay.forEach((element, index) => {
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

window.addEventListener('scroll', function () {

  let scroll = window.pageYOffset;

  // スクロール量500以上の背景色
  if (scroll > 500) {
    document.body.style.backgroundColor = "#000";
    header.style.backgroundColor = "#000";
    profile.style.color = '#fff';
    mainVisualNameSp.style.color = '#fff';
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

// スライドショー
// // if(document.getElementById('js_main_visual_image')) {
//   const mainVisualImage = document.getElementById('js_main_visual_image');
//   const slidImage = document.createElement('img');

//   mainVisualImage.appendChild(slidImage);

//   // pc用、sp用で写真サイズ分ける
//   const imgScr = ['image/img13.jpg', 'image/img11.jpg', 'image/img12.jpg'];
//   const imgScrSp = ['image/img13_sp.jpg', 'image/img11_sp.jpg', 'image/img12_sp.jpg'];

//   // window幅が450以下
//   if (window.innerWidth < 450) {
//     slidImage.setAttribute('class', 'slide_img_sp');
//     slidImage.src = 'image/img13_sp.jpg';
//     setInterval(slideTimeSp, 10000);
//   } else {
//     slidImage.setAttribute('class', 'slide_img');
//     slidImage.src = 'image/img13.jpg';
//     setInterval(slideTime, 20000);
//   }

//   // 写真のカウンター
//   let num = 0;

//   // PC用写真
//   function slideTime() {
//     if (num === imgScr.length - 1) {
//       num = 0;
//     } else {
//       num++;
//     }
//     document.querySelector('.slide_img').src = imgScr[num];
//   }

//   // SP用写真
//   function slideTimeSp() {
//     if (num === imgScrSp.length - 1) {
//       num = 0;
//     } else {
//       num++;
//     }
//     document.querySelector('.slide_img_sp').src = imgScrSp[num];
//   }
// // }

// --------------------------------------------------------------------------


// スクロールさせない動作
// const jsNavSp = document.getElementById('js_nav_sp')
// console.log(jsNavSp)

// function disableScroll(event) {
//   event.preventDefault();
// }

// イベントと関数を紐付け
// jsNavSp.addEventListener('touchmove', disableScroll, { passive: false });

/* spメニュー開いた時にスクロールさせない */

//   let scrollPosition = 0
//   // 端末の種類を取得
//   const agent = window.navigator.userAgent.toLowerCase(),
//     // iOSかどうか
//     isiOS = agent.indexOf('iphone') > -1 || agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document,
//     html = document.querySelector('html'),
//     body = document.querySelector('body')

//     // メニューが閉じてるかどうか（contains クラスがあるかどうか）!:ない時（メニューが閉じている時）
//   if (!document.querySelector('.nav_sp').classList.contains('open')) {
//     if (isiOS) {
//       // それぞれの指定をなくす（消す）
//       body.style.position = ''
//       body.style.top = ''
//       // 元々のスクロールに戻す
//       // window.scrollTo(0, scrollPosition)
//       // html.style.scrollBehavior = 'smooth'
//     } else {
//       html.style.overflowY = 'visible'
//       body.style.overflowY = 'visible'
//     }

//     // メニューが開いている状態
//   } else {
//     if (isiOS) {
//         // 現在のスクロール量の保存
//         scrollPosition = window.scrollY
//         body.style.position = 'fixed'
//         body.style.top = '-' + scrollPosition + 'px'

//       // iOSでなければ
//     } else {
//       html.style.overflowY = 'hidden'
//       body.style.overflowY = 'hidden'
//     }
//   }
// });

// --------------------------------------------------------------------------

