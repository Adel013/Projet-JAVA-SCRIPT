const txtToAdd = document.querySelector('#txt_to_add');
const pList = document.querySelector('#myList p');
const pArray = document.querySelector('#myArray p');
const myArray = ['une ligne', 'autre chose', 'et encore'];


function AddText(){
    document.querySelector('#myList p').innerText = document.getElementById('txt_to_add').value;y
}


function AddText1(){
    if(txtToAdd.value!=='')
    {
        // Ajout du contenu du input dans l'élément p.
        pList.innerText += txtToAdd.value+'\n';
        // pList.innerText = pList.innerText + txtToAdd.value+'\n'
        txtToAdd.value = '';
    }
    else{
        alerte('Veuillez entrer un texte');
    }
    txtToAdd.focus();
}


function updateArray(){
for(let i=0; i< myArray.length; i++){
    pArray.innerText += myArray[i]+'\n';
    }
} 