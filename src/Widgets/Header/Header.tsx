import React from "react"
import styles from './Header.module.css'
import { FaSistrix, FaList, FaClipboardUser, FaRegBell, FaRegCircleQuestion } from "react-icons/fa6";

const Header: React.FC = () => {

    return (
        <header>
            <nav className={styles.navBar}>

                <ul className={styles.navList}>
                    <li> <a href="#"> <span><FaList /> </span></a></li>
                    <li> <a href="#"> <span><FaClipboardUser /> Trello</span></a></li>
                    <li> <a href="#"> <span>Workspaces</span></a></li>
                    <li> <a href="#"> <span>Recent </span></a></li>
                    <li> <a href="#"> <span>Shared Boards</span></a></li>
                    <li> <a href="#"> <span>Templates</span></a></li>
                </ul>


                <div className={styles.navList}>
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="      Search" />
                        <span className={styles.searchIcon}><FaSistrix /></span>
                    </div>
                    <div>
                        <ul className={styles.navIcons}>
                            <li> <a href="#"> <span><FaRegBell /></span></a></li>
                            <li> <a href="#"> <span><FaRegCircleQuestion /></span></a></li>
                            <li> <a href="#"> <span>Icon</span></a></li>
                        </ul>

                    </div>
                </div>

            </nav>
        </header>
    )
}


export default Header