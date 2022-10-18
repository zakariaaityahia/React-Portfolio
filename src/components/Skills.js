import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import coding from "../Images/coding.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section className='skills' id='skills' data-aos="flip-up" data-aos-anchor="#example-anchor" data-aos-offset="500"data-aos-duration="1000">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-box">
                            <h1 class="skills-header">Skills</h1>
                            <p>Dolore non commodo et nisi culpa duis eiusmod culpa adipisicing consectetur sunt laborum reprehenderit.<br></br> Voluptate officia ut aute occaecat pariatur culpa est, Voluptate officia ut aute occaecat pariatur culpa es.</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className='item'>
                                    <img src={coding} alt=""/>
                                    <h5>Web Designer</h5>
                                </div>
                                <div className='item'>
                                    <img src={coding} alt=""/>
                                    <h5>Web Designer</h5>
                                </div>
                                <div className='item'>
                                    <img src={coding} alt=""/>
                                    <h5>Web Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}