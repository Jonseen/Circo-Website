let menu = document.querySelector("#menu");

const dropmenu = menu.addEventListener("click", function(){
   let release = document.querySelector(".navbar");
   
   release.classList.toggle("drop");
})

// menu change to x