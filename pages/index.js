import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Headline from '../components/headline'
import TotalCard from '../components/totalCard'
import Footer from '../components/footer'
import ResultCard from '../components/resultCard'

export default function Home() {
  //declare state variables
  const [totalOne, setTotalOne] = useState(10)
  const [totalTwo, setTotalTwo] = useState(20)

  //declare event handlers
  const handleTotalOneChange = (e) => setTotalOne(e.target.value)
  const handleTotalTwoChange = (e) => setTotalTwo(e.target.value)

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
          defaultValue={totalOne}
          value={totalOne}
          handleChange={handleTotalOneChange} />

          <TotalCard 
          title="Total Two"
          defaultValue={totalTwo}
          value={totalTwo}
          handleChange={handleTotalTwoChange} />

          <ResultCard 
          totalOne={totalOne}
          totalTwo={totalTwo} />
        </div>
      </main>
      <Footer />      
    </div>
  )
}
