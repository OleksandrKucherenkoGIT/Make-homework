import style from "./conversation.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "conversationMain"
    div.innerHTML = html
    return div
}

class InboxComponent {
    constructor() {}
    render() {
        let inboxComponent = HTML(`
            <div class="main-message-container__left-aside">
               <div class="conversations">
                   <div id="usersList" class="conversation">

                   </div>
                   <div class="new-conversation">
                       <button class="new-conversation__btn">
                           <i class="fas fa-plus"></i>
                           New coversation
                       </button>
                   </div>
               </div>
            </div>
        `)
        return inboxComponent
    }
}
const inboxCmp = new InboxComponent()
export default inboxCmp