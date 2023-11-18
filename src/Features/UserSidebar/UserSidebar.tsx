import styles from './UserSidebar.module.css'
import { RegistrationProps } from '../Registration/Registration.inteface'


const UserSidebar: React.FC<RegistrationProps> = ({ user, handleSignOut }) => {

    return (
        <div className={styles.userSidebar}>

            {user ? (
                <>
                    <div className={styles.userInfo}>
                        <span> {user.displayName}</span>
                        {
                            user.photoURL ? (
                                <img src={user.photoURL} alt="userPhoto" />
                            ) : null
                        }

                    </div>

                    <div className={styles.userSettings}>
                        <ul>
                            <li> Managa Account</li>
                            <li> Cards </li>
                            <li>
                                <button type='button' onClick={handleSignOut}> Log Out</button>
                            </li>
                        </ul>
                    </div>
                </>
            ) : null}

        </div>
    )
}

export default UserSidebar