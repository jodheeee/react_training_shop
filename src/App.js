import React, { useState } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import Detail from './Detail';
import Main from './Main';
import Data from './data.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoesChg] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">

      <Header/>

      <Switch>
        <Route exact path="/">
          <Main shoes={shoes} shoesChg={shoesChg} />
        </Route>

        <Route exact path="/detail/:id">
          <Detail shoes={shoes} 재고={재고}/>
        </Route>

        <Route path="/:id">
          <div>잘못된 페이지입니다.</div>
        </Route>
      </Switch>
    </div>
  );
}

function Header(){
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">ShoeShop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default App;
