document.getElementById('donation-btn-1').addEventListener('click',function(){
   const donation_1 = getIlimentByInput('donation-value-1');
   const flood_blnc_1 = GetIlimentByDiv('flood-1-blnce');
   const balance_minus = GetIlimentByDiv('main_balance')
  if(isNaN(donation_1) || donation_1<=0){
    alert('invaild donation amount')
    return;
  }

  if(balance_minus<donation_1 ){
    alert('You have not enough balance')
    return
  }
 
  const minus= balance_minus - donation_1
  document.getElementById('main_balance').innerText =minus

  const balance= donation_1 + flood_blnc_1
  document.getElementById('flood-1-blnce').innerText = balance
  alert('thank you')
})