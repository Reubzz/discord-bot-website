// Search Function 
function search(){
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('lb-data');
    let elem = document.getElementById('lb-box');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            // let result = []
            // result =+ x[i]
            // elem.innerHTML = result
            // console.log(result)
        }
        else {
            x[i].style.display="";                 
        }
    }
}