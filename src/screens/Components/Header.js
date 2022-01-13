import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { auth } from '../../firebase'

// import { Logout } from '../../functions/Logout'

function logOut() {
    auth.signOut()
}

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Pterodactyl Install Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/install">Installatie</Nav.Link>
                        <Nav.Link href="/history">Geschiedenis</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Welkom, {auth.currentUser?.email}
                    </Navbar.Text>
                    <i className="fa fa-sign-out" aria-hidden="true" style={{marginLeft: '15px', cursor: 'pointer'}} onClick={logOut}></i>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
