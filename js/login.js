$(document).ready(function(){
    addListenerForm();
})

function addListenerForm(){
    $(document).on('click', '#submitBtn',function(){
        if($('#login').val() === 'pedro' && $('#password').val() === 'pedro'){
            console.log('fuck');
        
            $('form').attr('action', 'index.html');
        }else{
            alert("Wrong username or password, please try again.")
            $('form').attr('action', 'login.html');
        }
    })
}