import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';

import React, { Suspense } from 'react';
import { Detail } from './pages/Detail';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { RequiredAuth } from './components/RequireAuth';

const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));

const Home = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/pet/:id' element={<Home />} />

          <Route
            path='/user'
            element={
              <RequiredAuth>
                <User />
              </RequiredAuth>
            }
          />
          <Route
            path='/favs'
            element={
              <RequiredAuth>
                <Favs />
              </RequiredAuth>
            }
          />

          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='*' element={<Navigate to={'/home'} />} />
        </Routes>
        <Navbar />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
