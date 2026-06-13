// =====================
// GLOBAL AYARLAR
// =====================
let musicStarted = false;
let noClickCount = 0;

// =====================
// MÜZİK 1:24 BAŞLAT
// =====================
function startMusic() {
    const audio = document.getElementById("bgMusic");

    if (!musicStarted) {
        audio.currentTime = 84; // 1:24 = 84 saniye
        audio.play();
        musicStarted = true;
    }
}

// =====================
// EVET / HAYIR KONTROLÜ
// =====================
function yesClicked() {
    startMusic();
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

function noClicked() {
    noClickCount++;

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    // Hayır butonu kaçsın
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";

    // Evet butonu büyüsün
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.1})`;

    // 5. tıklamada zorla kabul
    if (noClickCount >= 5) {
        yesClicked();
    }
}

// =====================
// GÜL YAĞDIRMA
// =====================
function createRose() {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.classList.add("rose");

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 5000);
}

setInterval(createRose, 400);

// =====================
// 36 FOTO KALP DİZİM
// =====================
function loadHeartPhotos() {
    const container = document.getElementById("heartContainer");
    const total = 36;

    for (let i = 1; i <= total; i++) {
        const img = document.createElement("img");
        img.src = `photos/${i}.jpg`;
        img.classList.add("heart-photo");
        container.appendChild(img);
    }
}

// =====================
// GERİ SAYIM
// =====================
function startCountdown(targetDate) {
    const countdownEl = document.getElementById("countdown");

    setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML =
            `${days}g ${hours}s ${minutes}d ${seconds}sn`;

        if (distance < 0) {
            countdownEl.innerHTML = "Gün geldi ❤️";
        }
    }, 1000);
}

// =====================
// SÜRPRİZ BUTONU
// =====================
function surprise() {
    alert("Seni çok seviyorum ❤️ Bu gün sadece senin için hazırlandı!");
    startMusic();
    document.body.style.background = "#ffe6f0";
}

// =====================
// "GELMEM" ENGELLEME
// =====================
window.onbeforeunload = function () {
    return "Emin misin? Bu sayfa seni bekleyen bir sürpriz içeriyor ❤️";
};

// =====================
// BAŞLAT
// =====================
window.onload = function () {
    loadHeartPhotos();
    startCountdown("2026-06-20T00:00:00");
};