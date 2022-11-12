import './App.css'
import {  Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";
import Register from "./Pages/LoggedOut/Register";
import HomeScreen from "./Pages/LoggedOut/HomeScreen";
import Login from "./Pages/LoggedOut/Login";
import Catalog from "./Pages/LoggedOut/Catalog";
import About from "./Pages/LoggedOut/About";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="stats/" element ={<Stats />} />
                <Route path="register/" element ={<Register />} />
                <Route path="login/" element ={<Login />} />
                <Route path="catalog/" element ={<Catalog />} />
                <Route path="about/" element ={<About />} />
                <Route path="/" element ={<HomeScreen />} />
            </Routes>
            
        </div>
    )
}

export default App