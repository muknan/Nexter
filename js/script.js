const likeEl = document.querySelectorAll(".home__like");
const sidebarEl = document.querySelector(".sidebar");

likeEl.forEach((like) => {
  like.addEventListener("click", function () {
    console.log("hello");
    like.classList.toggle("like-toggle"), false;
  });
});

const btnNavEl = document.querySelector(".nav-cb");

function uncheckBox() {
  if (btnNavEl.checked) {
    btnNavEl.checked = false;
  }
}

const navEl = document.querySelectorAll(".nav__items");
navEl.forEach(function (item) {
  item.addEventListener("click", function () {
    uncheckBox();
  });
});

const bodyEl = document.querySelector("body");

bodyEl.addEventListener(
  "click",
  function () {
    uncheckBox();
  },
  false
);

sidebarEl.addEventListener(
  "click",
  function (ev) {
    ev.stopPropagation();
  },
  false
);
