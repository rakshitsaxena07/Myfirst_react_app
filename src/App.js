import './App.css';
import Navbar from './components/Navbar'; // Components
import About from './components/About'; // Components
import Textform from './components/Textform'; // Components
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light"); // State variable for dark mode
  const [alert, setAlert] = useState(null); // Alert state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // Example of a single flashing title (not recommended for production)
      let titleFlash = setInterval(() => {
        document.title = 'TextUtils is amazing!';
        setTimeout(() => {
          document.title = 'Install TextUtils now';
        }, 1000);
      }, 2000);

      // Clear the interval after some time (to avoid memory leaks)
      setTimeout(() => {
        clearInterval(titleFlash);
      }, 10000);

    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={<Textform heading="Enter the text to analyze" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
