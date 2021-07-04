import React from 'react';

//Routes
import {Switch, Route} from 'react-router-dom'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

//Components
import {ReadAll} from './Components/ReadAll/ReadAll'
import {Create} from './Components/Create/Create'
import {DeleteAll} from './Components/DeleteAll/DeleteAll'
import {About} from './Components/About/About'
import {ReadSingle} from './Components/ReadSingle/ReadSingle'
import {Delete} from './Components/Delete/Delete'
import {Update} from './Components/Update/Update'

//Assets
import logo from './Img/logo.png';

//Styles
import './Styles/App.scss';


export default function App() {
  return (
    <div className='page'>
      <div className='logoBar'>
        <img className='logoImg' src={logo} alt='Logotipo do anime Sakura Cardcaptor'></img>
      </div>

      <div className='navBar'>
        <Navbar className="justify-content-center" expand="sm">
          <Nav>
            <Nav.Link id="link-style" href="/">Início</Nav.Link>
            <Nav.Link id="link-style" href="/create">Criar</Nav.Link>
            <Nav.Link id="link-style" href="/delete-all">Deletar Tudo</Nav.Link>
            <Nav.Link id="link-style" href="about">Sobre</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <Container className="app-container">
        <Row>
          <Col>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/" exact={true} component={ReadAll}></Route>
              <Route path="/create" component={Create}></Route>
              <Route path="/delete-all" component={DeleteAll}></Route>
              <Route path="/view/:id" component={ReadSingle}></Route>
              <Route path="/delete/:id" component={Delete}></Route>
              <Route path="/update/:id" component={Update}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>

    </div>
  );
}


