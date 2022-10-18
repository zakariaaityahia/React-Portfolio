import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export function AboutUS() {
  return (
    <div>
      <section className='aboutUs'>
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7} data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">
              <h1 className='aboutHeader'>JACK WATSON</h1>
              <h1 className='aboutFooter'>Best Creative and Modern Design.</h1>
            </Col>
            <Col xs={12} md={6} xl={5} data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">
              <p className='paraOne'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
              </p>
              <p className='paraTwo'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
              </p>
              <div className='about-cards'>
                <div className='about-card'>
                    <p className='card-header'>BORN IN</p>
                    <p className='card-footer'>London, UK</p>
                </div>
                <div className='about-card'>
                    <p className='card-header'>EXPERIENCE</p>
                    <p className='card-footer'>+5 YEARS</p>
                </div>
                <div className='about-card'>
                    <p className='card-header'>DATE OF BIRTH</p>
                    <p className='card-footer'>JUNE 1997</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
