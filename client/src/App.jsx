import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, Login, Register, Error, Dashboard } from "./pages/index";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
