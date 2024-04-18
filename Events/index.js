var btnSave = document.querySelector("#btnSaveMe");

btnSave.addEventListener("click", save);

function save(event){
    alert("The Save button was clicked");
    console.log(event);
}