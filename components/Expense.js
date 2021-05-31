import styles from '../styles/Home.module.css'

export default function Expense({ expense, removeExpense }) {
    const handleClick = (e) => {
        removeExpense(expense.id)
    }
    
    return (
        <div className={styles.expense}>
            <p>{expense.name} - ${expense.amount}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}