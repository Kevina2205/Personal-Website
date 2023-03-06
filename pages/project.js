import ProjectList from "../components/projectList"
import styles from '../styles/project.module.css'
import { Spinner } from "react-bootstrap"

export default function Project() {
  return (
    <>
      <div className={styles.mainPage}>
        <br/>
        <div className={styles.projectTitle}>
          <Spinner animation="grow"/>
          <h1 className={styles.projectText}>My Project</h1>
        </div>
        <br/>
        <ProjectList/>
      </div>
    </>
    )
  }