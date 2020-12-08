const newWords =
    {
        id : 0,
        wordH2Input : document.getElementById("japanese"),
        wordMeaningInput :document.getElementById("english")
    };
const resArr = [];
// var newHtml = `<div class="card border-success m-3"  style="width: 18rem;"><div class="card-body"><h2 class="card-title">`+ wordH2Input.value+'</h2><p class="card-text">'+wordMeaningInput.value+'</p><button type="button" class="btn btn-outline-info">update</button><button type="button" class="btn btn-outline-danger">delete</button></div>'

const html1 = '<div class="card border-success m-3" style="width: 18rem;"><div class="card-body"><h2 class="card-title">'
const html2 = '</h2><p class="card-text">'
const html3 = '</p><button type="button" class="btn btn-outline-info">update</button><button type="button" class="btn btn-outline-danger" id="%id%">delete</button></div>'



document.querySelector("#add-button").addEventListener("click", addWord);
function addWord (event){
    event.preventDefault();
    var d1 = document.getElementById('card');
    d1.insertAdjacentHTML('beforeend', html1+newWords.wordH2Input.value+html2+newWords.wordMeaningInput.value+html3);
    html1.replace('%id%', newWords.id);
    newWords.id = Date.now()
    resArr.push(newWords);
    console.log("function is working" + newWords.id);
    localStorage.setItem("word", newWords.wordH2Input.value);
    const word = localStorage.getItem('word');
    console.log(word)
}


document.getElementsByClassName("delete")[0].addEventListener("click",function(){
    console.log("click")
})

function myDeleteFunction(event) { 
    alert(event.target.parentElement).remove();
}

//We would need to figure out how to push the date ID to the created object and inject it to the below code 

// document.querySelector('#'+).addEventListener("click", function(){
//     console.log("clicked")
// })

