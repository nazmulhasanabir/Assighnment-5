function getIlimentByInput(id){
    const addedValue = document.getElementById(id).value;
    const AddedNumber = parseFloat(addedValue);
    return AddedNumber;

}
function GetIlimentByDiv(id){
    const input = document.getElementById(id).innerText;
    const inputField = parseFloat(input);
    return inputField;
}


function GetSelectetForm (id){
    document.getElementById('cashIn-form').classList.add('hidden');
    document.getElementById('Cashout-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
     
    document.getElementById(id).classList.remove('hidden')
}

