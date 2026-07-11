window.onload = function () {

    const welcome = document.getElementById("welcome");
    const scene2 = document.getElementById("scene2");

    setTimeout(() => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";
        scene2.style.display = "flex";

    }, 1500);

}, 3000);
};        
