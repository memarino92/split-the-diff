import styles from '../styles/Home.module.css'

export default function Expense({ expense }) {
    return (
        <div className={styles.expense}>
            <p>${expense}</p>
        </div>
    )
}