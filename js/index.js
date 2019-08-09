$(document).ready(function(){
    
    addListenerForm();
})

function addListenerForm(){
    $(document).on('click', '#logoutLi',function(){
        console.log('HERE');
        $('#logoutLi').text('Login');
    })
}