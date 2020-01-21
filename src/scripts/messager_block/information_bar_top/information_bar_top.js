import style from "./information_bar_top.scss"

function HTML(html) {
    const div = document.createElement('div')
     div.className = "BarTopBlock"
    div.innerHTML = html
    return div
}

class BarTop {
    render() {
        const dataLeftMenu = [{src:'inbox', title: 'Inbox (2)'}, {src:'telegram', title: 'Sent'}, {src:'delete', title: 'Trash'}]
        let barTopMenu = HTML(`
              <main class="main">
                <nav class="main__nav">
                    <ul class="main__nav__menu">
                        <ul class="main__nav__left-menu">
                            <li class="main__nav__left-menu__item inbox">
                                 <a href="#" class="main__nav__left-menu__link">
                                     <i class="fas fa-inbox"></i> Inbox (2)
                                </a>                                    
                            </li>
                            <li class="main__nav__left-menu__item">
                                 <a href="#" class="main__nav__left-menu__link sent">
                                     <i class="far fa-paper-plane"></i> Sent
                                </a>                                    
                            </li> 
                            <li class="main__nav__left-menu__item">
                                 <a href="#" class="main__nav__left-menu__link delete">
                                     <i class="fas fa-trash"></i> Trash
                                </a>                                    
                            </li>                                                           
                        </ul>
                        <ul class="main__nav__right-menu">                           
                            <li class="main__nav__right-menu__item">
                                <a href="#" class="main__nav__right-menu__link">
                                    Filter messages:
                                </a>
                            </li>
                            <li class="main__nav__right-menu__item">
                                <a href="#" class="main__nav__right-menu__link filter-btn">
                                    Date
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </main>
        `)
        return barTopMenu
    }
}

const barTop = new BarTop()
export default  barTop