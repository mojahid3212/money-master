function getInputElementValue(elementId){
    const elementField= document.getElementById(elementId);
    const elementFieldstr= elementField.value ;
    const elementFieldValue= parseFloat(elementFieldstr);
    return elementFieldValue;
}
const balance=document.getElementById('balance');
const currentExpense= document.getElementById('total-expenses');
document.getElementById('caclculate').addEventListener('click',function(){
    const incomeFieldValue = getInputElementValue('income-field');
    const foodExpenseValue= getInputElementValue('food-expense-field');
    const rentExpenseValue= getInputElementValue('rent-expense-field');
    const clothesExpenseValue=getInputElementValue('clothes-expense-field');
    
    const failError= document.getElementById('notify-fail');
    const compareError=document.getElementById('compare');
    
   
    const totalExpense=foodExpenseValue+rentExpenseValue+clothesExpenseValue;
    const currentBalance= incomeFieldValue-totalExpense;
    if(isNaN(incomeFieldValue)|| isNaN(foodExpenseValue)||  isNaN(rentExpenseValue)|| isNaN(clothesExpenseValue)){
       failError.style.display='block';
       compareError.style.display='none';

    }
    else if(totalExpense>incomeFieldValue){
        compareError.style.display='block';
        failError.style.display='none';
    }
    else{
        currentExpense.innerText=totalExpense;
        failError.style.display='none';
        compareError.style.display='none';
        balance.innerText=currentBalance;
    }
   
})
  
document.getElementById('save-btn').addEventListener('click',function(){
    
    
    const savingParcentage=getInputElementValue('save-percentage');
    const currentBalance=balance.innerText;
    const income=getInputElementValue('income-field');
    const currentBalanceAmount=parseFloat(currentBalance);
    savingAmount=income* savingParcentage/100;
    
    const remainingAmount= currentBalanceAmount-savingAmount;
    

    if(savingParcentage>100||isNaN(savingParcentage)){
        const notifyPercentage=document.getElementById('notify-percentage');
        notifyPercentage.style.display='block';
    }
    else if(savingAmount>currentBalanceAmount){
        // console.log(currentBaAmount);
        // console.log(savingAmount);
        // console.log('ato taka nai');
        const exceedWarning= document.getElementById('exceed');
        exceedWarning.style.display='block';
      
    }
    else{
        const savingBalance=document.getElementById('saving');
        savingBalance.innerText=savingAmount;
        const remainingBalance= document.getElementById('remaining');
        remainingBalance.innerText=remainingAmount;

    }
    
})