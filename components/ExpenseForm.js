import { Form, Field } from 'react-final-form'

export default function ExpenseForm({ onSubmit }) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit })=> (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <Field 
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                        <label>Amount</label>
                        <Field 
                            name="amount"
                            component="input"
                            type="text"
                            placeholder="Amount"
                        />
                        <button type="submit">
                        Submit
                        </button>

                    </div>
                </form>
            )} 
        />

    )
}