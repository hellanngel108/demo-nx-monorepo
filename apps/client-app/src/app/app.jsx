// libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// share libs
import { Footer } from '@demo-org/shared/feature/footer';
// self libs
import { Header } from '@demo-org/client/feature/header';
import { routes } from '../config/routes.jsx';
// style
// style
import 'antd/dist/antd.css';
import './app.scss';

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper-inner">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </div>
);

export default App;
