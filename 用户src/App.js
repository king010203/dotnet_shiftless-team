import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
import UserIndex from "./UserIndex";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Routes>
            <Route path="/UserIndex" element={<UserIndex />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route index element={<UserIndex />} />
          </Routes>
        </div>
      </div>
    );
  }
}
