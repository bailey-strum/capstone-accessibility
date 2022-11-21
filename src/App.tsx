import './App.css'
import {  Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";
import Register from "./Pages/LoggedOut/Register";
import HomeScreen from "./Pages/LoggedOut/HomeScreen";
import Login from "./Pages/LoggedOut/Login";
import Catalog from "./Pages/LoggedOut/Catalog";
import About from "./Pages/LoggedOut/About";
import Reset from './Pages/LoggedOut/Reset';
import Perceivable from './Pages/LoggedOut/Perceivable';
import Operable from './Pages/LoggedOut/Operable';
import Understandable from './Pages/LoggedOut/Understandable';
import Robust from './Pages/LoggedOut/Robust';
import Profile from './Pages/userProfile';

function App() {
    return (
        <div className="App">
            <Routes>
                {/*Logged out pages*/}
                <Route path="/" element ={<HomeScreen />} />
                <Route path="register/" element ={<Register />} />
                <Route path="login/" element ={<Login />} />
                <Route path="catalog/" element ={<Catalog />} />
                <Route path="about/" element ={<About />} />
                <Route path="perceivable/" element ={<Perceivable />} />
                <Route path="operable/" element ={<Operable />} />
                <Route path="understandable/" element = {<Understandable />} />
                <Route path="robust/" element = {<Robust />} />
                {/*Logged in pages*/}
                <Route path="/reset" element={<Reset />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="stats/" element ={<Stats />} />
                <Route path="profile/" element ={<Profile />} />
            </Routes>
        </div>
    )
}

export default App