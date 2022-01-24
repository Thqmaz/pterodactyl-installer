import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Header } from '../../Components/Header'
import { auth } from "../../../firebase"

export const InstallScreen = () => {
    const [ipaddress, setIPAddress] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("")
    const [code, setCode] = useState("")

    // Pterodactyl credentials
    const [loginUrl, setLoginUrl] = useState("")
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [databaseUser, setDatabaseUser] = useState("")
    const [databasePassword, setDatabasePassword] = useState("")
    const [databaseHostIp, setDatabaseHostIp] = useState(ipaddress)
    const [databaseHostUser, setDatabaseHostUser] = useState("")
    const [databaseHostPassword, setDatabaseHostPassword] = useState("")
    const [databaseHostPort, setDatabaseHostPort] = useState("3306")

    function validateForm() {
        return ipaddress.length > 0 && password.length > 0
    }

    function handleInstallation(event) {
        event.preventDefault()
        fetch(`http://localhost:4000/install/${auth.currentUser?.uid}/${password}/${ipaddress}`, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                const obj = JSON.parse(response)
                setMessage(obj.message)
                setCode(obj.code)
                if (obj.code === 200) {
                    setLoginUrl('http://' + obj.credentials.loginUrl + "/")
                    setLoginUsername(obj.credentials.loginUsername)
                    setLoginPassword(obj.credentials.loginPassword)
                    setDatabaseUser(obj.credentials.databaseUser)
                    setDatabasePassword(obj.credentials.databasePassword)
                    setDatabaseHostIp(obj.credentials.databaseHostIp)
                    setDatabaseHostUser(obj.credentials.databaseHostUser)
                    setDatabaseHostPassword(obj.credentials.databaseHostPassword)
                    setDatabaseHostPort(obj.credentials.databaseHostPort)
                }
                setShow(true)
            })
    }

    function DismissableAlert() {
        if (show && code === 200) {
            return (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{message}</Alert.Heading>
                    <p>
                        URL: <a href={loginUrl}><b>{loginUrl}</b></a><br />
                        Username: <b>{loginUsername}</b><br />
                        Password: <b>{loginPassword}</b><br />
                        Database User: <b>{databaseUser}</b><br />
                        Database Password: <b>{databasePassword}</b><br />
                        Database Host IP: <b>{databaseHostIp}</b><br />
                        Database Host User: <b>{databaseHostUser}</b><br />
                        Database Host Password: <b>{databaseHostPassword}</b><br />
                        Database Host Port: <b>{databaseHostPort}</b>
                    </p>
                </Alert>
            );
        }
        if (show && code !== 200) {
            return (
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{message}</Alert.Heading>
                </Alert>
            );
        }
        return <></>;
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
                        <DismissableAlert />
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