import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/style.scss';

import Home from '../pages/Home';
import Styleguide from '../pages/Styleguide';
import Page404 from '../pages/Page404';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <div className="container py-5 py-lg-7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/styleguide" element={<Styleguide />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
