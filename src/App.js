import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './Components/SignUp/SignUp.jsx';
import Login from './Components/Login/Login.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Curve from './Components/Curve/Curve.jsx';
import Infinite from './Components/Infinite/Infinite.jsx';
import CircleAnimation from './Components/Circle/CircleAnimation.jsx';
import SmoothScroll from './Components/SmoothScroll/SmoothScroll.jsx';
import Providers from "./Components/Providers/Providers.jsx";
import TextAnimation from './Components/TextAnimation/TextAnimation.jsx';
import Gradient from './Components/Gradient/Gradient.jsx';
import CircleCursor from './Components/Cursor/Cursor.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MaskScroll from "./Components/MaskScroll/MaskScroll.jsx"
function App() {
  return (
    <Router>
      <RouteHandler />
    </Router>
  );
}

function RouteHandler() {
  const location = useLocation();

  const showLayout = !['/signup', '/login'].includes(location.pathname);

  return (
    <>
      {showLayout && <Curve backgroundColor="#ffe600" />}
      {showLayout && <Navbar />}
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here if needed */}
        </Routes>
        {showLayout && <MaskScroll/>}
        {showLayout && <Providers />}
        {showLayout && <CircleAnimation />}
        {showLayout && <TextAnimation />}
        {showLayout && <Gradient />}
        {showLayout && <Infinite />}
        {showLayout && <Footer />}

      </SmoothScroll>
    </>
  );
}

export default App;
