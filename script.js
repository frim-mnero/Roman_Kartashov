let burger = document.querySelector(".burger");
let closeNav = document.querySelector(".closeNav");
let nav = document.querySelector("nav");
let backBody = document.querySelector("body");
let shadow = document.querySelector(".shadowBlueBlock");
let formZapic = document.querySelector(".contBlockCons");
let closeForm = document.querySelector(".closeWindow");


burger.addEventListener("click", function () {
  backBody.classList.add("backgroundBody");
  nav.classList.add("openNav");
  backBody.classList.add("hiddenOver");
});
closeNav.addEventListener("click", function () {
  nav.classList.remove("openNav");
  backBody.classList.remove("backgroundBody");
 backBody.classList.remove("hiddenOver");
  });

  function hello() {
   formZapic.classList.add("openFormZapics");
   shadow.classList.add("displBlock");
   backBody.classList.add("hiddenOver");
  }
  function buy(){
    formZapic.classList.remove("openFormZapics");
    shadow.classList.remove("displBlock");
     backBody.classList.remove("hiddenOver");
    
  }
