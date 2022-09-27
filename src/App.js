import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
