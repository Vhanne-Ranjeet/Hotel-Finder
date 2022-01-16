import './App.css';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom'
import Home from './componets/Home'
import RestaurantsList from './componets/RestaurantsList'
import RestaurantsCreate from './componets/RestaurantsCreate'
import RestaurantsSearch from './componets/RestaurantsSearch'
import RestaurantsUpdate from './componets/RestaurantsUpdate'
import Register from './componets/Register'
import Login from './componets/Login'
import Protected from './componets/Protected';
import Footer from './componets/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/list">
          <Protected Cmp={RestaurantsList} />
        </Route>
        <Route path="/create">
          <Protected Cmp={RestaurantsCreate} />
        </Route>
        <Route path="/search">
          <Protected Cmp={RestaurantsSearch} />
        </Route>
        <Route path="/update/:id"
          render={props => (<RestaurantsUpdate {...props} />
          )}
        >
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
