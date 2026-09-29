/* =========================================================
   PERSONAL CV / PORTFOLIO TEMPLATE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initMobileNavigation();
    initContactForm();
});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function initMobileNavigation() {
    const menuToggle = document.querySelector(
        ".site-header__menu-toggle"
    );

    const navigation = document.querySelector(".site-nav");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.classList.toggle("is-active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );
    });


    /* Close menu after selecting a page */

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuToggle.classList.remove("is-active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        });
    });


    /* Close menu if the browser becomes desktop-sized */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 749) {
            navigation.classList.remove("is-open");
            menuToggle.classList.remove("is-active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        }
    });
}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function initContactForm() {
    const form = document.querySelector("#contact-form");
    const message = document.querySelector("#form-message");

    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form
            .querySelector("#name")
            ?.value
            .trim();

        const email = form
            .querySelector("#email")
            ?.value
            .trim();

        const subject = form
            .querySelector("#subject")
            ?.value
            .trim();

        const messageText = form
            .querySelector("#message")
            ?.value
            .trim();


        /* Basic validation */

        if (!name || !email || !subject || !messageText) {
            showFormMessage(
                "Please complete all fields.",
                "error"
            );

            return;
        }


        /* Basic email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        /*
         * This is a frontend-only demo form.
         *
         * To make it actually send messages, connect it
         * to a backend or form service such as:
         *
         * - Formspree
         * - Netlify Forms
         * - EmailJS
         * - Your own backend/API
         */

        showFormMessage(
            `Thanks, ${name}. Your message has been received.`,
            "success"
        );

        form.reset();
    });


    function showFormMessage(text, type) {
        message.textContent = text;

        message.classList.remove(
            "is-success",
            "is-error"
        );

        message.classList.add(
            type === "success"
                ? "is-success"
                : "is-error"
        );

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
}
