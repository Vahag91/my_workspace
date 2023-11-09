import React from "react"
import styles from './Registration.module.css'
import {FaAccessibleIcon} from "react-icons/fa6";

const Registration: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <h2> Register</h2>
                <form>
                    <div  className={styles.form}>
                        
                    <div className={styles.formField}>
                         <input type="text" name="username" placeholder="username" />
                         <span><FaAccessibleIcon/> </span>
                    </div>
                    <div className={styles.formField}>
                   
                        <input type="email" name="email" placeholder="email" />
                        <span><FaAccessibleIcon/> </span>
                    </div>
                    <div className={styles.formField}>
                        
                        <input type="password" name="password" placeholder="password"/>
                        <span><FaAccessibleIcon/> </span>
                    </div>
                    </div>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Registration