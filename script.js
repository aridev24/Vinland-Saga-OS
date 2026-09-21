

dragElement(document.getElementById("notes"));
dragElement(document.getElementById("map"));
dragElement(document.getElementById("song"));
dragElement(document.getElementById("gallery"));
dragElement(document.getElementById("clock"));



function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;


  if (document.getElementById(element.id + "-header")) {

    document.getElementById(element.id + "-header").onmousedown = startDragging;
  } else {

    //element.onmousedown = startDragging;
  }


  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;
 
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }


  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }


  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
} 


function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime
    }
setInterval(updateTime, 1000);


function updateClocktime() {
    var clockcurrentTime = new Date().toLocaleTimeString();
    var clockcurrentDate = new Date().toLocaleDateString();

    var clocktimeText = document.querySelector("#clockTime");
    var clockdateText = document.querySelector("#clockDate");
    clocktimeText.innerHTML = clockcurrentTime
    clockdateText.innerHTML = clockcurrentDate
    }
setInterval(updateClocktime, 1000);


var selectedIcon = undefined

function selectIcon(element) {
  if (selectedIcon) {
  selectedIcon.classList.remove("selected");
  }
  element.classList.add("selected");
  selectedIcon = element;
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  if (selectIcon === element) {
      selectedIcon = undefined;
  }
}



function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var windowScreen = document.querySelector("#notes")
var windowScreenClose = document.querySelector("#notesclose");
var windowScreenOpen = document.querySelector("#notesopen");

const mapWindow = document.querySelector("#map");
const mapWindowOpen = document.querySelector("#mapopen");
const mapWindowClose = document.querySelector("#mapclose");

const galleryWindow = document.querySelector("#gallery");
const galleryWindowOpen = document.querySelector("#galleryopen");
const galleryWindowClose = document.querySelector("#galleryclose");



windowScreenClose.addEventListener("click", function() {
  closeWindow(windowScreen);
});

windowScreenOpen.addEventListener("click", function() {
  openWindow(windowScreen);
});

mapWindowClose.addEventListener("click", function() {
  closeWindow(mapWindow);
});

mapWindowOpen.addEventListener("click", function() {
  openWindow(mapWindow);
});

galleryWindowClose.addEventListener("click", function() {
  closeWindow(galleryWindow);
});

galleryWindowOpen.addEventListener("click", function() {
  openWindow(galleryWindow);
});


window.addEventListener("load", function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  setTimeout (() => {
    loaderWrapper.style.display = "none";
  }, 2000);
  
});

window.addEventListener('click', () => { document.getElementById('my-audio').play() }, { once: true });


/*---------------------------------------------*/


const imgViewer = document.getElementById("imgViewer");
const largeImg = document.getElementById("largeImg");

document.querySelectorAll("#gallery img").forEach((image) => {
  image.addEventListener("click", function() {
    largeImg.src = this.src;
    imgViewer.style.display= "flex";
  });
});

imgViewer.addEventListener("click", function(event) {
  if (event.target === imgViewer) {
    imgViewer.style.display = "none";
  }
});


/*---------------------------------------------*/

const notesArea = document.getElementById("notes-input");
if(notesArea) {
  notesArea.value = localStorage.getItem("saved-notes") || "" ;

  notesArea.addEventListener("input", () => { 
    localStorage.setItem("saved-notes", notesArea.value); 
  });
}

/*---------------------------------------------*/


/* const choices = [
  '"A true warrior doesn\'t <br> need a sword." - Thors',
  '"You don\'t have enemies. <br> Nobody in this entire world <br> deserves to get hurt." - Thors',
  '"Every living human being is <br> a slave to something." - Askeladd',
  '"I use a sword because <br> I am weak." - Thors',
  '"If you are empty, <br> anything can fit into <br> your soul." - Snake',
  '"Only those who fight on <br> the battlefield get to decide <br> their own rules." - Canute',
  '"The world is far more <br> beautiful than anything <br> made by man." - Willibald',
  '"I want to be stronger. <br> I want to be a  better <br> person." - Thorfinn',
  '"You can\'t build a peaceful <br> land using nothing <br> but blood." - Thorfinn',
  '"A man who cannot live <br> with his own sins is <br> no man at all." - Askeladd'
]; */

const choices = [
  '"A true warrior doesn\'t need a sword." - Thors',
  '"You don\'t have enemies. Nobody in this entire world deserves to get hurt." - Thors',
  '"Every living human being is a slave to something." - Askeladd',
  '"I use a sword because I am weak." - Thors',
  '"If you are empty, anything can fit into your soul." - Snake',
  '"Only those who fight on the battlefield get to decide their own rules." - Canute',
  '"The world is far more beautiful than anything made by man." - Willibald',
  '"I want to be stronger. I want to be a better person." - Thorfinn',
  '"You can\'t build a peaceful land using nothing but blood." - Thorfinn',
  '"A man who cannot live with his own sins is no man at all." - Askeladd'
];

document.getElementById("greeting-card").innerHTML =
  choices[Math.floor(Math.random() * choices.length)];