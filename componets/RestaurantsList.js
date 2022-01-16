import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Hedings from './Hedings'
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import{
    Link
  } from 'react-router-dom'
class RestaurantsList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData()
    {
        fetch("http://localhost:3000/restaurant").then((res) => {
            res.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id)
    {
        fetch("http://localhost:3000/restaurant/"+id,
        {
            method:"DELETE",
            }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurant has been Deleted");
                this.getData();
            })
        })
    
    }
    render() { 
        console.warn(this.list)
        return (
            <>
            <Hedings />
            <div>
                <h1><FontAwesomeIcon icon={faListUl}/> Restaurants List</h1>
                {
                    this.state.list ?

                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>

                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="green"/></Link>   
                                                <span onClick={()=>this.delete(item.id)}> <FontAwesomeIcon icon={ faTrash} color="red"/></span>
                                                </td>
                                            </tr>

                                        )

                                    }
                                </tbody>
                            </Table>
                        </div>

                        :
                        <p>
                            Please Wait...
                    </p>
                }
            </div>
            </>
        );
    }
}

export default RestaurantsList;