
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
const photos = [
    "smita1.jpg",
    "smita2.jpg",
    "smita3.jpg",
    "smita4.jpg",
    "smita5.jpg"
];
const captions = [
    "It all started with a smile I couldn't forget. ❤️",
    "Some people become special without even trying. 🌸",
    "Every picture of yours makes my day brighter. ✨",
    "You became my favorite thought. 💖",
    "And now... there's something I want to ask you. ❤️"
];

let currentPhoto = 0;

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto < photos.length){

        document.getElementById("photo").src = photos[currentPhoto];

        document.getElementById("caption").innerHTML = captions[currentPhoto];
}else{
document.getElementById("gallery").style.display = "none";
document.getElementById("proposalScene").style.display = "flex";
    

}

}   // <-- Ye nextPhoto() ko close karega

// YES Button
window.addEventListener("load", function(){

 document.getElementById("yesBtn").onclick = function(){

    document.getElementById("proposalScene").style.display = "none";

    document.getElementById("oneMoreScene").style.display = "flex";

};   
    

});

// NO Button Bhaagega (Mobile + PC)

const noBtn = document.getElementById("noBtn");

function moveNoButton(){

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
function startHeartRain(){

    const container = document.getElementById("heartRain");

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "absolute";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (20 + Math.random()*30) + "px";

        heart.style.animation = "fall 5s linear forwards";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },250);

        }
// ---------------- REEL SCENE ----------------

function showReel(){

    // One More Scene hide
    document.getElementById("oneMoreScene").style.display = "none";

    // Reel Scene show
    document.getElementById("reelScene").style.display = "flex";

    // Video play
    const video = document.getElementById("loveReel");

    video.play();

    // Video khatam hone par Final Scene
    video.onended = function(){

        document.getElementById("reelScene").style.display = "none";

        document.getElementById("finalScene").style.display = "flex";

        startHeartRain();
startConfetti();
    };

}
function startConfetti(){

    const container = document.getElementById("confetti");

    const colors = [
        "#ff4d88",
        "#ff99cc",
        "#ffd700",
        "#ffffff",
        "#ff6699"
    ];

    setInterval(()=>{

        const dot = document.createElement("div");

        dot.className = "confetti";

        dot.style.left = Math.random()*100 + "vw";

        dot.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        dot.style.width = (6 + Math.random()*8) + "px";

        dot.style.height = dot.style.width;

        container.appendChild(dot);

        setTimeout(()=>{

            dot.remove();

        },4000);

    },120);

}
