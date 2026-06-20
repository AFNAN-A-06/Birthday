// Typing Animation

const text =
"Every moment with you is special. Today we celebrate the most beautiful person in my life ❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,50);
    }

}

typeWriter();


// Floating Hearts

for(let i=0;i<30;i++){

    let heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";

    document.getElementById("hearts")
    .appendChild(heart);

}


// Countdown

const birthday =
new Date("June 21, 2026 00:00:00").getTime();

setInterval(()=>{

    let now = new Date().getTime();

    let gap = birthday - now;

    let h =
    Math.floor((gap%(1000*60*60*24))/(1000*60*60));

    let m =
    Math.floor((gap%(1000*60*60))/(1000*60));

    let s =
    Math.floor((gap%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    `⏳ ${h}h ${m}m ${s}s`;

},1000);