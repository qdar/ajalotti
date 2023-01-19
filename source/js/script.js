let menu    = document.querySelector('.burger');
let burger  = document.querySelectorAll('.js-burger');
let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("burger--open");
  }
};

let acc = document.getElementsByClassName("tab__button");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("tab__button--open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


if (window.innerWidth <= 767) {
  let swiper = new Swiper(".slider-banner", {
    // autoplay: true,
    slidesPerView: 1,
    spaceBetween: 36,
    speed: 500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}

if (window.innerWidth < 1025) {
  let swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 36,
    speed: 500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}

function advantage() {
  let swiper = new Swiper(".advantage__slider", {
    // direction: 'vertical',
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 36,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}
advantage();


let swiper = new Swiper(".image-slider", {
  loop: true,
  speed: 300,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 36,
    },
  }
});



function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;

  if (cookie.length > 0) {
    offset = cookie.indexOf(search);

    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset)

      if (end == -1) {
        end = cookie.length;
      }

      setStr = unescape(cookie.substring(offset, end));
    }
  }

  return(setStr);
}


let elem = document.querySelector('header');

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    elem.classList.add("header--label");
  }, 700);
});

document.addEventListener("scroll", () => {
  setTimeout(() => {
    elem.classList.remove("header--label");
  }, 300);
  document.cookie = "isee=agree; max-age=172800";
});

if(getCookie('isee') === 'agree') {
  elem.classList.remove("header--label");
}

if (document.cookie.indexOf("agree") == 0) {
  console.log('Куки есть');

} else {
  console.log('Куки нет');
}
