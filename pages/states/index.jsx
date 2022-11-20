import React, { useContext } from 'react'
import NomadeContext from '../../components/context/nomadeContext'
import styles from './styles.module.scss'
import Favorite from '../../public/favorite.svg'
import Bell from '../../public/bell.svg'
import Safe from '../../public/section3.png'
import Input from '../../components/InputText'
import Card from '../../public/cardBairro.png'
import Evaluation from '../../public/evaluation.png'
import Image from 'next/image'
import Button from '../../components/Button'

const States = () => {
  const { info } = useContext(NomadeContext);

  console.log('info', info[0].safetyScores)
  const safetyScoresKeys = Object.keys(info[0].safetyScores)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <Input
            type="text"
            placeholder="Search"
            name="typeText"
          />
        </section>
        <section className={styles.location}>
          <div className={styles.infoCity}>

            <h1>{info[0]?.name}</h1>
            <div className={styles.options}>
              <div className={styles.rate}>

                <Favorite />
                5.0
                <span className={styles.rateTotal}>
                  /5.0
                </span>
              </div>
              <Bell />
            </div>
          </div>
          <div className={styles.subtitle}>
            <p>Cidade</p>
            <p>Região Sudeste</p>
            <p>0 km</p>
          </div>
        </section>
        <section className={styles.safe}>
          <Image src={Safe} />
        </section>
        <section className={styles.bairros} >
          <h1>
            Bairros
          </h1>
          <div className={styles.cards}>
            <Image alt='desc' src={Card} />
            <Image alt='desc' src={Card} />
          </div>
        </section>
        <section className={styles.rates}>
          <h1>Avaliações</h1>
          <span className={styles.btns}>
            <Button variant='secondary'>{safetyScoresKeys[2]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[0]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[6]}</Button>
            <Button variant='secondary'>{safetyScoresKeys[5]}</Button>
          </span>
          <Button variant='third'>Fazer uma avaliação</Button>
        </section>
        <section className={styles.evaluation}>
          <Image alt='desc' src={Evaluation} />
        </section>
      </div>
    </div>
  )
}

export default States