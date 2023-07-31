import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.tittle}>-FAST REACT PIZZ CO.</h1>
                <p>OUR MENU</p>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone ove. all organic. all delicious. </p>
            </div>
        </div>
    )
}