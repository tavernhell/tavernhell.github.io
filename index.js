const carouselElements = document.querySelectorAll(".carousel-item");
for (const elem of carouselElements) {
  elem.className += " bg-dark text-white vh-100 ";
  elem.style.backgroundImage = "url('background.jpg')"
}
const linkElements = document.querySelectorAll("a.btn");
for (const elem of linkElements) {
  elem.setAttribute("rel", "noopener noreferrer");
  elem.setAttribute("target", "_blank");
}