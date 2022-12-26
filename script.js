// loading ------------------------------------------------------------

const loading = document.querySelector('.loading');

function loaded() {
  loading.classList.remove('active');
}

if(document.querySelector('.loading')) {

  if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'first');
    window.addEventListener('load', function () {
      setTimeout(loaded, 2000);
    });
    setTimeout(loaded, 5000);
  }else {
    loaded();
  }
}



// --------------------------------------------------------------------------

// slideShow ----------------------------------------------------------------
if(document.getElementById('js_main_visual_image')) {
  const mainVisualImage = document.getElementById('js_main_visual_image');
  const slidImage = document.createElement('img');
  
  mainVisualImage.appendChild(slidImage);
  
  // pc用、sp用で写真サイズ分ける
  const imgScr = ['image/img13.jpg', 'image/img11.jpg', 'image/img12.jpg'];
  const imgScrSp = ['image/img13_sp.jpg', 'image/img11_sp.jpg', 'image/img12_sp.jpg'];
  let num = 0;
  
  // window幅が450以下
  if (window.innerWidth < 450) {
    slidImage.setAttribute('class', 'slide_img_sp');
    slidImage.src = 'image/img13_sp.jpg';
    setInterval(slideTimeSp, 10000);
  } else {
    slidImage.setAttribute('class', 'slide_img');
    slidImage.src = 'image/img13.jpg';
    setInterval(slideTime, 20000);
  }
  
  // PC用写真
  function slideTime() {
    if (num === imgScr.length - 1) {
      num = 0;
    } else {
      num++;
    }
    document.querySelector('.slide_img').src = imgScr[num];
  }
  
  // SP用写真
  function slideTimeSp() {
    if (num === imgScrSp.length - 1) {
      num = 0;
    } else {
      num++;
    }
    document.querySelector('.slide_img_sp').src = imgScrSp[num];
  }
}

// --------------------------------------------------------------------------

// hamburger 🍔 ----------------------------------------------------------------


document.getElementById('js_hamburger_menu').addEventListener('click', function () {
  document.querySelector('.nav_sp').classList.toggle('open');
  document.querySelector('.menu_sp').classList.toggle('open');
});


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


/* 一文字ずつ表示 */

if(document.querySelector('.js_main_visual_name')) {

  const animationVisualName = document.querySelector('.js_main_visual_name > p');
  const visualNameText = animationVisualName.textContent,
    visualNameTextArray = [];
  
  animationVisualName.textContent = '';
  
  for (let i = 0; i < visualNameText.split('').length; i++) {
    const oneText = visualNameText.split('')[i];
    if (oneText === ' ') {
      visualNameTextArray.push(' ');
    } else {
      visualNameTextArray.push('<span style="animation-delay: ' + (i * .2) + 'S;">' + oneText + '</span>')
    }
  }

  for (let j = 0; j < visualNameTextArray.length; j++) {
    animationVisualName.innerHTML += visualNameTextArray[j]
  }
}


// --------------------------------------------------------------------------

// scrollDisplay ----------------------------------------------------------------

const scrollDisplay = document.querySelectorAll('.js_scroll_display');

document.addEventListener('scroll', () => {
  scrollDisplay.forEach((element, index) => {
    const scrollDisplayDistance = scrollDisplay[index].getBoundingClientRect().top
      + scrollDisplay[index].clientHeight * .6;
    if (window.innerHeight > scrollDisplayDistance) {
      scrollDisplay[index].classList.add('fade_in');
    }
  });
});

// --------------------------------------------------------------------------

// scrollBackgroundChange ----------------------------------------------------

const body = document.getElementById('body');
const header = document.querySelector('.header')
const profile = document.getElementById('profile');

const mainVisualNameSp = document.querySelector('.js_main_visual_name_sp');
const hamburgerBar = document.querySelectorAll('.hamburger_bar');
const navSP = document.querySelector('.nav_sp')


// if (window.innerWidth < 768) {

window.addEventListener('scroll', function () {

  let scroll = window.pageYOffset;

  if (scroll > 500) {
    document.body.style.backgroundColor = "#000";
    header.style.backgroundColor = "#000";
    profile.style.color = '#fff';
    mainVisualNameSp.style.color = '#fff';
    for (let i = 0; i < hamburgerBar.length; i++) {
      hamburgerBarLine = hamburgerBar[i]
      hamburgerBarLine.style.backgroundColor = '#fff';

    }
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
// }

// --------------------------------------------------------------------------


// innerWidthChangeNamePlace ----------------------------------------------------

if(document.querySelector('.js_change_position')) {
  const jsChangePosition = document.querySelector('.js_change_position');
  const profileNameEn = document.querySelector('.profile_name_en')
  const profileNameJa = document.querySelector('.profile_name_ja')
  
  if (window.innerWidth <= 1280) {
    jsChangePosition.insertBefore(profileNameJa, profileNameEn)
  }
}

// --------------------------------------------------------------------------


