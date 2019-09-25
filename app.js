const fullsnow = document.getElementById("fullsnow");
const backsnow = document.getElementById("backsnow");
const nosnow = document.getElementById("nosnow");

const allBackgrounds = document.getElementsByClassName("projectbackground");



function snow() {

    fullsnow.addEventListener("click", function () {
        document.querySelector("body").style.backgroundSize = "unset";
        for (var i = 0; i < allBackgrounds.length; i++) {
            allBackgrounds[i].style.zIndex = "-1";
        };

    });

    backsnow.addEventListener("click", function () {
        document.querySelector("body").style.backgroundSize = "unset";
        for (var i = 0; i < allBackgrounds.length; i++) {
            allBackgrounds[i].style.zIndex = "0";
        };

    });
    nosnow.addEventListener("click", function () {
        document.querySelector("body").style.backgroundSize = "0";
    });
}

snow();
