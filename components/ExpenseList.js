import Expense from './Expense'
import styles from '../styles/Home.module.css'

export default function ExpenseList({ expenseList }) {
    return (
        <div className={styles.expenseList}>
                    {expenseList.map((expense) => {
                        return (
                                <Expense 
                                key={expense.id} 
                                expense={expense} />
                                )}
                        )
                    }
                </div>
    )
}