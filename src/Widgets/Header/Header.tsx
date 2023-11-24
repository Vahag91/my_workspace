import React, { useState } from "react";

import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { FaSistrix, FaList, FaClipboardUser, FaRegBell, FaRegCircleQuestion } from "react-icons/fa6";
import { RegistrationProps } from "features/Registration/Registration.inteface";
import UserSidebar from "widgets/UserSidebar";


const Header: React.FC<RegistrationProps> = ({ user, handleSignOut }) => {

    const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false)

    const handleUserMenuOpeb = (): void => {
        setUserMenuOpen(!userMenuOpen)
    }

    return (
        <header>
            <nav className={styles.navBar}>

                <ul className={styles.navList}>
                    <li> <Link to="#"> <span><FaList /> </span></Link></li>
                    <li> <Link to="#"> <span><FaClipboardUser /> Trello</span></Link></li>
                    <li> <Link to="board"> <span>BoardPage</span></Link></li>
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
                            <li> <Link to="#"> <span><FaRegBell /></span></Link></li>
                            <li> <Link to="#"> <span><FaRegCircleQuestion /></span></Link></li>

                            <li>
                                <div className={styles.userPhoto} onClick={handleUserMenuOpeb}>
                                    {user?.photoURL ? (
                                        <img src={user?.photoURL} alt="Userphoto" />
                                    ) : null}

                                </div>
                            </li>
                        </ul>
                        {userMenuOpen ? (
                            <UserSidebar handleSignOut={handleSignOut} user={user} />
                        ) : null}

                    </div>
                </div>

            </nav>

        </header>
    )
}


export default Header