function onSubmit(){ 
    authenticateUser();
}

function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = 'http://localhost:5258/api/auth/login';
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
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}