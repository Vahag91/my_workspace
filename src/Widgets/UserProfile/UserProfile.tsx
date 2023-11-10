import React from "react"
import styles from './UserProfile.module.css'

const UserProfile: React.FC = () => {

    return (
        <div className={styles.user}>
            <div className={styles.userDetails}>

                <div className={styles.userProfile}>
                    <img src="https://animalworld.com.ua/images/2009/October_09/Animal/Cynomys_ludovicianus/Cynomys_ludovicianus_5.jpg" alt="user photo" />
                </div>

                <div className={styles.userInfo}>
                    <h2> User name</h2>
                    <p> @example@gmail.com</p>
                </div>
            </div>

            <form >
                <div className={styles.form}>
                    <div>
                        <label htmlFor="name"> Name</label>
                        <input type="text" placeholder="Name" id="name" />
                    </div>

                    <div>
                        <label htmlFor="email">Email </label>
                        <input type="email" placeholder="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="about"> About Me </label>
                        <input type="text" id="about" />
                    </div>

                    <div>
                        <label htmlFor="password"> Change password </label>
                        <input type="password" id="password" />
                        <input type="password" id="password" />
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <button>Submit</button>
                </div>
            </form>



        </div>

    )
}


export default UserProfile