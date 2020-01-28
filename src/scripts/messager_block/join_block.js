import style from "./messager_block.scss"
import barTop from "./information_bar_top/information_bar_top.js";
import join_blocks_CMP from "./conversation_message_user_block.js";

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
        joinBlocks.append(join_blocks_CMP.render())

        return joinBlocks
    }
}

const join_blocks = new JoinBlocks()
export default join_blocks