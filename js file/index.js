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
  const popup = document.getElementById('my_modal_1')
  // alert('thank you')
  return(popup)
 
})

// noakhali part close

//feni part start
document.getElementById('donation-btn-2').addEventListener('click',function(){
    const donation_2 = getIlimentByInput('donation-value-2');
    const  flood_blnc_2 = GetIlimentByDiv('flood-2-blnce');
    const minus_balance = GetIlimentByDiv('main_balance')
    
    if(isNaN(donation_2) || donation_2<=0){
        alert('invaild donation amount')
        return;
      }
    
      if(minus_balance<donation_2 ){
        alert('You have not enough balance')
        return
      }
    
  const minus= minus_balance - donation_2
  document.getElementById('main_balance').innerText =minus

  const balance= donation_2 + flood_blnc_2
  document.getElementById('flood-2-blnce').innerText = balance
  alert('thank you')
  
})
// feni part close 

// quota part start
document.getElementById('donation-btn-3').addEventListener('click',function(){
  const donation_3 = getIlimentByInput('donation-value-3');
  const  injuredBlnce = GetIlimentByDiv('injured-blnce');
  const minus_balance = GetIlimentByDiv('main_balance')
  
  if(isNaN(donation_3) || donation_3<=0){
      alert('invaild donation amount')
      return;
    }
  
    if(minus_balance<donation_3 ){
      alert('You have not enough balance')
      return
    }
  
const minus= minus_balance - donation_3
document.getElementById('main_balance').innerText =minus

const balance= donation_3 + injuredBlnce
document.getElementById('injured-blnce').innerText = balance
alert('thank you')

})
// quta part close






// button section

document.getElementById('blog-btn').addEventListener('click',function(){
  GetSelectetForm('blog-form')
})
// donation section
document.getElementById('donation-form-btn').addEventListener('click', function(){
  GetSelectetForm('container-form')
})
document.getElementById('history-form-btn').addEventListener('click', function(){
  GetSelectetForm('history-form')
})