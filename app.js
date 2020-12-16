const newWords ={
    wordH2Input : document.getElementById("japanese"),
    wordMeaningInput :document.getElementById("english")
};
const html1 = '<li class="card border-success m-3" style="width: 18rem;"><div class="card-body"><input type="textbox" class="card-title" value="'
const html2 = '" disabled></input><input type="textbox" class="card-text" value="'
const html3 = '" disabled></input></div><div class="flex mb-3"><button type="button" class="btn btn-outline-warning edit">edit</button><button type="button" class="btn btn-outline-info update">update</button><button type="button" class="btn btn-outline-danger delete">delete</button></div></li>'
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
const japanese = parent.querySelector(".card-title")
const english = parent.querySelector(".card-text")

if (tgt.classList.contains('delete')) parent.remove();
    else if (tgt.classList.contains('edit')) {
        japanese.removeAttribute('disabled');        
        english.removeAttribute('disabled');
        japanese.style.border = "1px solid rgb(224, 140, 154)";
        english.style.border = "1px solid rgb(224, 140, 154)";
    }
    else if (tgt.classList.contains('update')) {
        japanese.setAttribute("disabled",'disabled');
        english.setAttribute("disabled",'disabled');
        japanese.style.border="none";
        english.style.border="none";
    }
});