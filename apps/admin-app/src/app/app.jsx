// libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// shared libs
import { Footer } from '@demo-org/shared/feature/footer';
// self feature libraries
import { Header } from '@demo-org/admin/feature/header';
import { routes } from '@demo-org/admin/feature/routes';
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
