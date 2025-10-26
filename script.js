// 🎨 Hobbi modal megnyitás
const openGallery = document.getElementById("openGallery");
const hobbyModal = document.getElementById("hobbyModal");
const closeModal = document.querySelector(".closeModal");

openGallery.addEventListener("click", () => {
  hobbyModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  hobbyModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === hobbyModal) hobbyModal.style.display = "none";
});
