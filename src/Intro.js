import React from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Intro  = () => {
    return (
        <section id="intro">
            <Container fluid="xl">
               <Row>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Row>  
                </Container>     
        </section>
    )
}

export default Intro;