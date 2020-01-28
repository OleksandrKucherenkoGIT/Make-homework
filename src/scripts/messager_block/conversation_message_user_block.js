import style from "./messager_block.scss"
import barTop from "./information_bar_top/information_bar_top.js";
import inboxCmp from "./conversation/conversation.js";

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
        
        // joinBlocks.append(barTop.render())
        joinBlocksConMesProf.append(inboxCmp.render())

        return joinBlocksConMesProf
    }
}

const join_blocks_CMP = new JoinBlocks()
export default join_blocks_CMP