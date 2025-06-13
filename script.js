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

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
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
  if (planetBg) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      planetBg.style.transform = `translateY(${offset * 0.3}px)`;
    });
  }
});

function scrollServices(direction) {
  const container = document.querySelector('.service-card-container');
  const scrollAmount = 320;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("service-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-button");

  const services = [
    {
      title: "Insurance",
      description: "Underwriting risk assessment- Claims validation and verification- Natural disaster exposure analysis (flood, cyclone, wildfire)- Property condition monitoring"
    },
    {
      title: "Agriculture",
      description: "Crop health monitoring (NDVI, chlorophyll analysis)- Yield estimation and forecasting- Early detection of crop stress, pests, or diseases- Soil moisture and nutrient mapping"
    },  
    {
      title: "Banking and Finance",
      description: "Agricultural loan risk scoring- Collateral monitoring for farm and land-backed loans- ESG compliance monitoring- Environmental risk assessments for lending portfolios"
    },
    {
      title: "Maritime",
      description: "Port infrastructure monitoring- Marine pollution detection (oil spills, algal blooms)- Coastal erosion and shoreline change monitoring- Vessel activity tracking"
    },
    {
      title: "Mining",
      description: "Mineral exploration mapping- Mine site change detection- Tailings dam monitoring and compliance- Environmental impact assessment"
    },
    {
      title: "Environmental Monitoring",
      description: "Deforestation and land use change analysis- Wetland and watershed health assessment- Carbon stock estimation- Biodiversity and habitat monitoring"
    },
    {
      title: "Government and Public Sector",
      description: "Disaster preparedness and response- Urban development planning- Food security monitoring- National scale environmental reporting"
    },
    // Add more services here in same format
  ];

  document.querySelectorAll(".service-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = services[index].title;
      modalDescription.textContent = services[index].description;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});