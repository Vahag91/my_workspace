
import SideBar from 'widgets/SideBar'
import Board from 'widgets/Board'
import styles from './BoardPage.module.css'



const BoardPage: React.FC = () => {

    return (
        <div className={styles.board}>
            <SideBar />
            <Board />
        </div>
    )
}

export default BoardPage