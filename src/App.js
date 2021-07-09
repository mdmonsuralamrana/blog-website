import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home></Home>
        </Route>
        <Route path="/home">
          <Navbar />
          <Home></Home>
        </Route>
        <Route path="/blog/:id">
          <Navbar />
          <BlogDetails></BlogDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
