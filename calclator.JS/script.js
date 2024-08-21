const contral = document.getElementById('contral');

function appendToDicplay(input){
    contral.value += input;
}
function clearDisplay (){
    contral.value = '';
}
function calclator() {
    try{
        contral.value = eval(contral.value);
    }
    catch(error){
        contral.value = 'error';
    } 
}

