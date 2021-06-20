import { useRef } from 'react';
import { Form, Field } from 'react-final-form';
import styles from '../styles/Home.module.css';

export default function ExpenseForm({ onSubmit, nameInputRef }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, reset }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.expenseForm}>
            <div className={styles.nameInput}>
              <label>Name</label>
              <Field
                name='name'
                component='input'
                type='text'
                placeholder='Name'
                ref={nameInputRef}
              />
            </div>
            <div className={styles.amountInput}>
              <label>Amount</label>
              <Field
                name='amount'
                component='input'
                type='text'
                placeholder='Amount'
              />
            </div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      )}
    />
  );
}
