import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/mainPage.module.css'

export default function NavbarPage() {
  return (
    <>
      <Navbar className={styles.navbar} variant="dark">
        <Container>
          <Navbar.Brand href="/">KEVINA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/aboutMe">About</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}