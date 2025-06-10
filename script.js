// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Toggle navigation on mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar nav ul");

  const navItems = document.querySelectorAll(".navbar nav ul li a");

  navItems.forEach((item) => 
  {
    item.addEventListener("click", () => 
      {
      if (navLinks.classList.contains("active")) 
        {
        navLinks.classList.remove("active");
      }
    });
  });


  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Parallax effect
  const planetBg = document.querySelector(".planet-bg");
  window.addEventListener("scroll", () => {
    const offset = window.scrollY;
    planetBg.style.transform = `translateY(${offset * 0.3}px)`;
  });
});
