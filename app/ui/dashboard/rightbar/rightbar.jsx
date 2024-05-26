import { MdPlayCircleFilled } from 'react-icons/md'
import styles from './rightbar.module.css'
import Image from 'next/image'

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the dashboard</h3>
                    <span className={styles.subtitle}>
                        Takes 3m to learn
                    </span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea sequi vitae sunt architecto alias magnam recusandae ab, accusantium quam, quisquam.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the dashboard</h3>
                    <span className={styles.subtitle}>
                        Takes 3m to learn
                    </span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea sequi vitae sunt architecto alias magnam recusandae ab, accusantium quam, quisquam.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>Watch
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Rightbar