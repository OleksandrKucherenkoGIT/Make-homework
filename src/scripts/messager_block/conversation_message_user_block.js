import style from "./messager_block.scss"
import createMessage from "./messages_display/messages_display.js";
import inboxCmp from "./conversation/conversation.js";
import createUserInformation from "./user_information/user_information.js";

function HTML(html) {
    const div = document.createElement('div')
    div.className = "joinConMesProf"
    div.innerHTML = html
    return div
}

class JoinBlocks {
    render() {
        let joinBlocksConMesProf = HTML(`    
        
        `)
        
        joinBlocksConMesProf.append(inboxCmp.render())
        joinBlocksConMesProf.append(createMessage.render())
        joinBlocksConMesProf.append(createUserInformation.render())

        return joinBlocksConMesProf
    }
}

const join_blocks_CMP = new JoinBlocks()
export default join_blocks_CMP