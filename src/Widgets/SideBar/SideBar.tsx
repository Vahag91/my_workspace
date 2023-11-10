import React from "react";
import styles from "./SideBar.module.css"
import { FaClipboardUser, FaClone, FaHouseUser, FaShieldHeart, FaEye, FaPeopleGroup, FaScrewdriverWrench } from "react-icons/fa6";
const SideBar: React.FC = () => {

    return (
        <div className={styles.sideBar}>

            <div className={styles.sideBarHead}>
                <ul>
                    <li>
                        <a href="#"><span> <FaClipboardUser /> Boards</span> </a>
                    </li>
                    <li>
                        <a href="#"><span> <FaClone /> Template</span> </a>
                    </li>
                    <li>
                        <a href="#"><span> <FaHouseUser /> Home</span> </a>
                    </li>

                </ul>
            </div>

            <div className={styles.sideBarBody}>
                <ul>
                    <li>
                        <a href="">
                            <span> Main
                            </span> </a>


                        <ul>
                            <li>  <a href="#"><span><FaClipboardUser /> Boards</span> </a></li>
                            <li>  <a href="#"><span><FaShieldHeart /> Highlights</span> </a></li>
                            <li>  <a href="#"><span><FaEye /> Views</span> </a></li>
                            <li> <a href="#"><span><FaPeopleGroup /> Members</span> </a></li>
                            <li> <a href="#"><span><FaScrewdriverWrench /> Settings</span> </a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SideBar