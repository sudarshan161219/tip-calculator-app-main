const bill = document.querySelector('.first-input');
const eachperson = document.querySelector('.Number-of-People');
const custom = document.querySelector('.custom');
const perBtn = document.querySelectorAll('.button');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');

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

function disableBtn() {
    document.getElementsByClassName("button").disabled = true;
}

function enableBtn() {
    document.getElementsByClassName("button").disabled = false;
}

perBtn.forEach((btn) =>{

if(!bill.value && !eachperson.value){
    disableBtn()
}
// if(bill.value && eachperson.value){
//     enableBtn()
// }  
    btn.addEventListener("click", (e)=>{
     pointZero = `0.${e.target.value}`
    firstTotal = inputBill * pointZero;
    let totalTip = firstTotal / person;
    let finalTipTotal = (Math.round(totalTip * 100) / 100).toFixed(2);
   let dividTotal = inputBill / person;
   let addTotal =  dividTotal + totalTip;
   let finalTotal = (Math.round(addTotal * 100) / 100).toFixed(2);
    tipAmount.textContent = `$${finalTipTotal}`;
    totalAmount.textContent = `$${finalTotal}`;
})



})

bill.addEventListener('input', (e) =>{
    inputBill = e.target.value
});

eachperson.addEventListener('input', (e) =>{
    person = e.target.value
})


    custom.addEventListener('input', (e) =>{
    pointZero = `0.${e.target.value}`
    firstTotal = inputBill * pointZero;
    let totalTip = firstTotal / person;
    let finalTipTotal = (Math.round(totalTip * 100) / 100).toFixed(2);
   let dividTotal = inputBill / person;
   let addTotal =  dividTotal + totalTip;
   let finalTotal = (Math.round(addTotal * 100) / 100).toFixed(2);
    tipAmount.textContent = `$${finalTipTotal}`;
    totalAmount.textContent = `$${finalTotal}`;
})
