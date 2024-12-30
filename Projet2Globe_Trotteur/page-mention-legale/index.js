const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const cacher = document.getElementsByClassName("blur"); // Utilisation de querySelectorAll pour obtenir tous les éléments avec l'attribut name="blur"

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Applique un flou à tous les éléments ayant la classe "blur"
  for (let element of cacher) {
    element.style.filter = navLinks.classList.contains("active")
      ? "blur(10px)"
      : "none";
  }
});
