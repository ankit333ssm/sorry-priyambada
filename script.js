// =========================
// NO BUTTON BHAGEGA 😄
// =========================

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Mobile touch support
noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = (Math.random() * maxX) + "px";
    noBtn.style.top = (Math.random() * maxY) + "px";

});

// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click", () => {

    document.querySelector(".card").style.display = "none";

    const thanks = document.getElementById("thanks");

    thanks.style.display = "flex";

    createHearts();

    createFlowers();

});

// =========================
// HEARTS
// =========================

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animationDuration=(3+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },250);

}

// =========================
// FLOWERS
// =========================

const flowers=["🌸","🌺","🌹","💮","🌷"];

function createFlowers(){

    setInterval(()=>{

        const flower=document.createElement("div");

        flower.className="flower";

        flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

        flower.style.left=Math.random()*100+"vw";

        flower.style.fontSize=(20+Math.random()*25)+"px";

        flower.style.animationDuration=(5+Math.random()*5)+"s";

        document.body.appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },10000);

    },400);

}

// =========================
// TYPEWRITER EFFECT
// =========================

window.addEventListener("load",()=>{

    const typing=document.getElementById("typing");

    const html=typing.innerHTML;

    typing.innerHTML="";

    let i=0;

    const speed=15;

    function type(){

        if(i<html.length){

            typing.innerHTML=html.substring(0,i);

            i++;

            setTimeout(type,speed);

        }

    }

    type();

});
