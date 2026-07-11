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

function openEnvelope() {

    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.classList.add("open");

    setTimeout(() => {

        envelope.style.display = "none";
        letter.style.display = "block";

    }, 800);

}
