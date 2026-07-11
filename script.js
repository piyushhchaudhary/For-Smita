window.onload = function () {

    const welcome = document.getElementById("welcome");

    setTimeout(function () {

        welcome.style.opacity = "0";
document.getElementById("scene2").style.display = "flex";
   welcome.style.display = "none";
    }, 3000);

};
function openEnvelope(){

    const envelope = document.getElementById("envelope");

    envelope.classList.add("open");

}
