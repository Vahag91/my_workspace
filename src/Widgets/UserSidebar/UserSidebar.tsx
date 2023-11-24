import styles from './UserSidebar.module.css'
import { RegistrationProps } from 'features/Registration/Registration.inteface'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { setIsLogged } from 'userSlice'


const UserSidebar: React.FC<RegistrationProps> = () => {


    const userEmail = useSelector((state:RootState)=>{
        return state.user.email
    })
    const userName = useSelector((state:RootState)=>{
        return state.user.username
    })
    

    const dispatch = useDispatch()


    const isLogged = useSelector((state:RootState)=>{
        return state.user.isLogged
    })
    
    return (
        <div className={styles.userSidebar}>

            {isLogged ?  (
                <>
                    <div className={styles.userInfo}>
                        <span> {userName}</span>
                        <span> {userEmail}</span>
                        
                        {/* {
                            user.photoURL ? (
                                <img src={user.photoURL} alt="userPhoto" />
                            ) : null
                        } */}

                    </div>

                    <div className={styles.userSettings}>
                        <ul>
                            <li> Managa Account</li>
                            <li> Cards </li>
                            <li>
                                <button type='button' onClick={()=> dispatch(setIsLogged())}> Log Out</button>
                            </li>
                        </ul>
                    </div>
                </>
            ) : null}

        </div>
    )
}

export default UserSidebar