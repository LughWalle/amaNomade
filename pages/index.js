import InputText from '../components/InputText'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <InputText
            type="text"
            placeholder="Search"
            name="typeText"
          />
        </section>
        <section className={styles.location}>
          <div className={styles.infoCity}>

            <h1>Home</h1>
            
          </div>
        </section>
      </div>
    </div>
  )
}
