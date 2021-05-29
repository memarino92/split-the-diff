import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Headline from '../components/Headline'
import TotalCard from '../components/TotalCard'
import Footer from '../components/Footer'
import ResultCard from '../components/ResultCard'

export default function Home() {
  //declare state variables
  const [totalOne, setTotalOne] = useState(0)
  const [totalTwo, setTotalTwo] = useState(0)
  
  const [listOfTotalsOne, setListOfTotalsOne] = useState([])
  const [listOfTotalsTwo, setListOfTotalsTwo] = useState([])

  //declare event handlers
  const handleTotalOneChange = (e) => {
    setTotalOne(Number(e.target.value))
  }
  const handleTotalTwoChange = (e) => {
    setTotalTwo(Number(e.target.value))
  }
  
  const handleTotalOneSubmit = (e) => {
    e.preventDefault();
    setListOfTotalsOne([...listOfTotalsOne, totalOne])
  }
  const handleTotalTwoSubmit = (e) => {
    e.preventDefault();
    setListOfTotalsTwo([...listOfTotalsTwo, totalTwo])
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
          handleChange={handleTotalOneChange}
          handleSubmit={handleTotalOneSubmit} 
          listOfTotals={listOfTotalsOne} />

          <TotalCard 
          title="Total Two"
          handleChange={handleTotalTwoChange}
          handleSubmit={handleTotalTwoSubmit}
          listOfTotals={listOfTotalsTwo} />

          <ResultCard 
          totalOne={listOfTotalsOne.reduce((total, num) => total + num, 0)}
          totalTwo={listOfTotalsTwo.reduce((total, num) => total + num, 0)} />
        </div>
      </main>
      <Footer />      
    </div>
  )
}
