const fullsnow = document.getElementById("fullsnow");
const backsnow = document.getElementById("backsnow");
const nosnow = document.getElementById("nosnow");

const profilebackground = document.getElementById("profilebackground");
const div1background = document.getElementById("div1background");

function snow() {
    fullsnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "unset";
        profilebackground.style.zIndex = "-1";
        div1background.style.zIndex = "-1";
    });
    backsnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "unset";
        profilebackground.style.zIndex = "0";
        div1background.style.zIndex = "0";
    });
    nosnow.addEventListener("click", function () {
        document.getElementById("body").style.backgroundSize = "0";
    });
};

snow();