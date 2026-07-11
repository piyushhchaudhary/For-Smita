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
    const letter = document.getElementById("letter");

    envelope.classList.add("open");

    setTimeout(function(){

    envelope.style.display = "none";
    letter.style.display = "block";

    typeLetter();

},800);
