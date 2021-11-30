import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import React, { Fragment } from "react";
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Destination from './components/destination/destination';
import SpaceLaunch from './components/space-launch/SpaceLaunch'
import Page3 from './components/crew/Page3'

function App() {
  return (
    <Fragment>
      <Nav/>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Page3 />} />
          <Route path="/technology" element={<SpaceLaunch />} />
        </Routes>
    </Fragment>
  );
}

export default App;
