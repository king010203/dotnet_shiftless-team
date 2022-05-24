import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './homepage/Home';
import Technology from './homepage/Technology'
import Game from './homepage/Game'
import Entertainment from './homepage/Entertainment'
import Flash from './homepage/Flash'
import Detail from './homepage/details/Detail'

import React, { Component } from 'react'
import Login from './login/Login';
import SignUp from './login/SignUp';
import Admin from "./login/Admin";
import UserIndex from "./login/UserIndex";
import ShowSearch from './homepage/ShowSearch';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/flash' element={<Flash />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/game' element={<Game />} />
            <Route path="/detail/:id" element={<Detail />} />

            <Route path='/showsearch' element={<ShowSearch/>}/>

            <Route path="/UserIndex" element={<UserIndex />} />
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="/Admin" element={<Admin />} />

            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
