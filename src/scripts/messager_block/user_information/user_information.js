import style from "./user_information.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "updateUserInfo"
    div.innerHTML = html
    return div
}

class CreateUserInfo {
    render() {
        let createUserInfo = HTML(`
            <div class="updateUserInfo_wraper">
                <div id=""updateUserInfo_main"></div>
                   
               </div>
        `)
        return createUserInfo
    }
}
const createUserInformation = new CreateUserInfo()
export default createUserInformation