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
const message = `Dear Smita ❤️,

Warning! 😄

Agar tum ye letter padh rahi ho,
to iska matlab tum meri chhoti si surprise journey ka hissa ban chuki ho.

Ab promise karo...
Aakhri page tak bina skip kiye dekhogi. 🤭💕

Aur haan...
Beech me hasna, sharmaana aur smile karna allowed hai. 😊🌸

Ready?

Let's begin... 🦋`;

let index = 0;

function typeLetter(){

    const text = document.getElementById("letterText");

    const typing = setInterval(function(){

        text.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(typing);

        }

    },40);

}
