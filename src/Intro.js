import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Intro  = () => {
    return (
        <section id="intro">
            <Container>
               <Row >
                    <Col md={12} sm={12} xs={12}>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                    </Col>
                </Row>  
                </Container>     
        </section>
    )
}

export default Intro;