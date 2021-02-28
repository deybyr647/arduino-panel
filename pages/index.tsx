import { Container, Row, Col, Jumbotron, Image, Button } from 'react-bootstrap';
import axios, { AxiosRequestConfig } from 'axios';

import MetaData from '../components/etc';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const Controls = () => {
  const [status, setStatus] = useState({light: false, buzz: false});

  const buzzConfig: AxiosRequestConfig = {
    url: "http://localhost:3001/buzz",
    method: "get",
    params: {
      buzz: true,
      light: false
    }
  }

  const lightConfig: AxiosRequestConfig = {
    url: "http://localhost:3001/light",
    method: "get",
    params: {
      buzz: false,
      light: true
    }
  }

  const apiReq = async (config: AxiosRequestConfig) => {
    let req = await axios(config);
    console.log(req);
    setStatus(prev => {
      return {
        ...prev,
        light: req.data.light,
        buzz: req.data.buzz
      }
    });
  }

  const buzzOnClick = (e: any) => {
    e.preventDefault();
    apiReq(buzzConfig);
  }

  const lightOnClick = (e: any) => {
    e.preventDefault();
    apiReq(lightConfig);
  }

  return(
    <div className="d-flex justify-content-around">
      <Button onClick={buzzOnClick}>Buzz</Button>
      <p className="text-center d-flex flex-column">
        Status: <br/>
      {
        status.light ? <span>Light: True</span> : <span>Light: false</span>
      }
    
      {
        status.buzz ? <span>Buzz: True</span> : <span>Buzz: false</span>
      }
      
      </p>
      <Button onClick={lightOnClick}>Turn On Light</Button>
    </div>
  )
}

const HomeContent = () => {
  return(
    <Container>
      <Row className="mt-3">
        <Col>
          <Jumbotron>
            <h1 className="text-center">Arduino Panel</h1>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col>
          <Controls/>
        </Col>
      </Row>
    </Container>
  )
}

const Home = () => {
  return(
    <>
      <MetaData title="Home"/>
      <HomeContent/>
    </>
  )
}

export default Home;