import styles from '../styles/Home.module.css';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';

export default function TotalCard({
  title,
  onSubmit,
  arrayOfExpenses,
  removeExpense,
  total,
}) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>
        <ExpenseForm onSubmit={onSubmit} />
      </div>
      <div>
        <ExpenseList
          expenseList={arrayOfExpenses}
          removeExpense={removeExpense}
        />
      </div>
      <h2 className={styles.total}>Total: ${total}</h2>
    </div>
  );
}
