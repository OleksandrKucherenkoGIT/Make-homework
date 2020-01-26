async function LoginService() {
    
    let formLogin = document.querySelector("#login_form");
    let formData = new FormData (formLogin);
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        })
        .then((response) => {
        console.log(response.status);
        console.log(response.headers.get('x-auth-token'))
        if (response.status === 200) {
            localStorage.setItem('token', response.headers.get('x-auth-token'))
            alert("You successfully loged")
            document.getElementById("modal-auth").style.display = "none"
            console.log(localStorage)
            if (localStorage !== 0){
                // usermail = document.getElementById("userEmail").value
                // console.log(document.getElementById("userEmail").value)
                document.getElementsByClassName("authBtns")[0].style.display = "none"
                document.getElementsByClassName("profile")[0].style.display = "flex"
                document.getElementsByClassName("BarTopBlock")[0].style.display = "block"
                document.getElementsByClassName("conversationMain")[0].style.display = "flex"
           
            }
        }
        else{
            alert('Incorrect password or email!')
        }
    })
}

export default LoginService