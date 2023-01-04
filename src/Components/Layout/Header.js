import  { Navbar,Nav, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import './Header.css';
const Header =()=>{

    return(
        <>
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
      <Nav className="container">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#home">STORE</Navbar.Brand>
        <Navbar.Brand href="#home">ABOUT</Navbar.Brand>
        </Nav>
        </Container>
        <Button className="me-2">Cart</Button>
        </Navbar>
        <div className='mt-1 generics'>The Generics</div>
        <h2 className="music">COLORS</h2>
        </>
        
    )
}

export default Header;