const btn=document.getElementById("button");

function changeRandomNumber(){
    document.body.innerText=Math.random()*101;
}
btn.addEventListener("click",changeRandomNumber);

