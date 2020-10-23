import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
               
                    <h1 className="intro-title" style={{fontSize: fontSize, textAlign: textAlign}}>
                        Hello! I'm Leo <br/>
                        I am a Full Stack Web Developer
                    </h1>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                     
                </Container>     
        </section>
    )
}

export default Intro;