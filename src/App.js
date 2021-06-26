import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Home />
    </div>
  );
}

export default App;
