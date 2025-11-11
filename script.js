// ===========================
// 🌍 Nyelvváltás modul
// ===========================
const huBtn = document.getElementById("lang-hu");
const enBtn = document.getElementById("lang-en");
const submitBtn = document.getElementById("submitBtn");

const langElements = {
  hu: document.querySelectorAll('[data-lang="hu"]'),
  en: document.querySelectorAll('[data-lang="en"]')
};

function setLanguage(lang) {
  Object.keys(langElements).forEach(l => {
    langElements[l].forEach(el => el.style.display = l === lang ? "" : "none");
  });

  huBtn.classList.toggle("active", lang === "hu");
  enBtn.classList.toggle("active", lang === "en");

  submitBtn.textContent = lang === "hu" ? "Küldés" : "Send";

  document.body.classList.remove("lang-hu", "lang-en");
  document.body.classList.add(`lang-${lang}`);
}

huBtn.addEventListener("click", () => setLanguage("hu"));
enBtn.addEventListener("click", () => setLanguage("en"));
window.addEventListener("DOMContentLoaded", () => setLanguage("hu"));

// ===========================
// 🎨 Modal modul
// ===========================
const modal = document.getElementById("hobbyModal");
["openGalleryHU", "openGalleryEN"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", () => modal.style.display = "flex");
});
document.querySelector(".closeModal").addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// ===========================
// 🔐 CAPTCHA modul
// ===========================
const captchaTextEl = document.getElementById("captchaText");
const captchaInputs = { hu: document.getElementById("captchaHU"), en: document.getElementById("captchaEN") };

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  captchaTextEl.textContent = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}
generateCaptcha();

// ===========================
// ✅ Popup modul
// ===========================
function showPopup(msg) {
  const existing = document.getElementById("successPopup");
  if (existing) existing.remove();

  const popup = document.createElement("div");
  popup.id = "successPopup";
  popup.textContent = msg;
  Object.assign(popup.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#4caf50",
    color: "#fff",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    fontWeight: "600",
    zIndex: "9999",
    opacity: "0",
    transition: "opacity 0.4s, transform 0.4s",
    transform: "translateY(20px)"
  });
  document.body.appendChild(popup);

  setTimeout(() => { popup.style.opacity = "1"; popup.style.transform = "translateY(0)"; }, 50);
  setTimeout(() => { popup.style.opacity = "0"; popup.style.transform = "translateY(20px)"; setTimeout(() => popup.remove(), 400); }, 3000);
}

// ===========================
// 📝 Form modul
// ===========================
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const lang = document.body.classList.contains("lang-hu") ? "hu" : "en";

  const entered = captchaInputs[lang].value.trim();
  const expected = captchaTextEl.textContent.trim();

  if (entered !== expected) {
    formMsg.style.color = "red";
    formMsg.textContent = lang === "hu" ? "Hibás kód! Próbáld újra." : "Incorrect code! Try again.";
    captchaInputs[lang].value = "";
    generateCaptcha();
    return;
  }

  const now = new Date().toLocaleString();
  const msg = lang === "hu"
    ? `Üzenet sikeresen elküldve! 🎉 Időpont: ${now}`
    : `Message sent successfully! 🎉 Time: ${now}`;

  formMsg.style.color = "lightgreen";
  formMsg.textContent = msg;
  showPopup(msg);

  form.reset();
  generateCaptcha();
});
