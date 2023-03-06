import styles from '../styles/mainPage.module.css'

export default function LandingPage() {
  return (
    <>
     <div className={styles.landingpage}>
        <div className={styles.main}>
          <h1 className={styles.mainText}>Hi. I&apos;m Kevina. I am a data scientist, programmer, and traveller.</h1>
          <div className={styles.imageContent}>
            <picture>
              <source srcSet="/astronauts.jpg" />
              <img className={styles.image} src="/astronauts.jpg" alt='astronaut image'/>
            </picture>
            
          </div>

        </div>
      </div>
    </>
  )
}
