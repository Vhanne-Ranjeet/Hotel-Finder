import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Hedings from './Hedings'
class RestaurantsUpdate extends Component {
    constructor()
    {
        super()
        this.state={
          name:null,
          address:null,
          rating:null,
          email:null,
          id:null        }
    }
    Update()
    {
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
                },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurant has been updated");
            })
        })
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((res) => {
            res.json().then((result) => {
                this.setState({
                    name:result.name,
                    address:result.address,
                    rating:result.rating,
                    email:result.email,
                    id:result.id
                })
            })
        }) 
    }
    render()
     {
        return (
            <>
            <Hedings />
            <div>
                <h1><FontAwesomeIcon icon={faPenSquare}/> Restaurants Update</h1>
                <input type="text" placeholder="Restaurant name" value={this.state.name} onChange={(event)=>{
                     this.setState({name:event.target.value})   
                    }}/><br/><br/>
                    <input type="text" placeholder="Restaurant address" value={this.state.address} onChange={(event)=>{
                     this.setState({address:event.target.value})   
                    }}/><br/><br/>
                    <input type="number" placeholder="Restaurant rating" value={this.state.rating} onChange={(event)=>{
                     this.setState({rating:event.target.value})   
                    }}/><br/><br/>
                    <input type="email"placeholder="Restaurant email" value={this.state.email} onChange={(event)=>{
                     this.setState({email:event.target.value})   
                    }}/><br/><br/>
                    <Button size="lg" block variant="secondary" onClick={()=>{this.Update()}}>Update Restaurant</Button>
                </div>
                </>
        );
    }
}
export default RestaurantsUpdate;