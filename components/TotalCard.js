import styles from '../styles/Home.module.css'
import ExpenseList from './ExpenseList'

export default function TotalCard({ title, handleChange, handleSubmit, listOfTotals }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>
              <form onSubmit={handleSubmit}>
                $<input 
                  type="text"
                  onChange={handleChange} /> 
              </form>
            </p>
            <p>
              <ExpenseList 
              expenseList={listOfTotals} />
            </p>
          </div>
    )
}