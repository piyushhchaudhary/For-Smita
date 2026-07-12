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
typeLetter();
    }, 800);

}
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

function typeLetter() {

    const text = document.getElementById("letterText");

    text.innerHTML = "";

    index = 0;

    const typing = setInterval(() => {

        text.innerHTML += message.charAt(index) === "\n"
    ? "<br>"
    : message.charAt(index); 
        index++;

        if (index >= message.length) {
            clearInterval(typing);
            setTimeout(() => {

    document.getElementById("letter").style.display = "none";

    document.getElementById("gallery").style.display = "flex";

}, 2000);
        }

    }, 40);

}
