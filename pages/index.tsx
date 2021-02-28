import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';

import MetaData from '../components/etc';
import styles from '../styles/Home.module.css';

const HomeContent = () => {
  return(
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Hey Next</h1>
          </Jumbotron>
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