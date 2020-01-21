import style from "./messager_block.scss"
import asideMenuModule from "./menu_aside_fixed/menu_aside_fixed.js";
import join_blocks from "./conversation_message_user_block.js";
import inboxCmp from "./conversation/conversation.js";

function HTML(html) {
    const div = document.createElement('div')
    div.className = "messagerBlock"
    div.innerHTML = html
    return div
}

class MessagerBlock {
    render() {
        let messagerBlock = HTML(`    
        
        `)

        messagerBlock.append(asideMenuModule.render())
        messagerBlock.append(join_blocks.render())

        return messagerBlock
    }
}

const messager_block = new MessagerBlock()
export default messager_block