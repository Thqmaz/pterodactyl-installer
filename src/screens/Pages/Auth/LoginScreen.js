import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import './LoginScreen.css'
import { auth } from "../../../firebase"

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
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://pterodactyl.io/logos/pterry.svg" className="img-fluid"
                                alt="Pterodactyl Logo" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <Form onSubmit={handleLogin}>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">
                                        Login
                                    </p>
                                </div>

                                <Form.Group className="form-outline mb-4">
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

                                <Form.Group className="form-outline mb-4">
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
                                    <Button type="button" className="btn btn-primary btn-lg custombutton" disabled={!validateForm()}>
                                        Login
                                    </Button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Nog geen account? 
                                        <a href="#!" className="link-danger">
                                        Maak een account aan.
                                        </a>
                                    </p>
                                </Form.Group>

                            </Form>
                            {/* 
                        <Form onSubmit={handleLogin}>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button block size="lg" type="submit" disabled={!validateForm()}>
                                Login
                            </Button>
                        </Form> */}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
