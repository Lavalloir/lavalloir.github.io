// JavaScript pour afficher/cacher le menu en mode mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

$(function () {
  $(".gallery img").click(function () {
    // console.log($(this)[0].src);
    $("#modal-div img")[0].src = $(this)[0].src;
    $("#modal-div").modal();
  });
});
