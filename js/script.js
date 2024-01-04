document.getElementById('btn-submit').addEventListener('click',function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //  console.log(email);
    const passwardField = document.getElementById('user-passward');
    const passward = passwardField.value;
    console.log(email, passward);

    if(email === 'isfahan@gmail.com' && passward === '123456'){
        window.location.href= 'bank.html';
    }
    else{
        alert("Invalid user");
    }
})