import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/project.module.css'

export default function ProjectList() {
  return (
    <Accordion className={styles.accordion}>
      <Accordion.Item eventKey="0" className={styles.accordionItems}>
        <Accordion.Header>Student Academic Plan Decision Making Algorithm</Accordion.Header>
        <Accordion.Body>
          Student Academic Plan Decision Making Algorithm project aims to help students get the best academic plans for themselves so they can graduate on time by considering several factors such as work status, being active in campus organizations, paying fees, and others. I made this project with my team while participating in the Data Analysis competition from Padjajaran University, our team also became a finalist in the event.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={styles.accordionItems}>
        <Accordion.Header>Fam Diner Website</Accordion.Header>
        <Accordion.Body>
          Fam Diner Website is a food restaurant website that I made for my project assignment in IT Division Bina Nusantara University. This website is my first website built using HTML, CSS, and JS.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className={styles.accordionItems}>
        <Accordion.Header>Decision Tree Algorithm to Calculate the Heart Disease Potential</Accordion.Header>
        <Accordion.Body>
         This project is designed to predict a person&apos;s potential to have heart disease using a decision tree method based on certain factors. In addition, this decision tree can be used for predictions with an accuracy score of around 85%. This project can be access in <a href='https://rpubs.com/KevinaEleeas/923928'>https://rpubs.com/KevinaEleeas/923928</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className={styles.accordionItems}>
        <Accordion.Header>Car Price Model Prediction</Accordion.Header>
        <Accordion.Body>
          In this project, I created a model to predict car prices by considering several factors. In addition, this model can be used for predictions with an accuracy score of 81%.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className={styles.accordionItems}>
        <Accordion.Header>Corona Virus Pandemic Data Analysis</Accordion.Header>
        <Accordion.Body>
          Corona virus pandemic in 2020 data analysis, include how this virus spread world wide, why positive cases in India increased drastically, and how to handle this pandemic based on data and verivied informations. This project can be access in <a href='https://public.tableau.com/app/profile/kevina.nugraha.eleeas/viz/2540120585_FinalExam/2540120585_FinalExam'>https://public.tableau.com/app/profile/kevina.nugraha.eleeas/viz/2540120585_FinalExam/2540120585_FinalExam</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className={styles.accordionItems}>
        <Accordion.Header>Data Science Club Website</Accordion.Header>
        <Accordion.Body>
        Website untuk UKM yang jurusan saya buat
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className={styles.accordionItems}>
        <Accordion.Header>Airline Passenger Satisfaction Prediction</Accordion.Header>
        <Accordion.Body>
          I created a model to predict airline passenger satisfaction depending on several airline services. This project aims to help airlines get more customers by increasing passenger satisfaction through its services.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className={styles.accordionItems}>
        <Accordion.Header>Air Pollution in Jakarta Classification</Accordion.Header>
        <Accordion.Body>
          I created an air pollution classification model, so we can get information about how the air condition is in Jakarta. Since live with air pollutants lead to pneumonia, I hope this project can help people to choose the right place to buy a house, especially with good air quality.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" className={styles.accordionItems}>
        <Accordion.Header>Cat Mobile App</Accordion.Header>
        <Accordion.Body>
          I created a mobile application for cat lovers using React JS. All data in the form of images and text data in this application are randomly generated from the Google API.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
  }