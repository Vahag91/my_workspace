import { auth } from "../../../firebase";
import styles from './SignInGithub.module.css'
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa6";


const signInGithub: React.FC = () => {

    const signInGithub = async () => {
        const provider = new GithubAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err);

        }
    }

return (
    <button type='button' className={styles.githubBtn} onClick={signInGithub}>
    <FaGithub />
</button>
)
}


export default signInGithub