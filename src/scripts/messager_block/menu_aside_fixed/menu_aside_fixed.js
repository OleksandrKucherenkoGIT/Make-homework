import style from "./menu_aside_fixed.scss"

function HTML(html) {
    const div = document.createElement('div')
    div.className = "asideMenuBlock"
    div.innerHTML = html
    return div
}

class AsideMenu {
    render() {
        let asideMenu = HTML(`
            <aside class="aside">
                <nav class="aside__nav">
                    <ul class="aside__nav__menu">
                        <li class="aside__nav__menu__item">
                            <a href="#">
                               <i class="fas fa-home"></i>
                            </a>
                         </li>     
                          <li class="aside__nav__menu__item">
                            <a href="#">
                               <i class="fas fa-bars"></i>
                            </a>
                         </li>
                         <li class="aside__nav__menu__item">
                            <a href="#">
                               <i class="fas fa-chart-line"></i>
                            </a>
                         </li>
                          <li class="aside__nav__menu__item">
                            <a href="#">
                               <i class="fas fa-envelope"></i>
                            </a>
                         </li>   
                         <li class="aside__nav__menu__item">
                            <a href="#">
                               <i class="fas fa-user-friends"></i>
                            </a>
                         </li>                                                     
                    </ul>
                </nav>
            </aside>        
        `)
        return asideMenu
    }
}

const asideMenuModule = new AsideMenu()
export default  asideMenuModule