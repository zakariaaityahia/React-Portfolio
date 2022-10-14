import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import BannerImg from "../Images/BannerImg.jpg";
import linkedin from "../Images/linkedin.svg";
import twitter from "../Images/twitter.svg";
import instagram from "../Images/instagram.svg";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UX Designer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100) 
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
  return (
      <section className='banner' id='home'>
          <Container>
              <Row className='align-items-center'>
                  <Col xs={12} md={6} xl={7} data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">
                      <span className='tagline'>Welcome to My Portfolio</span>
                      <h1>{`HI! I’M Jack Watson `}<span className='wrap'>{text}</span></h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                      <button onClick={() => console.log("Connect")}>Let's Connect <ArrowRightCircle size={25} /></button>
                      <span className='navbar-text'>
                      <div className='social-icon'>
                          <a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin"/></a>
                          <a href="https://www.twitter.com"><img src={twitter} alt="twitter"/></a>
                          <a href="https://www.instagram.com"><img src={instagram} alt="instagram"/></a>
                      </div>
                  </span>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="text-center align-items justify-content-center">
                      <img src={BannerImg} alt="banner-img" className='banner-img' data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500"/>
                  </Col>
              </Row>
          </Container>
    </section>
  )
}

export default Banner