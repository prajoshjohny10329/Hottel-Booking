// src/app/page.tsx
import React from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';


const LoginPage: React.FC = () => {
  return (
    <div>
        {/* <Header /> */}
        <Login />
    </div>
  );
};

export default LoginPage;
