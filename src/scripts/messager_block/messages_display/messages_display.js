import style from "./messages_display.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "updateMessages"
    div.innerHTML = html
    return div
}

class CreateMessages {
    render() {
        let createMessages = HTML(`
            <div class="updateMessages_wraper">
                <div id ="createMessages" class="updateMessages_createMessages">
                 
                </div>
                   
                   <div class="updateMessages_writeMessage">
                       <form id="messageForm" class="updateMessages_form">
                           <textarea name="body" class="updateMessages_textarea" placeholder="Write message"></textarea>
                             <button id="sendMsg"  class="updateMessages_sendBtn"><i class="fas fa-paperclip"></i></button>
                       </form>
                   </div>
               </div>
        `)
        return createMessages
    }
}
const createMessage = new CreateMessages()
export default createMessage