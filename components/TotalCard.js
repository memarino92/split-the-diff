import styles from '../styles/Home.module.css'

export default function TotalCard({ title, defaultValue, value, handleChange }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>
              $<input 
                type="text"  
                value={value}
                onChange={handleChange} /> 
            </p>
          </div>
    )
}