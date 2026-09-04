/* =========================================
   PORTFOLIO 2 JAVASCRIPT
   Mobile Navigation + Light/Dark Theme
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");
    const themeToggle = document.querySelector(".theme-toggle");
    const themeIcon = document.querySelector(".theme-icon");

    /* =====================================
       MOBILE NAVIGATION
       ===================================== */

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("open");

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

        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuToggle.focus();
            }

        });

    }

    /* =====================================
       LIGHT / DARK MODE
       ===================================== */

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    const systemDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    const initialTheme =
        savedTheme ||
        (systemDark ? "dark" : "light");

    setTheme(initialTheme);

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.documentElement
                    .getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            setTheme(newTheme);

        });

    }

    function setTheme(theme) {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(
            "portfolio-theme",
            theme
        );

        if (themeToggle) {

            const isDark =
                theme === "dark";

            themeToggle.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            if (themeIcon) {
                themeIcon.textContent =
                    isDark ? "☀" : "☾";
            }

        }

    }

});
