import InputText from '../components/InputText'
import styles from '../styles/Home.module.css'

export default function Home() {

  
  const handleChange = (e) => {
    console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.hero}>
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
