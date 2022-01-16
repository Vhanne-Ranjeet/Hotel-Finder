import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Hedings from './Hedings'
class RestaurantsCreate extends Component {
    constructor()
    {
        super()
        this.state={
          name:null,
          address:null,
          rating:null,
          email:null       
         }
    }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method:"Post",
            headers:{
                'content-type':'application/json'
                },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurant has been added successfully");
            })
        })
    }
    render() {
        return (
            <>
            <Hedings />
            <div>
                <h1><FontAwesomeIcon icon={faPlusSquare}/> Restaurants Create</h1>
                <div>
                    
                    <input type="text" placeholder="Restaurant name" onChange={(event)=>{
                     this.setState({name:event.target.value})   
                    }}/><br/><br/>
                    <input type="text" placeholder="Restaurant address" onChange={(event)=>{
                     this.setState({address:event.target.value})   
                    }}/><br/><br/>
                    <input type="number" placeholder="Restaurant rating" onChange={(event)=>{
                     this.setState({rating:event.target.value})   
                    }}/><br/><br/>
                    <input type="email"placeholder="Restaurant email" onChange={(event)=>{
                     this.setState({email:event.target.value})   
                    }}/><br/><br/>
                    <Button size="lg" block variant="secondary" onClick={()=>{this.create()}}>Add Restaurant</Button>
                </div>
            </div>
            </>
        );
    }
}

export default RestaurantsCreate;