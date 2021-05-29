import styles from '../styles/Home.module.css'

export default function ResultCard({ totalOne, totalTwo }) {
    return (
        <div className={styles.card}>
            <h2>Split the Diff!</h2>
            {totalOne < totalTwo ?
            <>
                <p>
                1 &rarr; 2
                <br />
                ${(totalTwo - totalOne) / 2}
                </p>
            </> 
            :
            <>
                <p>
                1 &larr; 2
                <br />
                ${(totalOne - totalTwo) / 2}
                </p>
            </>}
      </div>   
    )
}