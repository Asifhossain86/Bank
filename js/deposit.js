
   document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositFeild = document.getElementById('deposit-field');
   const newDepositAmountString = depositFeild.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   
   const depositTotalElement = document.getElementById('deposit-total');
   const preDepositTotalString = depositTotalElement.innerText;
   const preDepositTotal = parseFloat(preDepositTotalString);
//    depositTotalElement.innerText= newDepositAmount;

    const currentDepositTotal = preDepositTotal + newDepositAmount;
    depositTotalElement.innerText= currentDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    const currentBalanceTotal= preBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText= currentBalanceTotal;



    depositFeild.value='';

})