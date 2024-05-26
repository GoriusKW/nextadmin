import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
    return (
        <div className={styles.container}>          
            <h2 className={styles.title}>Latest Transactions</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Status</td>
                            <td>Date</td>
                            <td>Amount</td>
                        </tr>
                   </thead>
                    <tbody>
                        <tr>
                            <div className={styles.user}>
                                <td><Image 
                                src="/noavatar.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                                />John Doe
                                </td>
                              </div>  
                            <td>
                                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                            </td>
                            <td>14.03.2023</td>
                            <td>$400</td>
                        </tr>
                        <tr>
                           <div className={styles.user}>
                                <td><Image 
                                src="/noavatar.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                                />Jason Borne
                                </td>
                            </div>   
                            <td>
                                <span className={`${styles.status} ${styles.done}`}>Done</span>
                            </td>
                            <td>15.05.2023</td>
                            <td>$100</td>                          
                        </tr>
                        <tr>
                            <div className={styles.user}>
                                <td><Image 
                                src="/noavatar.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                                />Mary Mish
                                </td>
                            </div>
                            <td>
                                <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                            </td>
                            <td>15.05.2023</td>
                            <td>$1200</td>                           
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Transactions