import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function NavScrollExample() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <Navbar  variant="dark" expand="lg" className='navbarcontainer justify-content-between'>
  <Container class>
    <div className="brand">

    
    <Navbar.Brand href="#"><img src="./logoSolusiPutih.png" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    </div>
    <Navbar.Collapse id="navbarScroll">
    <div className="searchbarr">

    
    <Form className="d-flex searchbar">
      <Button className='magnifyingglass' variant="outline-secondary" size="sm" >
        <img src="./magnifying.png" alt="" />
        </Button>

        <Form.Control
          type="search"
          placeholder="ayo cari buku favoritmu"
          className="me-2 search"
          aria-label="Search"
        />
        
      </Form>
    </div>

    <div className="navitemscont">
      <Nav
        className="d-flex navitems"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1" className='itemss' >Beranda</Nav.Link>
        <Nav.Link href="#action2" className='itemss'>Tentang</Nav.Link>
        <NavDropdown  className='itemss' title="Kategori" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3" >Pertanian</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Perikanan
          </NavDropdown.Item>
          <NavDropdown.Item href="#action5">
           Kehutanan
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">
                <>
          <Button variant="primary" className='itemsbtn' onClick={handleShow}>
            Login/Signup
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
             
            </Modal.Header>
            <Modal.Body>
               <MDBContainer className="p-1 my-5 d-flex flex-column w-10">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

              <MDBTabsPane show={justifyActive === 'tab1'}>

                <div className="text-center mb-3">
                  <p>Sign in with:</p>

                  <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>
                  </div>

                  <p className="text-center mt-3">or:</p>
                </div>

                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                <p className="text-center">Not a member? <a href="#!">Register</a></p>

              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === 'tab2'}>

                <div className="text-center mb-3">
                  <p>Sign un with:</p>

                  <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>
                  </div>

                  <p className="text-center mt-3">or:</p>
                </div>

                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>

              <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

              </MDBTabsPane>

            </MDBTabsContent>

            </MDBContainer>
            </Modal.Body>
           
          </Modal>
        </>
        </Nav.Link>
        <Nav.Link href="#action6"> <p className='fa-solid fa-bag-shopping bag'></p></Nav.Link> 
      </Nav>
      </div>
    </Navbar.Collapse>
  </Container>
  
</Navbar>

      
    

  );
}

export default NavScrollExample;