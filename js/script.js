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

////////////////////////////////////////////////////////////
//Implementing smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    //Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
