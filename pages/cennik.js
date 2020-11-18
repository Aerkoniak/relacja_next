import { useState, useEffect } from 'react'
import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import pageStyles from '../styles/Pages.module.css';

import { Container, Row, Col } from 'react-bootstrap';



function Tariff() {

    useEffect(() => {
        const app = document.getElementById("__next");
        const maxScrollValue = app.offsetHeight - window.innerHeight;
        console.log(maxScrollValue)
        window.scrollTo(0, maxScrollValue)
    })

    return (
        <section className={homeStyles.main}>
            <Head>
                <title>Re-Lacja - Cennik</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid>
                <Row>
                    <Col md={{ offset: 3, span: 5 }}><h4>Cennik spotkań:</h4></Col>
                    <Col md={{ offset: 4, span: 4 }}>
                        <ul style={{ listStyle: "none" }}>
                            <li><p className={pageStyles.landing}>konsultacja terapeutyczna pierwszorazowa: 120zł</p></li>
                            <li><p className={pageStyles.landing}>sesja psychoterapii indywidualnej: 100zł - <strong>50 minut</strong></p></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tariff