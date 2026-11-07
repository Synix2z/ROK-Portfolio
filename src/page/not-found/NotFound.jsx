import { Link } from 'react-router-dom'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Page not found.</p>
      <Link to="/" className={styles.button}>Back to home</Link>
    </div>
  )
}