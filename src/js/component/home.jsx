import React from 'react'
import styles from './home.module.css'
import Clock from './Clock.jsx'

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className={styles.container}>
      <Clock />
    </div>
  )
}

export default Home
