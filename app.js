const bill = document.querySelector('.first-input');
const eachperson = document.querySelector('.Number-of-People');
const custom = document.querySelector('.custom');
const perBtn = document.querySelectorAll('.button');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.Reset-button')

let pointZero;
let inputBill;
let firstTotal; 
let person;
let customTip;

// if(!bill.value && !eachperson.value){
//      perBtn.disabled = true
// }if(bill.value && eachperson.value){
//      perBtn.disabled = false
    
// }  



perBtn.forEach((btn) =>{

    btn.addEventListener("click", (e)=>{
        
if(bill.value &&eachperson.value){
pointZero = `0.${e.target.value}`
    firstTotal = inputBill * pointZero;
    let totalTip = firstTotal / person;
    let finalTipTotal = (Math.round(totalTip * 100) / 100).toFixed(2);
   let dividTotal = inputBill / person;
   let addTotal =  dividTotal + totalTip;
   let finalTotal = (Math.round(addTotal * 100) / 100).toFixed(2);
    tipAmount.textContent = `$${finalTipTotal}`;
    totalAmount.textContent = `$${finalTotal}`;
}else{
    return;
}  



});

});

bill.addEventListener('input', (e) =>{
    inputBill = e.target.value
});

eachperson.addEventListener('input', (e) =>{
    person = e.target.value
});


    custom.addEventListener('input', (e) =>{
        if(bill.value &&eachperson.value ){
            if (e.target.value  < 10) {
                pointZero = `0.0${e.target.value}`
              }else{
                pointZero = `0${e.target.value}`
              }
         
       
    firstTotal = inputBill * pointZero;
    let totalTip = firstTotal / person;
    let finalTipTotal = (Math.round(totalTip * 100) / 100).toFixed(2);
   let dividTotal = inputBill / person;
   let addTotal =  dividTotal + totalTip;
   let finalTotal = (Math.round(addTotal * 100) / 100).toFixed(2);
    tipAmount.textContent = `$${finalTipTotal}`;
    totalAmount.textContent = `$${finalTotal}`;
        }else{
            return;
        }


});


resetBtn.addEventListener("click", ()=>{
    bill.value = "";
    eachperson.value= "";
    custom.value= "";
    tipAmount.textContent = 0;
    totalAmount.textContent = 0;
})