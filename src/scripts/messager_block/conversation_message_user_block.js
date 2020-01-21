import style from "./messager_block.scss"
import barTop from "./information_bar_top/information_bar_top.js";
import inboxCmp from "./conversation/conversation.js";

function HTML(html) {
    const div = document.createElement('div')
    div.className = "joinBlocks"
    div.innerHTML = html
    return div
}

class JoinBlocks {
    render() {
        let joinBlocks = HTML(`    
        
        `)
        
        joinBlocks.append(barTop.render())
        joinBlocks.append(inboxCmp.render())

        return joinBlocks
    }
}

const join_blocks = new JoinBlocks()
export default join_blocks