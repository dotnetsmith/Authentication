function onSubmit(){ 
    validatePasswordMatch();
    addNewUser();
}

function validatePasswordMatch(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        return true;
    } else {
        alert('Passwords do not match');
        return false;
    }
}

function addNewUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = 'http://localhost:5258/api/Auth/register';
    const data = { username, password };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}