var counter = 0


function buttonthingfunction() {
  if (counter == 0) {
    document.getElementById("buttonthing").textContent = "Message";
    document.getElementById("buttony").textContent = "Click for Message";
    counter = counter + 1;
  } else {
    document.getElementById("buttonthing").textContent = "Secret";
    document.getElementById("buttony").textContent = "Click for Secret";
    counter = counter - 1;
  }
}

function aboutfunction(){
  location.href = "about.html";
}

function homefunction(){
  location.href = "index.html";
}