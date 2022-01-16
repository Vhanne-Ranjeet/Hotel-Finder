import React from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faSearch, faPlusSquare, faBuilding, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'
import {
  Link
} from 'react-router-dom'
function Hedings() {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user-info'))
  function logout() {
    localStorage.clear();
    history.push('./register')
  }
  return (

    <div>
      <Navbar className="Navbar" bg="light" expand="lg">
        <Navbar.Brand className="logo" href="#home"><FontAwesomeIcon icon={faBuilding} /> Restro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link><Link Link className="mr" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
            {
              localStorage.getItem('user-info') ?
                <>
                  <Nav.Link><Link Link className="mr" to="/list"> <FontAwesomeIcon icon={faListUl} /> List</Link></Nav.Link>
                  <Nav.Link><Link Link className="mr" to="/create"> <FontAwesomeIcon icon={faPlusSquare} /> Creact</Link></Nav.Link>
                  <Nav.Link><Link Link className="mr" to="/search"> <FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
                </>
                :
                <>
                  <Nav.Link><Link Link className="mr" to="/Register"> <FontAwesomeIcon icon={faUser} /> Register</Link></Nav.Link>
                  <Nav.Link><Link Link className="mr" to="/Login"> <FontAwesomeIcon icon={faUnlock} /> Login</Link></Nav.Link>
                </>
            }
          </Nav>
          {
            localStorage.getItem('user-info') ?
              <Nav className="NavD">
                <NavDropdown title={user && user.uname}>
                  <NavDropdown.Item onClick={logout} style={{ color: "Green" }}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              : null
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Hedings;