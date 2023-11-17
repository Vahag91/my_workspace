import { FC } from 'react'
import { auth } from '../../firebase'
import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import styles from './SignIn.module.css'
import { FaGithub,FaGooglePlus  } from "react-icons/fa6";



const SignIn: FC = () => {


    const signInGoogle = async () => {
        const provider = new GoogleAuthProvider()


        try {
            await signInWithPopup(auth, provider)
        } catch(err){
            console.log(err, "hhhhhh");
            
        }
    }

    
    const signInGithub = async () => {
        const provider = new GithubAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch(err){
            console.log(err);
            
        }
    }

    return (

        <div className={styles.regBtn}>
            <span> Or Sign in with</span>
            <div>
        <button type='button' className={styles.googleBtn} onClick={signInGoogle}>
           <FaGooglePlus/>
        </button>

        <button type='button' className={styles.githubBtn} onClick={signInGithub}>
            <FaGithub/>
        </button>
        </div>
        </div>
    )

}

export default SignIn