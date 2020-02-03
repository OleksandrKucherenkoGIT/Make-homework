import style from "./conversation.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "conversationBlock"
    div.innerHTML = html
    return div
}

class InboxComponent {
    render() {
        let inboxComponent = HTML(`
            <div class="conversationBlock_wraper">
               <div class="conversationBlock_conversations">
                <div id="createThread" class="conversationBlock_createThread"></div>
                   <select id="usersList" class="conversationBlock_select">

                   </select>
                   <div class="conversationBlock_newConversation">
                       <button class="conversationBlock_newConversation_btn">
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