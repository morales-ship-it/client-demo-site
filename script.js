// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const navbar = document.getElementById("navbar");

mobileNavToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Animate elements on scroll
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (el) => { el.classList.add("visible"); };
const hideScrollElement = (el) => { el.classList.remove("visible"); };

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) { displayScrollElement(el); }
    else { hideScrollElement(el); }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();

// Floating Order / Get Started Button Animation
const orderBtn = document.getElementById("orderBtn");
if (orderBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      orderBtn.style.opacity = "1";
      orderBtn.style.transform = "translateY(0)";
    } else {
      orderBtn.style.opacity = "0";
      orderBtn.style.transform = "translateY(20px)";
    }
  });
}

// Highlight active nav link (for page reload)
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) link.classList.add("active");
});

// Page fade-in on load
window.addEventListener("load", () => { document.body.classList.add("loaded"); });

// Smooth page transition on link click
document.querySelectorAll("a.nav-link, .btn, .order-btn").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
      e.preventDefault();
      document.body.classList.remove("loaded");
      setTimeout(() => { window.location.href = href; }, 150);
    }
  });
});
