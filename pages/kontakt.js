import Head from 'next/head'
import styles from '../styles/Pages.module.css'
import { Container, Row, Col } from 'react-bootstrap';

import Iframe from 'react-iframe'




function Tariff() {


    return (
        <section className={styles.contact}>
            <Head>
                <title>Re-Lacja - Kontakt</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid>
                <Row>
                    <Col className={styles.column} md={{ offset: 2, span: 4 }}>
                        <div className={styles.landing}>
                            <h4><strong>Kontakt:</strong> </h4>
                            <p className={styles.landing}>Pracownia Psychoterapii <strong>RE-LACJA</strong></p>
                            <p className={styles.landing}>Sandra Łuczak-Grabowska</p>
                            <p className={styles.landing}>Ul. Piwna 5 (II piętro)</p>
                            <p className={styles.landing}>87-300 Brodnica</p>
                            <p className={styles.landing}>e-mail: <a href="mailto:sandra.luczak-grabowska@re-lacja.pl">sandra.luczak-grabowska@re-lacja.pl</a></p>
                            <p className={styles.landing}>tel: <a href="tel:+48537527010" >+48 537 527 010</a></p>
                        </div>
                    </Col>
                    <Col md={{ span: 5 }}>
                        <Iframe
                            url="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Piwna%205%20Brodnica+(Gabinet%20Re-lacja)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="500px"
                            frameBorder="0"
                            scrolling="no"
                            id="gmap_canvas"
                            position="relative"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tariff