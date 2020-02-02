import style from "./user_information.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "updateUserInfo"
    div.id = "userInfo"
    div.innerHTML = html
    return div
}

class CreateUserInfo {
    render() {
        let createUserInfo = HTML(`
           
        `)
        return createUserInfo
    }
}
const createUserInformation = new CreateUserInfo()
export default createUserInformation