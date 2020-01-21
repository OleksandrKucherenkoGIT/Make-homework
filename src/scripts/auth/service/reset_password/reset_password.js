async function ResetPasswordService() {
    let formResetPassword = document.querySelector("#resetPassword_form");
	let formData = new FormData (formResetPassword);
    let obj = {};
    formData.forEach((value, key) => {
    	obj[key] = value;
    });
    console.log(obj);

    let response = await fetch('http://localhost:3000/api/users/reset_password', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })
    .then((response) => {
        if(response.status == 200){
            alert('Your password changed')
            // window.location.href = './login.html'
            document.getElementById("modal-auth").style.display = "none"
        }
        else{
            alert('Wrong Input')
        }
    })

}

export default ResetPasswordService