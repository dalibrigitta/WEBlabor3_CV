
const huBtn = document.getElementById("lang-hu");
const enBtn = document.getElementById("lang-en");

function switchLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
  });
}

huBtn.addEventListener("click", ()=>{
  switchLang("hu");
  huBtn.classList.add("active");
  enBtn.classList.remove("active");
});

enBtn.addEventListener("click", ()=>{
  switchLang("en");
  huBtn.classList.remove("active");
  enBtn.classList.add("active");
});

// Kapcsolat űrlap
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");
form.addEventListener("submit", e=>{
  e.preventDefault();
  msg.textContent = huBtn.classList.contains("active") ? "Köszönöm! Az üzenet elküldve." : "Thank you! Message sent.";
  form.reset();
});
