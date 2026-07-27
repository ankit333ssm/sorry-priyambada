const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const thanks = document.getElementById("thanks");

let count = 0;

// =========================
// NO BUTTON EFFECT
// =========================

function moveButtons(){

    count++;

    // No button chhota hota jayega
    let noScale = Math.max(1 - (count * 0.06),0.15);
    noBtn.style.transform = `scale(${noScale})`;

    // Yes button bada hota jayega
    let yesScale = 1 + (count * 0.08);

    // Random position for YES
    let yesX = Math.random() * (window.innerWidth - 220);
    let yesY = Math.random() * (window.innerHeight - 120);

    yesBtn.style.position = "fixed";
    yesBtn.style.left = yesX + "px";
    yesBtn.style.top = yesY + "px";
    yesBtn.style.transform = `scale(${yesScale})`;

    // Random position for NO
    let noX = Math.random() * (window.innerWidth - 150);
    let noY = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = noX + "px";
    noBtn.style.top = noY + "px";

    // Funny Text

    if(count==3){
        noBtn.innerHTML="🥺 Pakka No?";
    }

    if(count==6){
        noBtn.innerHTML="😢 Soch Lo...";
    }

    if(count==9){
        noBtn.innerHTML="❤️ Please...";
    }

    if(count==12){
        noBtn.innerHTML="😭 Ek Baar Aur Soch Lo";
    }

    // 15th Time

    if(count>=15){

        noBtn.style.display="none";

        yesBtn.style.position="fixed";
        yesBtn.style.left="50%";
        yesBtn.style.top="50%";
        yesBtn.style.transform="translate(-50%,-50%) scale(2.2)";

        yesBtn.innerHTML="❤️ Bas Yehi Dabao ❤️";

    }

}

noBtn.addEventListener("mouseenter",moveButtons);

noBtn.addEventListener("touchstart",function(e){

    e.preventDefault();

    moveButtons();

});

// =========================
// YES BUTTON
// =========================

yesBtn.addEventListener("click",()=>{

    document.querySelector(".card").style.display="none";

    thanks.style.display="flex";

    createHearts();

    createFlowers();

});

// =========================
// HEARTS
// =========================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },250);

}

// =========================
// FLOWERS
// =========================

const flowers=["🌹","🌸","🌺","🌷","💮"];

function createFlowers(){

    setInterval(()=>{

        const flower=document.createElement("div");

        flower.className="flower";

        flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

        flower.style.left=Math.random()*100+"vw";

        flower.style.fontSize=(20+Math.random()*20)+"px";

        flower.style.animationDuration=(5+Math.random()*3)+"s";

        document.body.appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },8000);

    },350);

}

// =========================
// TYPEWRITER
// =========================

window.onload=function(){

    const typing=document.getElementById("typing");

    const text=typing.innerHTML;

    typing.innerHTML="";

    let i=0;

    function type(){

        if(i<text.length){

            typing.innerHTML=text.substring(0,i);

            i++;

            setTimeout(type,15);

        }

    }

    type();

};
