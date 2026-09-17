dragElement(document.getElementById("window"));


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


var windowScreen = document.querySelector("#window")


function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var windowScreenClose = document.querySelector("#windowclose")

var windowScreenOpen = document.querySelector("#windowopen")




windowScreenClose.addEventListener("click", function() {
  closeWindow(windowScreen);
});

windowScreenOpen.addEventListener("click", function() {
  openWindow(windowScreen);
});