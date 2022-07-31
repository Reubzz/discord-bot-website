// Show Hide Menu Function - Commands Page
function showhide(id) {
    let e = document.getElementById(id);
    e.classList.toggle('is-hidden')
}
function showhideCommandsContent(id) {
    // var e = document.getElementById(id);
    var e = document.getElementsByClassName(id)
    for(let i = 0; i < e.length; i++) {
      e[i].classList.toggle('is-hidden')
    }
    
    // e.classList.toggle('is-hidden')
}

let dropDownArrow = document.getElementsByClassName('fa-angle-down')
// console.log(dropDownArrow);
dropDownArrow.addEventListener("mouseover", (e) => {
  e.classList.toggle('fa-bounce fa-beat')
})

// Commands Page Menu Option Content Toggle
function commandsContent(id) {
  let element = document.getElementById(id);

  let arrayofContent = [
    // Chat Commands
    document.getElementById('chat-levels'),
    document.getElementById('chat-games'),
    document.getElementById('chat-activities'),
    document.getElementById('chat-misc/utils'),
    document.getElementById('chat-moderation'),
    // Slash Commands
    document.getElementById('slash-levels'),
    document.getElementById('slash-activities'),
    document.getElementById('slash-suggestions'),
    document.getElementById('slash-scheduler'),
    document.getElementById('slash-misc/utils'),
    document.getElementById('slash-moderation'),
    document.getElementById('slash-admin'),
    document.getElementById('slash-music'),
  ]
  // console.log(arrayofContent)
  arrayofContent.forEach((x) => {
    x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden';
  })
  element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
}



