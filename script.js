const birthday =
new Date("June 21, 2026 00:00:00").getTime();

const countdown =
document.getElementById("countdown");

const cakeSection =
document.getElementById("cakeSection");

let timer = setInterval(() => {

    let now = new Date().getTime();

    let gap = birthday - now;

    let h =
    Math.floor((gap%(1000*60*60*24))/(1000*60*60));

    let m =
    Math.floor((gap%(1000*60*60))/(1000*60));

    let s =
    Math.floor((gap%(1000*60))/1000);

    countdown.innerHTML =
    `⏳ ${h}h ${m}m ${s}s`;

    if(gap <= 0){

        clearInterval(timer);

        countdown.innerHTML =
        "🎉 It's Your Birthday 🎉";

        cakeSection.classList.remove("hidden");
    }

},1000);

document
.getElementById("blowBtn")
.addEventListener("click",()=>{

    document
    .getElementById("flame")
    .style.display="none";

    setTimeout(()=>{

        window.location.href =
        "birthday.html";

    },1500);

});
