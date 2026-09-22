const showButton = document.getElementById("showButton");

const term = document.getElementById("term");

const toast = document.getElementById("toast");

const detailsCheckbox =
    document.getElementById("detailsCheckbox");


// ================= SHOW BUTTON =================

showButton.addEventListener("click", function () {

    toast.textContent =
        "Showing " + term.value;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 1800);

});


// ================= SIDEBAR =================

const links =
    document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {

            item.classList.remove("selected");

        });

        link.classList.add("selected");

    });

});


// ================= PORTAL GUIDELINE =================

const guideline =
    document.querySelector(".guideline");

guideline.addEventListener("click", function () {

    toast.textContent =
        "Portal Guideline";

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 1800);

});


// ================= DETAILS =================

detailsCheckbox.addEventListener(
    "change",
    function () {

        const cells =
            document.querySelectorAll(
                ".schedule tbody td"
            );

        cells.forEach(function (cell) {

            if (detailsCheckbox.checked) {

                cell.style.backgroundColor =
                    "#f8fcff";

            } else {

                cell.style.backgroundColor =
                    "white";

            }

        });

    }
);