import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function InfoCard() {
  return (
      <div>
          <section className='infos'>
          <Container>
              <Row className='align-items-center justify-content-center'>
                  <Col xs={12} md={3} xl={3} className="mt-3">
                      <div className='info-cards text-center'>
                          <span className='info-header'>
                              5+
                          </span>
                          <span className='info-body'>
                          YEARS OF EXPERIENCE
                          </span>
                      </div>
                  </Col>    
                  <Col xs={12} md={3} xl={3} className="mt-3">
                      <div className='info-cards-second text-center'>
                          <span className='info-header' style={{color: "#FCEDDA"}}>
                          40+
                          </span>
                          <span className='info-body' style={{color: "#FCEDDA"}}>
                          COMPLETED PROJECTS
                          </span>
                      </div>
                  </Col>    
                  <Col xs={12} md={3} xl={3} className="mt-3">
                      <div className='info-cards text-center'>
                          <span className='info-header'>
                          35+
                          </span>
                          <span className='info-body'>
                          HAPPY CLIENTS
                          </span>
                      </div>
                  </Col>    
              </Row>              
          </Container>
         </section>
    </div>
  )
}

export default InfoCard