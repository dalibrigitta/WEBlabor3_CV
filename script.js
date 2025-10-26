// Nyelvváltás logika
const huBtn = document.getElementById("lang-hu");
const enBtn = document.getElementById("lang-en");

const huElements = document.querySelectorAll('[data-lang="hu"]');
const enElements = document.querySelectorAll('[data-lang="en"]');

huBtn.addEventListener("click", () => {
  huBtn.classList.add("active");
  enBtn.classList.remove("active");
  huElements.forEach(el => el.style.display = "");
  enElements.forEach(el => el.style.display = "none");
});

enBtn.addEventListener("click", () => {
  enBtn.classList.add("active");
  huBtn.classList.remove("active");
  huElements.forEach(el => el.style.display = "none");
  enElements.forEach(el => el.style.display = "");
});

// Modal nyitás/zárás
const modal = document.getElementById("hobbyModal");
const openBtns = document.querySelectorAll("#openGallery");
const closeBtn = document.querySelector(".closeModal");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal) modal.style.display = "none";
});
