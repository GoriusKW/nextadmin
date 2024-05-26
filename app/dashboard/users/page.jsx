
import Search from "@/app/ui/dashboard/searchcomponent/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"


const UsersPage = () => {
    return (
        <div className={styles.container}>
                    <div className={styles.top}>
                        <Search placeholder="Search for a user..."/>
                        <Link href="/dashboard/users/add"></Link>
                        <button className={styles.addButton}>Add User</button>
                    </div>   
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <td>Name</td>   
                                <td>Email</td>
                                <td>Created At</td>
                                <td>Role</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className={styles.user}>
                                    <Image src="/noavatar.png" width={40} height={40} className={styles.userimage}/>
                                    John Boy
                                    </div>
                                </td>
                                <td>john@boy.com</td>
                                <td>2002/12/44</td>
                                <td>Admin</td>
                                <td>Alive</td>
                                <td>
                                <Link href="/"></Link>
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                                <Link href="/"></Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td><div className={styles.user}>
                                    <Image src="/noavatar.png" width={40} height={40} className={styles.userimage}/>
                                    Michele Myers
                                    </div>
                                </td>
                                <td>mich@myers.com</td>
                                <td>2002/12/44</td>
                                <td>User</td>
                                <td>Alive</td>
                                <td>
                                <Link href="/"></Link>
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                                <Link href="/"></Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </div>

    )
}

export default UsersPage

