import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



import Header from '../components/Header';
import MainHead from '../components/MainHead';

function MyApp({ Component, pageProps }) {
  return (
    <Container fluid>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
