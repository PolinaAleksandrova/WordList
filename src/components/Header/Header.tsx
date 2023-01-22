import { observer } from 'mobx-react';
import React from 'react'
import { Navbar, Nav, Container, Image, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const Header = observer(() => {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/users?page=1">WordList</Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link href="/users?page=1">Home</Nav.Link>
      <Nav.Link href="/">Contacts</Nav.Link>
      <Nav.Link href="/">News</Nav.Link>

    </Nav>
<Button variant="light"><Image src="https://img.icons8.com/fluency-systems-regular/48/null/hearts.png" onClick={() => navigate(`/login`)}  width="20" height="20" rounded /></Button>
    <Button variant="outline-light" className="d-flex justify-content-en ms-1" onClick={() => navigate(`/login`)}>Login </Button>{' '}
    <Button variant="outline-light" className="mx-6" onClick={() => navigate(`/login`)}>Registration</Button>{' '}

    </Container>
  </Navbar>
  <br />

</>
    </Container>
  )
});

export default Header
