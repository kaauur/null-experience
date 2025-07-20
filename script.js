// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Animate hero section
gsap.from(".animate-hero", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".animate-hero2", {
  duration: 1.2,
  y: 30,
  opacity: 0,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".animate-hero3", {
  duration: 1.4,
  scale: 0.8,
  opacity: 0,
  delay: 0.6,
  ease: "back.out(1.7)"
});
// Scroll-triggered animation for About cards
gsap.from(".animate-about", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  },
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.3,
  ease: "power3.out"
});
gsap.from(".animate-project", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 85%",
  },
  duration: 1,
  opacity: 0,
  y: 60,
  stagger: 0.4,
  ease: "power3.out"
});
function openFullscreen(imgSrc) {
  const overlay = document.getElementById("fullscreenOverlay");
  const fullscreenImg = document.getElementById("fullscreenImg");
  fullscreenImg.src = imgSrc;
  overlay.classList.remove("hidden");
}

function closeFullscreen() {
  document.getElementById("fullscreenOverlay").classList.add("hidden");
}
document.getElementById("fullscreenOverlay").addEventListener("click", (e) => {
  if (e.target.id === "fullscreenOverlay") {
    closeFullscreen();
  }
});
function openFullscreen(imgSrc) {
  const overlay = document.getElementById("fullscreenOverlay");
  const fullscreenImg = document.getElementById("fullscreenImg");
  fullscreenImg.src = imgSrc;
  overlay.classList.remove("hidden");
}

function closeFullscreen() {
  document.getElementById("fullscreenOverlay").classList.add("hidden");
}
document.getElementById("fullscreenOverlay").addEventListener("click", (e) => {
  if (e.target.id === "fullscreenOverlay") {
    closeFullscreen();
  }
});
// Animate Extra-Curricular Section
gsap.from(".animate-activities", {
  scrollTrigger: {
    trigger: "#activities",
    start: "top 85%",
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out"
});