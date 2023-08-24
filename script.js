let burger = document.querySelector(".burger");
let closeNav = document.querySelector(".closeNav");
let nav = document.querySelector('nav')
let backBody = document.querySelector('body');
let shadow = document.querySelector(".shadowBlueBlock");
let zapic = document.querySelectorAll("button.title__zapic");

console.log(zapic);
document.addEventListener('clicl',function(evt){
  if(evt.target.dataSet.type==zapic){
    alert("sss");
  }
});

burger.addEventListener("click", function () {
  backBody.classList.add("backgroundBody");
  nav.classList.add("openNav");
  shadow.classList.add("displBlock");
});
closeNav.addEventListener('click',function(){
  nav.classList.remove("openNav");
  backBody.classList.remove("backgroundBody");
  shadow.classList.remove("displBlock");
});