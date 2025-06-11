let usernameRevealed = false;

// Create floating particles
function createFloatingParticle() {
  const particles = ["✨", "💫", "🌟", "💖", "🌸"];
  const particle = document.createElement("div");
  particle.className = "floating-particle";
  particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.fontSize = Math.random() * 10 + 15 + "px";
  particle.style.animationDuration = Math.random() * 4 + 6 + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  document.getElementById("floatingElements").appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

// Generate floating particles
setInterval(createFloatingParticle, 2000);

// Initial particles
for (let i = 0; i < 8; i++) {
  setTimeout(createFloatingParticle, i * 500);
}

// Button responses
function handleYesResponse() {
  const button = event.target;
  const originalContent = button.innerHTML;
  const instagramHandle = document.getElementById("instagramHandle");

  button.innerHTML =
    '<i class="fas fa-heart-eyes"></i> Amazing! Check Instagram! ✨';
  button.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";

  // Reveal the Instagram username
  if (!usernameRevealed) {
    setTimeout(() => {
      instagramHandle.classList.remove("hidden");
      instagramHandle.classList.add("revealed");
      instagramHandle.innerHTML = "@sadit_90";
      instagramHandle.onclick = () =>
        window.open("https://www.instagram.com/sadit_90", "_blank");
      instagramHandle.style.cursor = "pointer";
      usernameRevealed = true;
    }, 500);
  }

  // Create celebration effect
  createCelebration();

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = "var(--romantic-gradient)";
  }, 4000);
}

function handleMaybeResponse() {
  const button = event.target;
  const originalContent = button.innerHTML;

  button.innerHTML = '<i class="fas fa-heart"></i> That\'s perfectly okay 💙';

  setTimeout(() => {
    button.innerHTML = originalContent;
  }, 3000);
}

function createCelebration() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = Math.random() * window.innerHeight + "px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.zIndex = "1001";
      heart.style.pointerEvents = "none";
      heart.style.animation = "fadeInUp 2s ease-out forwards";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2000);
    }, i * 100);
  }
}

// Smooth scroll animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".premium-card").forEach((card) => {
  observer.observe(card);
});

// Cursor trail effect
document.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.05) {
    const trail = document.createElement("div");
    trail.innerHTML = "✨";
    trail.style.position = "fixed";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.fontSize = "12px";
    trail.style.pointerEvents = "none";
    trail.style.zIndex = "1000";
    trail.style.animation = "fadeInUp 1.5s ease-out forwards";
    trail.style.color = "#ff9a9e";
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 1500);
  }
});
