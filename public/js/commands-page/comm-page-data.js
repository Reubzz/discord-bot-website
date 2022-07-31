
/* 
    TODO : 
        loadCommand() content into one Div and keep changing innerHTML
        according to request from button. 

        if from left menu a button is selected a function is called 
        which replaces the content in the main div container to bring 
        out the commands of that option selected. Such that we have 
        one div only and it keeps updating different content according 
        to the selection made by the user.

        loadCommand() is to replace commandsContent() in /app.js
*/


function loadCommand(a, b){
    
    $.get('/data/commands-data.json', function(x){
        // console.log(x)
        // console.log(a)
        // console.log(b)

        let xx = x[a][b]
        // console.log(xx)
        let resHtml = '';
        xx.forEach(e => {
            // console.log(e)
            resHtml += `
                <div class="box comamnds-box">
                    <div>
                        <a onclick="showhideCommandsContent('${e.name}')" class="has-text-white is-large">
                            <i class="fa-solid fa-angle-down ${e.name}"></i>
                            <i class="fa-solid fa-angle-up ${e.name} is-hidden"></i>
                            <span class="tag has-text-white commands-span-color">${e.name}</span>
                        </a>
                        ${
                            e.flair.description? 
                            `<span class="is-pulled-right tag ${e.flair.color}"> ${e.flair.description}</span>` : 
                            ""
                        }
                        <div class="${e.name} is-hidden" id="${e.name}">
                            <br>
                            <p class="has-text-white">${e.description}</p>
                            <br>
                            <h3 class="has-text-weight-bold has-text-white">Usage:</h3>
                            <p><span class="tag has-text-white commands-span-color">${e.usage.command}</span></p>
                            ${
                                e.usage.desc1?
                                `<p class="has-text-white">${e.usage.desc1}`:
                                ""
                            }
                            ${
                                e.usage.desc2?
                                `<p class="has-text-white">${e.usage.desc2}`:
                                ""
                            }
                        </div>
                    </div>
                </div>
            `
        });
        let elem = document.getElementById('commands');
        elem.innerHTML = resHtml;
    })
}