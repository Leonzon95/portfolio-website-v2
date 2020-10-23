import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Intro  = () => {
    const [padding, setPadding] = useState(null);
    const [fontSize, setFontSize] = useState(null);
    const [textAlign, setTextAlign] = useState(null);


    const styles = () => {
            if (window.innerWidth > 769) {
                setPadding("0rem 5.6rem")
                setFontSize("3.5rem")
                setTextAlign("left")
            } else {
                setPadding("0 1.6rem")
                setFontSize("2.5rem")
                setTextAlign("center")
            }
    }

    useEffect(() => {
        styles();
        window.addEventListener('resize', styles)
    }, []);
    
    return (
        <section id="intro" style={{padding: padding}}>
            <Container >
                <Fade duration={1000} delay={500} distance="30px" left>
                    <h1 className="intro-title" style={{fontSize: fontSize, textAlign: textAlign}}>
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