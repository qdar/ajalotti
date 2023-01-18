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
  }, 900);
});

elem.addEventListener("mouseout", function() {
  elem.classList.remove("header--label");
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
