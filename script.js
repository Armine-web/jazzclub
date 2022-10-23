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
            console.log(title);
      } else {
        x.style.display = "none";
        container.style.backgroundColor ="#F5F5F5";
        title.innerText = '☰';
      }
    })
  }

  function toggleText1(){
    var elms = document.getElementsByClassName("figure-caption-test");
    var title = document.querySelector(".title");
    var container = document.querySelector(".container");
    var eventsJazzContainer = document.querySelector(".eventsJazzContainer")
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
       eventsJazzContainer.style.backgroundColor = "rgba(0, 0, 0, 0.71)";
            x.style.backgroundColor = "white";
            title.innerText = '╳';
            console.log(title);
      } else {
        x.style.display = "none";
        container.style.backgroundColor ="#F5F5F5";
       eventsJazzContainer.style.backgroundColor ="#F5F5F5";
        title.innerText = '☰';
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
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// play
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused){
    myVideo.play() 
  } else {
    myVideo.pause() 
  }
    
  
    
} 

        
      
        


      
       
     