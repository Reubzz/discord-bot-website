// Show Hide Menu Function - Commands Page
function showhide(id) {
    var e = document.getElementById(id);
    e.className = (e.className == 'commands-main-menu') ? 'is-hidden commands-main-menu' : 'commands-main-menu';
}
function showhideCommandsContent(id) {
    var e = document.getElementById(id);
    e.className = (e.className == '') ? 'is-hidden' : '';
}

// Commands Page Menu Option Content Toggle
function commandsContent(id) {
  let element = document.getElementById(id);

  // Chat Commands
  let chatLevelSys = document.getElementById('chat-level-system-content');
  let chatGames = document.getElementById('chat-games-content');
  let chatDiscordTogether = document.getElementById('chat-discord-together-content');
  let chatMiscellaneous = document.getElementById('chat-miscellaneous-content');
  let chatModeration = document.getElementById('chat-moderation-content');
  // Slash Commands
  // let slashLevelSys = document.getElementById('slash-level-system-content')
  // let slashDiscordActivites = document.getElementById('slash-discord-activities-content')
  // let slashmiscellaneous = document.getElementById('slash-miscellaneous-content')
  // let slashModeraton = document.getElementById('slash-moderation-content')
  // let slashAdmin = document.getElementById('slash-admin-content')

  let arrayofContent = [chatLevelSys, chatGames, chatDiscordTogether, chatMiscellaneous, chatModeration]
  // console.log(arrayofContent)
  arrayofContent.forEach((x) => {
    x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden';
  })
  element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // if(element.id == chatLevelSys.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  // if(element.id == chatGames.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  // if(element.id == chatDiscordTogether.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  // if(element.id == chatMiscellaneous.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  // if(element.id == chatModeration.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  // if(element.id == chatadmin.id){
  //   arrayofContent.forEach((x) => {
  //     x.className = (x.className == 'is-hidden') ? 'is-hidden' : 'is-hidden'
  //   })

  //   element.className = (element.className == 'is-hidden') ? '' : 'is-hidden'
  // }
  
}

// Navbar for Mobile 
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});


