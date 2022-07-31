// Search Function 
function search(){
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('lb-data');
    // let hr = document.getElementByClassName('lb-divider');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            if(x[i].id != 0)
                document.getElementById(`divider-${x[i].id}`).style.display="none"
            
            // hr[i].style.display="none";
        }
        else {
            x[i].style.display="";
            if(x[i].id != 0)
                document.getElementById(`divider-${x[i].id}`).style.display=""
            // hr[i].style.display="";

        }
    }
}

function dropdown(x, y) {
    let elem = document.getElementById(x);
    let arrow = document.getElementById(y);
    elem.classList.toggle('is-hidden');
    arrow.classList.toggle('fa-rotate-180')
}


