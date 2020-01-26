import style from "./style/auth.scss"


function HTML(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div
}


class ModalAuthRender {
    render() {
        let modalRender = HTML(`
           <div id="modal-auth" class="modalAuth">
           		<div class="modalAuth_content">
	                <span class="close">&times;</span>
	    			<div id="signUpDisplay" class="modalAuth_signUp ">
	                  <h1 class="modalAuth_title">Sign Up</h1>
	                  <a href="#" id="exitingMember" class="modalAuth_link login_link">Existing member?</a>
	                  <form id="signUp_form" class="modalAuth_form">
	                    <input type="text" name="name" placeholder="name" class="modalAuth_input" required>
	                    <input type="email" name="email" placeholder="Email" class="modalAuth_input" required>
	                    <input type="password" name="password" placeholder="Password" class="modalAuth_input" title="min length 8 symbols" required>
	                    <button type="submit" class="modalAuth_btn">Sign Up</button>
	                  </form>
	                </div>
	                <div id="loginDisplay" class="modalAuth_login">
	                  <h1 class="modalAuth_title">Log In</h1>
	                  <a href="#" id="notAMember" class="modalAuth_link">Not a member?</a>
	                  <form id="login_form" class="modalAuth_form">
	                    <input type="email" name="email" placeholder="Email" id="userEmail" class="modalAuth_input" required>
	                    <input type="password" name="password" placeholder="Password" class="modalAuth_input" title="min length 8 symbols" required>
	                    <button type="submit" class="modalAuth_btn">Log In</button>
	                  </form>
	                  <a href="#" id="fogotPassword" class="modalAuth_link">Forgot Password?</a>
	                </div>
					<div id="resetPasswordDisplay" class="modalAuth_resetPassword">
	                  <h1 class="modalAuth_title">Reset Password</h1>
	                  <a href="#" id="notMember" class="modalAuth_link login_link">Not a member?</a>
	                  <p class="modalAuth_msgForClient">Please, enter your email and new password</p>
	                  <form id="resetPassword_form" class="modalAuth_form">
	                    <input type="email" name="email" placeholder="Email" class="modalAuth_input" required>
	                    <input type="password" name="password" placeholder="Password" class="modalAuth_input" title="min length 8 symbols" required>
	                    <input type="password" name="confirmationPassword" placeholder="Confirmation Password" class="modalAuth_input" title="min length 8 symbols" required>
	                    <button type="submit" id="reset_form" class="modalAuth_btn">Reset</button>
	                  </form>
	                </div>
           		</div>
           	</div>
        `)
        return modalRender
    }
}

const modalAuthCreate = new ModalAuthRender()
export default modalAuthCreate