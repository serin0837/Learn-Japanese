const newWords ={
    wordH2Input : document.getElementById("japanese"),
    wordMeaningInput :document.getElementById("english")
};

const html1 = '<li class="card border-success m-3" style="width: 18rem;"><div class="card-body"><h2 class="card-title">'
const html2 = '</h2><p class="card-text">'
const html3 = '</p></div><button type="button" class="btn btn-outline-warning edit">edit</button><button type="button" class="btn btn-outline-info update">update</button><button type="button" class="btn btn-outline-danger delete">delete</button></li>'
const validate = document.querySelector('input');

document.querySelector("#add-button").addEventListener("click", addWord);
function addWord (event){
if(validate.value === ""){
    alert("Please insert your word of the day");
} else {
    event.preventDefault();
    const d1 = document.getElementById('card');
    d1.insertAdjacentHTML('beforeend', html1+newWords.wordH2Input.value+html2+newWords.wordMeaningInput.value+html3);
    localStorage.setItem("word", newWords.wordH2Input.value);
    document.getElementById("japanese").value = ""
    document.getElementById("english").value = ""
}
};
const string1 = '<input class="update-input-box" type="text" placeholder="'
const string2 = '"></input>'

document.getElementById('card').addEventListener('click', function(e) {
const tgt = e.target;
const parent = tgt.closest('li');
if (tgt.classList.contains('delete')) parent.remove();
else if (tgt.classList.contains('edit')) {
// console.log("Update clicked for ", parent.querySelector(".card-title").textContent)
// document.createElement("input");
    const japanese = parent.querySelector(".card-title")
    const english = parent.querySelector(".card-text")
    japanese.insertAdjacentHTML('beforeend', string1+japanese.textContent+string2);
    english.insertAdjacentHTML('beforeend', string1+english.textContent+string2);
    // parent.querySelector("card-title").textContent.style.display ="none"
}
else if (tgt.classList.contains('update')) {
    // console.log("Update clicked for ", parent.querySelector(".card-title").textContent)
    // document.createElement("input");
    console.log("update")
    console.log(document.getElementById("update-input-box").value)
    //need to have a look
    const editedWords ={
        editedWordJapanese : document.getElementById("japanese"),
        editedWordEnglish : document.getElementById("english")
    };
    }
});


//<input type="text" placeholder="Jap"><h2 class="card-title">にほんご</h2></input>

// editInput.type="text";
// var editTask=function(){
//     console.log("Edit Task...");
//     console.log("Change 'edit' to 'save'");