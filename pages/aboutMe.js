import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <>
     <div className={styles.landingpage}>
        <div className={styles.main}>
        <div className={styles.imageContent}>
            <picture>
              <source srcSet="/vins.jpg" />
              <img className={styles.image} src="/vin.jpg" alt='kevina'/>
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
              <p>As a Full Stack Developer at Sokrates, I leverage my expertise in Angular, PostgreSQL, and backend development to deliver innovative solutions and enhance user experiences. Working with cross-functional teams, I design and develop user-friendly frontend interfaces and create scalable applications using Lambda API on AWS. With experience across various domains, including finance, extracurricular activities, library management, and attendance tracking, I have gained proficiency in technologies such as Angular, PostgreSQL, JavaScript, DynamoDB, Serverless, and Luckysheet. As a proactive team player, I prioritize collaboration and stay updated on the latest technologies to ensure our solutions meet our clients' evolving needs.</p>
            </div>
            <a className={styles.sokratesLogo} href='https://sokrates.id/'><Image src="/sokrates.png" width={300} height={100} alt='sokrates logo'/></a>
          </div>
         
         
          <h3 className={styles.programmingTitle}>Programming Language</h3>
          <br/>

          <div className={styles.programmingLogo}>
           
           <div className={styles.listLang}>
            <p>Python - R - Tableau</p>
            <p>Front-End - Angular - Next</p>
            <p>DynamoDB - PostgreSQL - SQL</p>
           </div>
            
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
