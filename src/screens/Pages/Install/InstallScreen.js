import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Header } from '../../Components/Header'
import { auth } from "../../../firebase"

export const InstallScreen = () => {
    const [ipaddress, setIPAddress] = useState("")
    const [password, setPassword] = useState("")

    function validateForm() {
        return ipaddress.length > 0 && password.length > 0
    }

    function handleInstallation(event) {
        event.preventDefault()

        fetch(`http://localhost:4000/install/${auth.currentUser?.uid}/${ipaddress}/${ipaddress}`, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            });
    }

    return (
        <>
            <Header />
            <Container className="h-custom">
                <Row className="row d-flex justify-content-center align-items-center h-100" >
                    <Col md='9' lg='6' xl='5'>
                        <Image src="https://pterodactyl.io/logos/pterry.svg" className="img-fluid" alt="Pterodactyl Logo" />
                    </Col>
                    <Col md='8' lg='6' xl='4'>
                        <Form onSubmit={handleInstallation}>
                            <Form.Group className="divider d-flex align-items-center my-4">
                                <Form.Label className="text-center fw-bold mx-3 mb-0">
                                    Installatie
                                </Form.Label>
                            </Form.Group>

                            <Form.Group className="form-outline mb-4" size='lg' controlId="ipaddress">
                                <Form.Label className="form-label">IP Adres</Form.Label>
                                <Form.Control
                                    autoFocus
                                    className="form-control form-control-lg"
                                    type="text"
                                    value={ipaddress}
                                    onChange={(e) => setIPAddress(e.target.value)}
                                    placeholder="Voer een IP adres in"
                                />
                            </Form.Group>

                            <Form.Group className="form-outline mb-4" size='lg' controlId="password">
                                <Form.Label className="form-label">Root Wachtwoord</Form.Label>
                                <Form.Control
                                    className="form-control form-control-lg"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Voer het root wachtwoord in"
                                />
                            </Form.Group>

                            <Form.Group className="text-center text-lg-start mt-4 pt-2">
                                <Button
                                    type="submit"
                                    className="btn btn-primary btn-lg custombutton"
                                    disabled={!validateForm()}
                                >
                                    Installatie Starten
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>

    )
}