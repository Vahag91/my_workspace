import React from "react"
import styles from './Registration.module.css'
import { FaUser, FaPaperPlane, FaLock } from "react-icons/fa6";

const Registration: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <h2> Register</h2>
                <form>
                    <div className={styles.form}>

                        <div className={styles.formField}>
                            <input type="text" name="username" placeholder="username" />
                            <span><FaUser /> </span>
                        </div>
                        <div className={styles.formField}>

                            <input type="email" name="email" placeholder="email" />
                            <span><FaPaperPlane /> </span>
                        </div>
                        <div className={styles.formField}>

                            <input type="password" name="password" placeholder="password" />
                            <span><FaLock /> </span>
                        </div>
                        <p>Forgot password? <a href="#">Click Here!</a></p>
                    </div>
                    <div className={styles.btnGroup}>
                        <button> Sign up</button>
                        <button> Log in </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Registration