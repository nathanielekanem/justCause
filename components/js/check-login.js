const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btn-submit'),
    messages: document.getElementById('form-error-messages')
};

form.submit.addEventListener('click', ()=> {
    const request = new XMLHttpRequest();

    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }

        if (responseObject) {
            handleResponse(responseObject);
        }
    };

    const requestData = `username = ${form.username.value} $password = ${form.password.value}`;

    request.open('post', 'check-login.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(requestData); 
});

function handleResponse(responseObject){
    if (responseObject.accessGranted) {
        location.href = 'https://justcause.vercel.app/prelaunch-dashboard';
    } else {
        while (form.messages.firstChild) {
            form.messages.removeChild(form.messages.firstChild);
        }

        responseObject.messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            form.messages.appendChild(li);
        });

        form.messages.style.display = block;
    }
}