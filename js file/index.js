document.getElementById('donation-btn-1').addEventListener('click',function(){
   const donation_1 = getIlimentByInput('donation-value-1');
   const flood_blnc_1 = GetIlimentByDiv('flood-1-blnce');
   const balance_minus = GetIlimentByDiv('main_balance');





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
  document.getElementById('flood-1-blnce').innerText = balance;

  
//  time
const places =document.getElementById('noakhali-text').innerText;
  const d = new Date();
  d.setFullYear(2024);

// history 
const div = document.createElement('div');
div.innerHTML=`<div class= "border-2 rounded-2xl my-6 mx-auto w-4/5 text-center">
<p class="font-bold text-xl my-4"> ${donation_1} donated for ${places}</p>
<p class="font-bold text-xl my-4">Date:${d}</p>
</div>`

document.getElementById('history-form').appendChild(div)

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
  
// time
  const places =document.getElementById('feni-text').innerText;
  const d = new Date();
  d.setFullYear(2024);

// history 
const div = document.createElement('div');
div.innerHTML=`<div class= "border-2 rounded-2xl my-6 mx-auto w-4/5 text-center">
<p class="font-bold text-xl my-4"> ${donation_2} donated for ${places}</p>
<p class="font-bold text-xl my-4">Date:${d}</p>
</div>`

document.getElementById('history-form').appendChild(div)



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


// time
const places =document.getElementById('quota-text').innerText;
const d = new Date();
d.setFullYear(2024);

// history 
const div = document.createElement('div');
div.innerHTML=`<div class= "border-2 rounded-2xl my-6 mx-auto w-4/5 text-center">
<p class="font-bold text-xl my-4"> ${donation_3} donated for ${places}</p>
<p class="font-bold text-xl my-4">Date:${d}</p>
</div>`

document.getElementById('history-form').appendChild(div)



})
// quta part close






// button section

document.getElementById('blog-btn').addEventListener('click',function(){
  GetSelectetForm('blog-form')
})


// donation section

document.getElementById('donation-form-btn').addEventListener('click', function(){
  // button_1.classList.toggle('bg-[#b4f461]')
  GetSelectetForm('container-form');
  setBtn_1('donation-form-btn');
})
document.getElementById('history-form-btn').addEventListener('click', function(){
  GetSelectetForm('history-form')
  setBtn_2('history-form-btn')
})


// color challenge part



