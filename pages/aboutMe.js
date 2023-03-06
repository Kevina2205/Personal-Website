import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <>
     <div className={styles.landingpage}>
        <div className={styles.main}>
        <div className={styles.imageContent}>
            <picture>
              <source srcSet="/vina.jpg" />
              <img className={styles.image} src="/vina.jpg" alt='astronaut image'/>
            </picture>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.name}>KEVINA NUGRAHA ELEEAS</h1>
              <h6 className={styles.resumeSummary}>Data Science graduate with progressive experienced in modelling and data analysis.  Relevant skills include data understanding, machine learning, problem solving, and creative thinking. Seeking a challenging and career-developing role as an data scientist.</h6>
          </div>
        </div>


        <div className={styles.programmingLanguage}>
          <div className={styles.sokrates}>
            <div className={styles.sokratesDesc}>
              <h3>Experience</h3>
              <h5>Associate Member of IT Division Bina Nusantara</h5>
              <p>Designed, developed, and maintained front-end and back-end applications utilizing Angular JS, PostgreSQL, and Dynamo DB. Moreover, I collaborated with my Sokrates Team which are part of BINUS Creates. I also helped evolve front-end and back-end stacks.</p>
            </div>
            <a href='https://sokrates.id/'><Image src="/sokrates.png" width={300} height={100} alt='sokrates logo'/></a>
          </div>
          <br/>
          <br/>
          <br/>
          <h3 className={styles.programmingTitle}>Programming Language</h3>
          <br/>
          <div className={styles.programmingLogo}>
            <div className={styles.proglogo1}>
              <Image src="/python.png" width={200} height={100} alt='python logo'/>
              <Image src="/r.png" width={70} height={50} alt='r logo'/>
              <Image src="/htmlcssjs.png" width={180} height={60} alt='html css js logo'/>
              <Image src="/angular.png" width={80} height={80} alt='angular logo'/>
              <Image src="/next.png" width={100} height={50} alt='nextJS logo'/>
            </div>
            <div className={styles.proglogo2}>
                <Image src="/dynamo.png" width={200} height={80} alt='dynamoDB logo'/>
                <Image src="/tableau.png" width={200} height={100} alt ='tableau logo'/>
                <Image src="/postgresql.png" width={80} height={60} alt ='postgresql logo'/>
              <Image src="/sql.png" width={100} height={50} alt='sql logo'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
