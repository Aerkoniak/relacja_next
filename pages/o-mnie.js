import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';

import homeStyles from '../styles/Home.module.css';
import pageStyles from '../styles/Pages.module.css';


function About() {
    return (
        <section className={homeStyles.main} id="o-mnie">
            <Head>
                <title>Re-Lacja - O mnie</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid>
                <Row >
                    <Col md={{ offset: 1, span: 6 }}><p className={pageStyles.landing}>Jestem absolwentką Uniwersytetu Mikołaja Kopernika w Toruniu, na którym uzyskałam dyplom magistra pedagogiki o specjalności pedagogika szkolna z socjoterapią i terapią pedagogiczną. Ukończyłam również dwuletnie Studium Socjoterapii i Treningu Interpersonalnego w Krakowskim Centrum Psychodynamicznym  oraz jestem w trakcie studiów w Szkole Psychoterapii Psychodynamicznej rekomendowanej przez Polskie Towarzystwo Psychologiczne. Swoją wiedzę staram się systematycznie uzupełniać i poszerzać, biorąc udział w licznych konferencjach, szkoleniach oraz seminariach.</p> </Col>
                    <Col md={{ span: 5 }}><img src="/PTP.png" alt="" className={pageStyles.imagePTP} /></Col>
                </Row>
                <Row className={pageStyles.secondRow}>
                    <Col className={pageStyles.column} md={{ offset: 1, span: 6 }}><p className={pageStyles.landing}>Doświadczenie zawodowe zdobyłam między innymi w Wojewódzkim Szpitalu dla Nerwowo i Psychicznie Chorych im. dra J. Bednarza w Świeciu, Poradni Zdrowia Psychicznego w Brodnicy. Posiadam również doświadczenie w prowadzeniu grup terapeutycznych dla dzieci i młodzieży. Na co dzień pracuję w Centrum Medycznym we niewielkim mieście, gdzie przyjmuję pacjentów w ramach Poradni Zdrowia Psychicznego oraz prowadzę zajęcia na Oddziale Dziennym Psychiatrycznym. Od kilku lat prowadzę również indywidualną psychoterapię dla dorosłych oraz młodzieży, stosując podejście psychodynamiczne.</p></Col>
                    <Col md={{ span: 5 }}> <img src="/KCP_trans_small.png" alt="" className={pageStyles.image} /></Col>
                </Row>
                <Row className={homeStyles.secondRow}>
                    <Col className={pageStyles.column} md={{ offset: 1, span: 6 }}><p className={pageStyles.landing}>W trosce o to, aby rzetelnie wykonywać zadania psychoterapeuty, swoją pracę terapeutyczną regularnie poddaję superwizji u certyfikowanego psychoterapeuty Polskiego Towarzystwa Psychoterapii Psychodynamicznej. Co więcej, w swojej praktyce kieruję się zasadami zawartymi w Kodeksie Etyki Psychoterapeuty.</p></Col>
                    <Col md={{ span: 5 }}> <img src="/umk-small.png" alt="" className={pageStyles.image} /></Col>
                </Row>
            </Container>
        </section>
    )
}

export default About