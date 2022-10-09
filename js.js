const targetDiv1 = document.getElementById("gallery");
const targetDiv2 = document.getElementById("photos");
const targetDiv3 = document.getElementById("web");
const gbtn = document.getElementById("gbutton");
const main = document.getElementById("main");
const close = document.getElementById("close");
const hidden = document.getElementsById("a1");
const arrow1 = document.getElementsById("arrow1");


    /*gbtn.onclick = function () {
      if (targetDiv.style.display == "none") {
        targetDiv.style.display = "grid";
        targetDiv.style.position = "absolute";
        main.style.display = "none";
        closeg.style.display="absolute";
        
      } else {
        targetDiv.style.display = "none";
      }
    };*/


    function showgallery(){
      targetDiv1.style.display="grid";
      targetDiv1.style.position = "absolute";
      main.style.display = "none";
      close.style.display = "grid";
    }
    function showphotography(){
      targetDiv2.style.display="grid";
      targetDiv2.style.position = "absolute";
      main.style.display = "none";
      close.style.display = "grid";
    }
    function showwebdesign(){
      targetDiv3.style.display="grid";
      targetDiv3.style.position = "absolute";
      main.style.display = "none";
      close.style.display = "grid";
    }

    function closegallery(){
      targetDiv1.style.display="none";
      targetDiv2.style.display="none";
      targetDiv3.style.display="none";
      close.style.display="none";
      main.style.display="block";
    }

   
/*const observer =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show')
    }
  });
});*/

function tt(){
  hidden.style.display="none";
}
    


function arr1(){
  arrow1.style.display="none"
}