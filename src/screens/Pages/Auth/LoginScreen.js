import React, { useState } from "react"
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import './LoginScreen.css'
import { auth } from "../../../firebase"
import { Link } from "react-router-dom"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    function handleLogin(event) {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user
            console.log(`Logged in with ${user.email}`)
        }).catch(err => alert(err.message))
    }

    return (
        <>
            <section className="vh-100">
                <Container className="h-custom">
                    <Row className="row d-flex justify-content-center align-items-center h-100" >
                        <Col md='9' lg='6' xl='5'>
                            <Image src="https://pterodactyl.io/logos/pterry.svg" className="img-fluid" alt="Pterodactyl Logo" />
                        </Col>
                        <Col md='8' lg='6' xl='4'>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="divider d-flex align-items-center my-4">
                                    <Form.Label className="text-center fw-bold mx-3 mb-0">
                                        Login
                                    </Form.Label>
                                </Form.Group>

                                <Form.Group className="form-outline mb-4" size='lg' controlId="email">
                                    <Form.Label className="form-label">Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        className="form-control form-control-lg"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Voer uw email adres in"
                                    />
                                </Form.Group>

                                <Form.Group className="form-outline mb-4" size='lg' controlId="password">
                                    <Form.Label className="form-label">Wachtwoord</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        className="form-control form-control-lg"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Voer uw wachtwoord in"
                                    />
                                </Form.Group>

                                <Form.Group className="text-center text-lg-start mt-4 pt-2">
                                    <Button
                                        type="button"
                                        className="btn btn-primary btn-lg custombutton"
                                        disabled={!validateForm()}
                                    >
                                        Login
                                    </Button>
                                    <Form.Label className="small fw-bold mt-2 pt-1 mb-0" >
                                        Nog geen account?&nbsp;
                                        <Link to="/register" className="link-danger" >
                                            Maak een account aan.
                                        </Link>
                                    </Form.Label>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
