let usernameRevealed = false;
let continuousCelebration = false;
let celebrationInterval;

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

// Create continuous celebration particles
function createContinuousCelebrationParticle() {
  const celebrationIcons = [
    "💖",
    "🌸",
    "🌺",
    "🌹",
    "✨",
    "💫",
    "🌟",
    "💕",
    "💗",
    "🦋",
    "🌷",
    "🌻",
    "🎈",
    "🎀",
    "💋",
    "🍁",
    "🌿",
    "🍂",
    "💌",
  ];
  const particle = document.createElement("div");
  particle.innerHTML =
    celebrationIcons[Math.floor(Math.random() * celebrationIcons.length)];
  particle.style.position = "fixed";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";
  particle.style.fontSize = Math.random() * 15 + 20 + "px";
  particle.style.zIndex = "1001";
  particle.style.pointerEvents = "none";
  particle.style.opacity = "0.8";

  // Random horizontal movement
  const randomX = (Math.random() - 0.5) * 200;
  const animationDuration = Math.random() * 3 + 4; // 4-7 seconds

  particle.style.animation = `floatUpAndFade ${animationDuration}s ease-out forwards`;
  particle.style.setProperty("--random-x", randomX + "px");

  document.body.appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
    }
  }, animationDuration * 1000);
}

// Start continuous celebration
function startContinuousCelebration() {
  if (continuousCelebration) return; // Already running

  continuousCelebration = true;

  // Create particles at intervals
  celebrationInterval = setInterval(createContinuousCelebrationParticle, 300);
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

  // Start continuous celebration
  startContinuousCelebration();

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

//////////////////////////////////////////////////////////////////////////////////

//--------------Audio Player Script-------------------

//////////////////////////////////////////////////////////////////////////////////

let audio = document.getElementById("backgroundAudio");
let audioButton = document.getElementById("audioPlayerButton");
let audioIcon = document.getElementById("audioIcon");
let volumeSlider = document.getElementById("volumeSlider");
let volumePercentage = document.getElementById("volumePercentage");
let playPauseBtn = document.getElementById("playPauseBtn");
let loopBtn = document.getElementById("loopBtn");
let isPlaying = false;

// Set initial volume
audio.volume = 0.4;
volumeSlider.value = 40;
volumePercentage.textContent = "40%";

// Only allow play when premium-button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const premiumBtn = document.querySelector(".premium-button");

  if (premiumBtn) {
    premiumBtn.addEventListener("click", () => {
      if (!isPlaying) {
        tryToPlay();
      }
    });
  }
});

function tryToPlay() {
  audio
    .play()
    .then(() => {
      isPlaying = true;
      updateUIOnPlay();
      console.log("Audio started from premium-button click.");
    })
    .catch((error) => {
      console.warn("Failed to play audio:", error);
    });
}

function updateUIOnPlay() {
  audioIcon.className = "fas fa-pause";
  audioButton.classList.add("playing");
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function updateUIOnPause() {
  audioIcon.className = "fas fa-play";
  audioButton.classList.remove("playing");
  playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Audio control via floating button
audioButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updateUIOnPause();
  } else {
    audio.play().then(() => {
      isPlaying = true;
      updateUIOnPlay();
    });
  }
});

// Play/pause via control button
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updateUIOnPause();
  } else {
    audio.play().then(() => {
      isPlaying = true;
      updateUIOnPlay();
    });
  }
});

// Volume control
volumeSlider.addEventListener("input", (e) => {
  let volume = e.target.value / 100;
  audio.volume = volume;
  volumePercentage.textContent = `${e.target.value}%`;

  let volumeIcon = document.querySelector(".volume-icon");
  if (volume === 0) {
    volumeIcon.className = "fas fa-volume-mute volume-icon";
  } else if (volume < 0.5) {
    volumeIcon.className = "fas fa-volume-down volume-icon";
  } else {
    volumeIcon.className = "fas fa-volume-up volume-icon";
  }
});

// Loop toggle
loopBtn.addEventListener("click", () => {
  audio.loop = !audio.loop;
  loopBtn.classList.toggle("active");
  loopBtn.title = audio.loop ? "Loop enabled" : "Loop disabled";
});

// Add CSS animation for continuous celebration particles
const style = document.createElement("style");
style.textContent = `
  @keyframes floatUpAndFade {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(var(--random-x)) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
