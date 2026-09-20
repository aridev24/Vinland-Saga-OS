

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


var windowScreen = document.querySelector("#notes")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}


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