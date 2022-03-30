import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar.js';
import User from './components/User.js';
import Tablo from './components/Tablo';
import Card from './components/Card';
import Drawer from './components/Drawer';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className='container'>

        <Container >
          <Col>
            <Row sm={2}>
            <Drawer/>
              
            </Row>
            </Col>
            <hr/>
            <Row>
            <Col sm={12}>
            <Navbar/>
            </Col>
            </Row>
            <Row>
            <Col sm={6}>
            <User
                name="Garip"
                lastName="Aksoy"
                age="22"

              />
            </Col>
           <Col sm={6}>
           <User
                name="Ron"
                lastName="Doe"
                age="36"

              />
           </Col>
            </Row>

            <Row>
            
            <Col sm={12}>
            <Tablo/>
            </Col>
            </Row>
            <Row>
            
            <Col sm={4}>
            <Card/>
            </Col>
            <Col sm={4}>
            <Card/>
            </Col>
            <Col sm={4}>
            <Card/>
            </Col>
            </Row>
            
        </Container>
      </div>
    )
  }
}

export default App;
