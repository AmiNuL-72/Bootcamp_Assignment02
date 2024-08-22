document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inxb').addEventListener('click', function() {
        var email = document.getElementById('inxp').value;
        var messageDiv = document.getElementById('subscribe_message');
        
        if (email) {
            messageDiv.textContent = 'Thank you for subscribing with ' + email + '!';
        } else {
            messageDiv.textContent = 'Please enter a valid email address.';
        }
    });
});


