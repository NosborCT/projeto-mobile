import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Login from "../pages/login"
import Cadastro from "../pages/register"

export default function ApplicationRoutes(){
    return(

        <Router>
        <Routes>
        <Route exact path="" element = {<Login/>}/>
        <Route exact path="/Cadastro" element = {<Cadastro/>}/>
        </Routes>
        </Router>
    );
}