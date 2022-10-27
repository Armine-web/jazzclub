function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "подробнее"; 
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "свернуть"; 
      moreText2.style.display = "inline";
    }
  }

  function myFunc() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "подробнее"; 
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "свернуть"; 
      moreText3.style.display = "inline";
    }
  }

function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "block";
    btnText1.innerHTML = "подробнее"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "свернуть"; 
    moreText1.style.display = "block";
  }
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "подробнее"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "свернуть"; 
      moreText.style.display = "inline";
    }
  };


  //menu



  function toggleText(){

    var elms = document.getElementsByClassName("figure-caption-test");
    var title = document.querySelector(".title");
    var container = document.querySelector(".container");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
            x.style.backgroundColor = "white";
            title.innerText = '╳';

            document.getElementById("disabled").style.pointerEvents = "none";
            document.getElementById("disabled1").style.pointerEvents = "none";
            document.getElementById("footer").style.pointerEvents = "none";
            
           

           
            
            
      } else {
        x.style.display = "none";
        container.style.backgroundColor ="#F5F5F5";
        title.innerText = '☰';
        document.getElementById("disabled").style.pointerEvents = "auto";
            document.getElementById("disabled1").style.pointerEvents = "auto";
            document.getElementById("footer").style.pointerEvents = "auto";
      }
    })
  }

  function toggleText1(){
    var disabled3 =document.querySelector(".disabled3"); 
    var elms = document.getElementsByClassName("figure-caption-test");
    var title = document.querySelector(".title");
    var container = document.querySelector(".container");
    var eventsJazzContainer = document.querySelector(".eventsJazzContainer")
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        
        container.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
       document.querySelector(".containerMain").style.backgroundColor = "rgba(0, 0, 0, 0.01)";
            x.style.backgroundColor = "white";
            title.innerText = '╳';

            disabled3.className = "mystyle";
            document.querySelector(".disabled4").className = "mystyle";
            document.querySelector(".disabled6").className = "mystyle";
            document.querySelector(".disabled5").className = "mystyle";
            document.querySelector(".disabled7").className = "mystyle";
            document.querySelector(".mapContainer").className = "mystyle";
           
            
      } else {
        x.style.display = "none"; 
        container.style.backgroundColor ="#F5F5F5";
        document.querySelector(".containerMain ").style.backgroundColor ="#F5F5F5";
        title.innerText = '☰';
        document.querySelector(".mystyle").classList.remove("mystyle");
      
        
      }
    })
  }


  //modal
  







var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
  myVideo.pause();
  modalBtn.style.display="block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// play
// var myVideo = document.getElementById("video1"); 
// var modalBtn =document.getElementById("modalBtn");
// function playPause() { 
//   if (myVideo.paused){
//     myVideo.play()
//     modalBtn.style.display="none"

//   } else {
//     myVideo.pause() 
//   }
    
  
    
// } 

        
      
        


      
       
     