const fullsnow = document.getElementById("fullsnow");
const backsnow = document.getElementById("backsnow");
const nosnow = document.getElementById("nosnow");

const profilebackground = document.getElementById("profilebackground");

function snow() {
    fullsnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "unset";
        profilebackground.style.zIndex = "-1";
    });
    backsnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "unset";
        profilebackground.style.zIndex = "0";
    });
    nosnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "0";
    });
};

snow();