import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useRef } from 'react'
import Headline from '../components/Headline'
import TotalCard from '../components/TotalCard'
import Footer from '../components/Footer'
import ResultCard from '../components/ResultCard'

export default function Home() {
  //declare state variables
  const [totalOne, setTotalOne] = useState(0)
  const [totalTwo, setTotalTwo] = useState(0)
  
  const [arrayOfExpensesOne, _setArrayOfExpensesOne] = useState([])
  const arrayOfExpensesOneRef = useRef(arrayOfExpensesOne)
  const setArrayOfExpensesOne = (data) => {
    arrayOfExpensesOneRef.current = data
    _setArrayOfExpensesOne(data)
  }

  const [arrayOfExpensesTwo, _setArrayOfExpensesTwo] = useState([])
  const arrayOfExpensesTwoRef = useRef(arrayOfExpensesTwo)
  const setArrayOfExpensesTwo = (data) => {
    arrayOfExpensesTwoRef.current = data
    _setArrayOfExpensesTwo(data)
  }


  //declare event handlers
  const onTotalOneSubmit = (values) => {
    values.amount = Number(values.amount)
    setArrayOfExpensesOne([...arrayOfExpensesOne, values])
    setTotalOne(arrayOfExpensesOneRef.current.reduce((total, num) => total + num.amount, 0))
  }
  const onTotalTwoSubmit = (values) => {
    values.amount = Number(values.amount)
    setArrayOfExpensesTwo([...arrayOfExpensesTwo, values])
    setTotalTwo(arrayOfExpensesTwoRef.current.reduce((total, num) => total + num.amount, 0))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Split the Diff</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline />

        <div className={styles.grid}>
          <TotalCard 
          title="Total One"
          onSubmit={onTotalOneSubmit} 
          arrayOfExpenses={arrayOfExpensesOne} 
          total={totalOne} />
          

          <TotalCard 
          title="Total Two"
          onSubmit={onTotalTwoSubmit}
          arrayOfExpenses={arrayOfExpensesTwo} 
          total={totalTwo} />

          <ResultCard 
          totalOne={totalOne}
          totalTwo={totalTwo} />
        </div>
      </main>
      <Footer />      
    </div>
  )
}
