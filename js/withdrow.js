document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowFieldString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowFieldString);
    // console.log(newWithdrowAmount);

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const preWithdrowTotalElement = withdrowTotalElement.innerText;
    const preWithdrowTotal = parseFloat(preWithdrowTotalElement);

    const currentWithdrowAmount = newWithdrowAmount + preWithdrowTotal;
    withdrowTotalElement.innerText = currentWithdrowAmount;


    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(prebalanceTotalString);

    const newBalance = preBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalance;




    withdrowField.value= '';



})