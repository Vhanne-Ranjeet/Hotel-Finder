import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Hedings from './Hedings'
class RestaurantsSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false
        }
    }
    search(key) {
        fetch("http://localhost:3000/restaurant?q=" + key).then((res) => {
            res.json().then((result) => {
                if (key === "") {
                    this.setState({ noData: true, searchData: null })
                }
                else if (result.length > 0) {
                    this.setState({ searchData: result, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })
     })
    }
    render() {
        return (
            <>
                <Hedings />
                <div>
                    <h1>Restaurants Search</h1>
                      
                    <input type="text" className="search-box" placeholder="Search..." onChange={(e) => this.search(e.target.value)}></input><FontAwesomeIcon size='2x' icon={faSearch} />
                    <div>
                        {
                            this.state.searchData ?
                                <div>
                                    {
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Address</th>
                                                    <th>Rating</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.searchData.map((item, i) =>
                                                        <tr>
                                                            <td>{i + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.rating}</td>
                                                            <td>{item.email}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    }
                                </div>
                                : ""
                        }
                        {
                            this.state.noData ? <h3>No Data Found</h3> : null
                        }
                    </div>
                </div>
            </>
        );
    }
}
export default RestaurantsSearch