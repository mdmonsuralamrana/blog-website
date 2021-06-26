import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
// import Navbar from './Components/Navbar/Navbar';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <NavigationBar/>
            <Home></Home>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails></BlogDetails>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
