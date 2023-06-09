import React, { useEffect, useState } from 'react'
import styles from './Clock.module.css'
import ClockDisplay from './ClockDisplay.jsx'

const Clock = () => {
  const [count, setCount] = useState(0)
  const digits = count.toString().split('')
  if (digits.length < 5) digits.unshift(...Array(5 - digits.length).fill(0))

  useEffect(() => {
    const interval = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    )

    return () => clearInterval(interval)
  })

  return (
    <div className={styles.container}>
      <ClockDisplay value={<i className='bi bi-clock'></i>} />

      {digits.map((value, index) => (
        <ClockDisplay value={value} key={index} />
      ))}
    </div>
  )
}

export default Clock
