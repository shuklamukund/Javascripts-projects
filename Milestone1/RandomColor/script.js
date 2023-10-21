
function randomcolor(){
 const num='0123456789ABCDEF';
let color='#';
for(let i=0;i<6;i++){
    color+=num[Math.floor(Math.random()*16)];
}
//return color;
document.body.style.backgroundColor=color;
}

