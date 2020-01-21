

async function SignUpService() {
    let formSignUp = document.querySelector("#signUp_form");
    let formData = new FormData (formSignUp);
    let obj = {};
    formData.forEach((value, key) => {
    	obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then((response) => {
        if (response.status === 200){
           alert ("Acount created");
            alert ("You can Log In");
            // window.location.href = './login.html'
            document.getElementById("modal-auth").style.display = "none"
        }
        else{
            alert('Wrong input')
        }
    })
}

export default SignUpService