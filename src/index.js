import components from "./scripts/main.js";
import  {userInf, userId } from "./scripts/main_service.js";
import SignUpService from "./scripts/auth/service/sign_up/sign_up.js";
import LoginService from "./scripts/auth/service/login/login.js";
import ResetPasswordService from "./scripts/auth/service/reset_password/reset_password.js";
import createOptions from "./scripts/messager_block/conversation/conversation_service.js";

var userKey = localStorage.token;

const app = document.getElementById('app')
components.map(component => app.append(component.render()))

try{
    document.getElementById('signUp_form').addEventListener('submit', (e) => {
        e.preventDefault();
        SignUpService();

    })
}catch(err){}

try{
    document.getElementById('login_form').addEventListener('submit', (e) => {
        e.preventDefault();
        LoginService();
    
    })
}catch(err){}

try{
    document.getElementById('resetPassword_form').addEventListener('submit', (event) => {
        event.preventDefault();
        ResetPasswordService();
    })
}catch(err){}

document.getElementById("signUpBtn").onclick = function() {
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("signUpDisplay").style.display = "flex"
	document.getElementById("loginDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "none"
}

document.getElementById("loginBtn").onclick = function() {
	ClearToken()
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("loginDisplay").style.display = "flex"
	document.getElementById("signUpDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "none"
}

document.getElementById("exitingMember").onclick = function() {
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("loginDisplay").style.display = "flex"
	document.getElementById("signUpDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "none"
}

document.getElementById("notAMember").onclick = function() {
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("signUpDisplay").style.display = "flex"
	document.getElementById("loginDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "none"
}

document.getElementById("fogotPassword").onclick = function() {
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("signUpDisplay").style.display = "none"
	document.getElementById("loginDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "flex"
}

document.getElementById("notMember").onclick = function() {
	document.getElementById("modal-auth").style.display = "block"
	document.getElementById("signUpDisplay").style.display = "flex"
	document.getElementById("loginDisplay").style.display = "none"
	document.getElementById("resetPasswordDisplay").style.display = "none"
}

document.getElementsByClassName("close")[0].onclick = function() {
	document.getElementById("modal-auth").style.display = "none"
}

document.getElementsByClassName("profile")[0].onclick = function() {
	ClearToken()
	document.getElementsByClassName("authBtns")[0].style.display = "block"
                document.getElementsByClassName("profile")[0].style.display = "none"
                document.getElementsByClassName("BarTopBlock")[0].style.display = "none"
                document.getElementsByClassName("joinBlocks")[0].style.display = "none"
                
}



function ClearToken(){
	localStorage.clear()
}

console.log(userId)
if (userKey !== undefined){
                document.getElementsByClassName("authBtns")[0].style.display = "none"
                document.getElementsByClassName("profile")[0].style.display = "flex"
                document.getElementsByClassName("BarTopBlock")[0].style.display = "block"
                document.getElementsByClassName("joinBlocks")[0].style.display = "flex"
                userInf();
                
				console.log(userId)
            }
            createOptions();
document.getElementsByClassName("conversationBlock_newConversation_btn")[0].onclick = function(){
document.getElementById("usersList").style.display = "flex"
} 

 