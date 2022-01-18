let letters = getLetters()
document.getElementById("draw").addEventListener("click", draw)
document.getElementById("refresh").addEventListener("click", restart)
document.getElementById("fullscreen-btn").addEventListener("click", openFullscreen)

function addHTML(letter, number){
  const html =  "<p class='letter' id='" + letter + number + "'>" + letter +  number + "</p>"
  document.getElementById(String(letter)).innerHTML += html
}

function getLetters(){
  const letters = []
  for (let i = 1; i < 16; i++) {
    addHTML("B",i)
    letters.push("B" + i)
  }
  for (let i = 16; i < 31; i++) {
    addHTML("I",i)
    letters.push("I" + i)
  }
  for (let i = 31; i < 46; i++) {
    addHTML("N",i)
    letters.push("N" + i)
  }
  for (let i = 46; i < 61; i++) {
    addHTML("G",i)
    letters.push("G" + i)
  }
  for (let i = 61; i < 76; i++) {
    addHTML("O",i)
    letters.push("O" + i)
  }
  return letters
}

function draw(){
  let randNum = Math.floor((Math.random() * letters.length));
  if (letters.length > 0){
    document.getElementById("caller").innerText = letters[randNum]
    document.getElementById(letters[randNum]).classList.add("called")
    letters.splice(randNum, 1)
  } else {
    document.getElementById("caller").innerHTML = "<h3>Game Complete. <br>Click <span style='font-size:0.7em'><i class='fas fa-redo'></i></span> to restart.</h3>"
    document.getElementById("all-letters").classList.add("hide")
  }

}

function restart(){
  const divs = document.getElementsByClassName("letters")
  for (const div of divs){
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
  }
  letters = getLetters()
  document.getElementById("all-letters").classList.remove("hide")
  document.getElementById("caller").innerText = "Press Draw to Start"
}

function openFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err))
  } else {
    document.documentElement.requestFullscreen();
    //add some padding at the top of screen
  }
}
