
setTimeout(() => {

    document
    .getElementById("scrollMessage")
    .classList.add("show-message");

},3000);

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

for(let i=0;i<60;i++){

    let heart =
    document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.animationDuration =
    (4 + Math.random()*6) + "s";

    document
    .getElementById("hearts")
    .appendChild(heart);

}
