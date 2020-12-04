const { v4: uuidv4 } = require('uuid');
//why not working??

const wordH2Input = document.getElementById("japanese")
const wordMeaningInput = document.getElementById("english")

// var newHtml = `<div class="card border-success m-3"  style="width: 18rem;"><div class="card-body"><h2 class="card-title">`+ wordH2Input.value+'</h2><p class="card-text">'+wordMeaningInput.value+'</p><button type="button" class="btn btn-outline-info">update</button><button type="button" class="btn btn-outline-danger">delete</button></div>'

const html1 = '<div class="card border-success m-3"  style="width: 18rem;"><div class="card-body"><h2 class="card-title">'
const html2 = '</h2><p class="card-text">'
const html3 = '</p><button type="button" class="btn btn-outline-info">update</button><button type="button" class="btn btn-outline-danger">delete</button></div>'


document.querySelector("#add-button").addEventListener("click", addWord
)

function addWord (event){
    event.preventDefault();
    var d1 = document.getElementById('card');
    d1.insertAdjacentHTML('beforeend', html1+wordH2Input.value+html2+wordMeaningInput.value+html3);
    console.log("function working")
    uuidv4();
}

document.querySelector


var myobj = document.getElementById("demo");
myobj.remove();