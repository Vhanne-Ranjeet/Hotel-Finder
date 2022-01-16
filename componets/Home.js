import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import Hedings from './Hedings'
import { Carousel, Container, Row, Image, Col ,Card,Button} from 'react-bootstrap'
import log2 from '../images/img3.jpg';
class Home extends Component {
    render() {
        return (
            <div className="main">
                <>
                    <Hedings />
                </>
                <Card style={{width:'27rem',margin:'auto',marginTop:'0.5rem',borderStyle:'none'}}>
                    <Card.Img variant="top" src={log2} style={{borderRadius:'50%'}}/>
                    <Card.Body>
                        <Card.Title>Find the best places to eat</Card.Title>
                        <Card.Text>
                        Good eats are at your fingertips with restaurant finder
                         </Card.Text>
                         <Link to='/list' className="btn btn-outline-warning">Let's Go</Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Home;