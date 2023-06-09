import React from 'react'
import styles from './ClockDisplay.module.css'

const ClockDisplay = ({ value }) => {
  return <div className={styles.container}>{value}</div>
}

export default ClockDisplay
