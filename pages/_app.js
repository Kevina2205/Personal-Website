import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import NavbarPage from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id='fullpage'>
        <NavbarPage/>
        <Component {...pageProps}/>
      </div>
    </>
  )
}

export default MyApp
