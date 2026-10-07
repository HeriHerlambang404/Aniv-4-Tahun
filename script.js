/* =========================
   START BUTTON
========================= */

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

    playMusic();

});


/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

function playMusic() {

    music.play()
        .then(() => {
            playing = true;
            musicBtn.innerHTML = "♫";
        })
        .catch(() => {
            console.log("Music membutuhkan interaksi user.");
        });

}

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "🔇";

    } else {

        playMusic();

    }

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

/*
    GANTI TANGGAL DI BAWAH
    dengan tanggal kalian mulai bersama.
*/

const startDate = new Date("2024-02-14T00:00:00");


function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        difference / (1000 * 60 * 60)
    ) % 24;

    const minutes = Math.floor(
        difference / (1000 * 60)
    ) % 60;

    const seconds = Math.floor(
        difference / 1000
    ) % 60;


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}


setInterval(updateCounter, 1000);

updateCounter();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");


function revealOnScroll() {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   SURPRISE MODAL
========================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const modal =
    document.getElementById("modal");

const closeBtn =
    document.getElementById("closeBtn");


surpriseBtn.addEventListener("click", () => {

    modal.classList.add("active");

});


closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});