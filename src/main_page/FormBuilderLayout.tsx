// import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import Fields from '../layout/Fields'
import FormLayout from '../layout/FormLayout'
import Setting from '../layout/Setting'
import Header from '../layout/Header'

const FormBuilderLayout = () => {
    return (
        <Container fluid>
            <Row className='mb-4'>
                <Col>
                    <Header>
                        <Button color='warning' className="btn btn-outline btn-text">
                            <span>submit</span>
                        </Button>
                    </Header>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <Fields />
                </Col>
                <Col sm={6}>
                    <FormLayout />
                </Col>
                <Col sm={4}>
                    <Setting />
                </Col>
            </Row>
        </Container>
    )
}

export default FormBuilderLayout