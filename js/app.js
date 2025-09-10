// Language Switcher
document.getElementById("language-dropdown")?.addEventListener("change", function () {
  const selectedLang = this.value;
  alert(`Language switched to: ${selectedLang}`);
  // Burada dilə uyğun kontent dəyişimi JS və ya backend ilə qurula bilər
});

// Scroll Animasiya — IntersectionObserver
const animatedElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach((el) => observer.observe(el));
