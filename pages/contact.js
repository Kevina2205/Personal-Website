import styles from '../styles/contact.module.css'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <div className={styles.contactPage}>
        <h1 className={styles.contactTitle}>Let&apos;s make something great together.</h1>
        
        <div className={styles.boxes}>

          
            <div className={styles.box}>
              <a className={styles.link}  href='https://mail.google.com'>
                <div className={styles.details}>
                  <h4>gmail</h4>
                  <h4>kevina.eleeas@gmail.com</h4>
                </div>
              </a>
              <a className={styles.link}  href='https://mail.google.com'>
              <Image width={50} height={40} alt="Gmail Logo" src="/gmail.png" />
              </a>
            </div>
          

          
            <div className={styles.box}>
              <a className={styles.link}  href='https://github.com/Kevina2205'>
                <div className={styles.details}>
                  <h4>github</h4>
                  <h4>Kevina2205</h4>
                </div>
              </a>
              <a className={styles.link}  href='https://github.com/Kevina2205'>
              <Image width={50} height={50} alt="Github Logo" src="/github.png" />
              </a>
            </div>
          

          
            <div className={styles.box}>
            <a className={styles.link}  href='https://www.linkedin.com/in/kevina-nugraha-eleeas-3044b51b9'>
              <div className={styles.details}>
                <h4>linkedin</h4>
                <h4>Kevina Nugraha Eleeas</h4>
              </div>
              </a>
              <a className={styles.link}  href='https://www.linkedin.com/in/kevina-nugraha-eleeas-3044b51b9'>
              <Image width={50} height={50} alt="LinkedIn Logo" src="/linkedin.png" />
              </a>
            </div>
          
        </div>
      </div>
    </>
  )
}