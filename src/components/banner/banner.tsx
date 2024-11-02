import AboutButton from '../button/about-button/about'
import ContactButton from '../button/contact-button/contact'
import Header from '../header'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={`${styles.bannerPosition} container`}>
        <Header />
        <div className={styles.bannerCopy}>
          <h1>Sales Martins</h1>
          <p>
            Aqui acreditamos que a justiça deve ser acessível, transparente e
            aliada à empatia.
          </p>

          <div className={styles.bannerButton}>
            <ContactButton />
            <AboutButton content="Saiba mais sobre nós" anchor={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
