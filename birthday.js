// Scroll Message

setTimeout(() => {

    document
    .getElementById("scrollMessage")
    .classList.add("show-message");

},3000);


// Fade In Cards

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

document
.querySelectorAll(".fade-in")
.forEach(card=>{

    observer.observe(card);

});


// Birthday Confetti Popper Effect

function popConfetti(){

    const colors = [
        "#ff4d6d",
        "#ffd60a",
        "#06d6a0",
        "#4cc9f0",
        "#ffffff",
        "#ff99c8"
    ];

    for(let i=0;i<150;i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.top =
        (-20 - Math.random()*200) + "px";

        confetti.style.background =
        colors[Math.floor(
            Math.random()*colors.length
        )];

        confetti.style.animationDuration =
        (2 + Math.random()*3) + "s";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);
    }
}


// Poppers on Page Load

window.addEventListener("load",()=>{

    popConfetti();

    setTimeout(popConfetti,1000);

    setTimeout(popConfetti,2000);

});