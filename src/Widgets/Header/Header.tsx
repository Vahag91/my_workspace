import React from "react"
import { Link } from "react-router-dom";
import styles from './Header.module.css'

import { FaSistrix, FaList, FaClipboardUser, FaRegBell, FaRegCircleQuestion } from "react-icons/fa6";

const Header: React.FC = () => {

    return (
        <header>
            <nav className={styles.navBar}>

                <ul className={styles.navList}>
                    <li> <a href="#"> <span><FaList /> </span></a></li>
                    <li> <a href="#"> <span><FaClipboardUser /> Trello</span></a></li>
                    <li> <Link to="/"> <span>MainPage</span></Link></li>
                    <li> <Link to="/user"> <span>User</span></Link></li>
                    <li> <Link to="/registration"> <span>Registration </span></Link></li>
                    <li> <Link to="/workspace"> <span>Workspace</span></Link></li>
                    
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