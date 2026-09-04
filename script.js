/* =========================================================
   PORTFOLIO 2 JAVASCRIPT
   Mobile Navigation + Light/Dark Theme
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const primaryNavigation =
    document.getElementById("primary-navigation");


if (menuToggle && primaryNavigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            primaryNavigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    const navLinks =
        primaryNavigation.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            primaryNavigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });


    /* Close with Escape */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            primaryNavigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        }

    });

}


/* =========================================================
   LIGHT / DARK MODE
   ========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;


function applyTheme(theme) {

    document.documentElement.setAttribute(
        "data-theme",
        theme
    );


    if (themeToggle) {

        if (theme === "dark") {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }

}


/* Initial theme */

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme(
        systemPrefersDark
            ? "dark"
            : "light"
    );

}


/* Theme button */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const currentTheme =
                document.documentElement.getAttribute(
                    "data-theme"
                );

            const newTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";


            applyTheme(newTheme);

            localStorage.setItem(
                "portfolio-theme",
                newTheme
            );

        }
    );

}
