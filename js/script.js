const likeEl = document.querySelectorAll(".home__like");

likeEl.forEach((like) => {
  like.addEventListener("click", function () {
    console.log("hello");
    like.classList.toggle("like-toggle"), false;
  });
});
