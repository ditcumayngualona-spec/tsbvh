/* =========================================
   TSBVH WEBSITE
   JAVASCRIPT
========================================= */


/* ================= SEARCH ================= */

const searchInput =
    document.getElementById("playerSearch");

const searchButton =
    document.getElementById("searchButton");


searchButton.addEventListener(
    "click",
    function () {

        searchInput.focus();

    }
);


/* CTRL + K / CMD + K */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            searchInput.focus();

        }

    }
);


/* SEARCH */

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            const player =
                searchInput.value.trim();

            if (player === "") {

                return;

            }

            alert(
                "Đang tìm kiếm player: " +
                player
            );

        }

    }
);


/* ================= NAVBAR ================= */

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                navItems.forEach(
                    function (nav) {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );

                item.classList.add(
                    "active"
                );

            }
        );

    }
);


/* ================= DISCORD ================= */

/*
    ĐỔI LINK NÀY THÀNH SERVER DISCORD CỦA BẠN
*/

const discordLink =
    "https://discord.gg/";


const discordButton =
    document.querySelector(
        ".discord-button"
    );


discordButton.href =
    discordLink;



/* ================= THEME ================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light-mode"
        );

    }
);