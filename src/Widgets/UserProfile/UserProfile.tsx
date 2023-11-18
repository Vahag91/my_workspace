import React from "react"
import styles from './UserProfile.module.css'
import { UserPageProps } from "../../features/Registration/Registration.inteface"

const UserProfile: React.FC<UserPageProps> = ({ user }) => {

    return (
        <div className={styles.user}>
            <div className={styles.userDetails}>
                {user ? (
                    <>
                        <div className={styles.userProfile}>
                            {user.photoURL ? (
                            <img src={user.photoURL} alt="user" />
                            ): null
                            }

                        </div>

                        <div className={styles.userInfo}>
                            <h2> {user.displayName}</h2>
                            <p> {user.email}</p>
                        </div>
                    </>
                ): null
}

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