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
const html3 = '</p></div><button type="button" class="btn btn-outline-info">update</button><button type="button" class="btn btn-outline-danger delete">delete</button></div>'



document.querySelector("#add-button").addEventListener("click", addWord);
function addWord (event){
    event.preventDefault();
    var d1 = document.getElementById('card');
    d1.insertAdjacentHTML('beforeend', html1+newWords.wordH2Input.value+html2+newWords.wordMeaningInput.value+html3);
    html1.replace('%id%', newWords.id);
    newWords.id = Date.now()
    resArr.push(newWords);
    localStorage.setItem("word", newWords.wordH2Input.value);
    const word = localStorage.getItem('word');
    console.log(word)
}


document.querySelector('li').addEventListener('click', deleteOrTick);
// deleteTick
function deleteOrTick(e){
    console.log("check click")
    if(e.target.className == 'delete'){
        console.log("delete clicked")
    }
      deleteTask(e);
        // delete task
    function deleteTask(e){
        let remove = e.target.parentNode;
        let parentNode = remove.parentNode;
        parentNode.removeChild(remove);
    }
  }
  


