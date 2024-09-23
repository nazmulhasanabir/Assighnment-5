
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
    document.getElementById('container-form').classList.add('hidden');
    document.getElementById('Popup').classList.add('hidden');
    document.getElementById('blog-form').classList.add('hidden');
     document.getElementById('history-form').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}



function setBtn_1(id){
    const btn_1 = document.getElementById('donation-form-btn');
    const btn_2 = document.getElementById('history-form-btn');


    btn_1.classList.remove('bg-stone-200');
    btn_1.classList.add('bg-[#b4f461]');
  
  
    btn_2.classList.remove('bg-[#b4f461]');
    btn_2.classList.add('bg-stone-200');
  }
  
  function setBtn_2(id){
    const btn_1 = document.getElementById('donation-form-btn');
    const btn_2 = document.getElementById('history-form-btn');


    btn_1.classList.remove('bg-[#b4f461]');
    btn_1.classList.add('bg-stone-200');
  
    btn_2.classList.remove('bg-stone-200');
    btn_2.classList.add('bg-[#b4f461]')
  }
  