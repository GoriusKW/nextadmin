import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.44</span>
                <span className={styles.detail}>What are we puttin gin the longer detail</span>
                <span className={styles.positive}>12 more than last week</span>
                <div>
                    <div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Card