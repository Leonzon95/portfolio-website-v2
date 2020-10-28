import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Intro  = () => {

    return (
        <section id="intro" >
            <Container >
                <Fade duration={1000} delay={500} distance="30px" left>
                    <h1 className="intro-title" >
                        Hello! I'm Leonardo <br/>
                        I am a Full Stack Web Developer
                    </h1>
                </Fade>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                     
                </Container>     
        </section>
    )
}

export default Intro;