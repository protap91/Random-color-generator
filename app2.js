let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let h2=document.querySelector("h2");
    let getrandomColor=randomColor();
    h2.innerText=getrandomColor;
    let div=document.querySelector("div");
    div.style.backgroundColor=getrandomColor;
    console.log('color upadated');
});
function randomColor(){
   let red=Math.floor(Math.random()*255);
   let green=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255);
   
   color=`rgb(${red},${green},${blue})`;
   return color;
}