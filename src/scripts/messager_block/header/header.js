import style from "./header.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div
}

class HeaderRender {
    render() {
        let headerRender = HTML(`
            <header class="header">
                <div class="container">
                    <div class="top-nav">
                        <img src="./static/img/messager_block/header/logo.png" alt="logo">
                        <div class="top-nav__menu">
                            <div class="top-nav__menu__item">
                                <a href="#" class="top-nav__menu__link add-btn">
                                    Add<i class="fas fa-plus"></i>
                                </a>
                            </div>
                            <div class="top-nav__menu__item">
                                <a href="#" class="top-nav__menu__link search">
                                   <i class="fas fa-search"></i>
                                </a>
                            </div>
                            <div class="top-nav__menu__item">
                                <a href="#" class="top-nav__menu__link bell">
                                    <i class="far fa-bell"></i>
                                </a>
                            </div>
                            <div class="top-nav__menu__item">
                                <a href="#" class="top-nav__menu__link profile">
                                    <span class="logout">Log Out</span>
                                    <div><img src="./static/img/messager_block/header/ellipse.png" alt="ellipse"></div>
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                                <div class="authBtns">
                                    <button id="signUpBtn" class="top-nav__menu__auth sign_up">Sign Up</button> <br/>
                                    <button id="loginBtn" class="top-nav__menu__auth login_link">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>        
        `)
        return headerRender
    }
}

const headerCreate = new HeaderRender
export default headerCreate