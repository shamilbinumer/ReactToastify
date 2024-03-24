import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// firstly= npm i react-toastify

function App() {
  const handleClick = () => {
    toast.success('Registerd successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Zoom,
    });
  };

  const handleClickDark = () => {
    toast.warn('Registerd successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Zoom,
    });
  };

  return (
    <>
      <button onClick={handleClick}>Show Toast</button>
      <button onClick={handleClickDark}>Show Dark Toast</button>
      <ToastContainer/>
    </>
  );
}

export default App;
