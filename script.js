// ================= AOS INITIALIZATION =================

AOS.init({
    duration: 1000,
    once: true
});


// ================= SWIPER INITIALIZATION =================

const swiper = new Swiper('.mySwiper', {

    speed: 800,

    mousewheel: true,

    keyboard: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    on: {

        slideChange: function () {

            // Skills Progress Bar Animation

            if (this.activeIndex === 3) {

                document.querySelectorAll('.progress-fill').forEach(bar => {

                    bar.style.width =
                        bar.getAttribute('data-percent');

                });

            }

        }

    }

});


// ================= NAVIGATION FUNCTION =================

function goToSlide(index) {

    swiper.slideTo(index);

}


// ================= DOM CONTENT LOADED =================

document.addEventListener("DOMContentLoaded", () => {

    // ================= TYPEWRITER EFFECT =================

    const textElement =
        document.getElementById("typewriter");


    if (textElement) {

        const phrases = [

            "Java Backend Developer",

            "WordPress Developer"

        ];

        let phraseIndex = 0;

        let charIndex = 0;

        let isDeleting = false;

        let typeSpeed = 100;


        function type() {

            const currentPhrase =
                phrases[phraseIndex];


            // Typing

            if (!isDeleting) {

                textElement.textContent =
                    currentPhrase.substring(0, charIndex + 1);

                charIndex++;

                typeSpeed = 150;

            }

            // Deleting

            else {

                textElement.textContent =
                    currentPhrase.substring(0, charIndex - 1);

                charIndex--;

                typeSpeed = 50;

            }


            // End Typing

            if (!isDeleting &&
                charIndex === currentPhrase.length) {

                isDeleting = true;

                typeSpeed = 2000;

            }

            // End Deleting

            else if (isDeleting &&
                charIndex === 0) {

                isDeleting = false;

                phraseIndex =
                    (phraseIndex + 1) % phrases.length;

                typeSpeed = 500;

            }

            setTimeout(type, typeSpeed);

        }

        type();

    }


    // ================= DARK LIGHT MODE =================

    const themeToggle =
        document.getElementById("theme-toggle");


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            // Toggle Light Mode

            document.body.classList.toggle("light-mode");


            // Change Icon

            if (document.body.classList.contains("light-mode")) {

                themeToggle.innerHTML = "☀️";

            }

            else {

                themeToggle.innerHTML = "🌙";

            }

        });

    }


    // ================= SKILLS BAR =================

    document.querySelectorAll(".progress-fill").forEach(bar => {

        bar.style.width =
            bar.getAttribute("data-percent");

    });

});