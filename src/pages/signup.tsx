// src/app/page.tsx
import React from 'react';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';


const LoginPage: React.FC = () => {
  return (
    <div>
        {/* <Header /> */}
        <Signup setUser={function (user: any): void {
              throw new Error('Function not implemented.');
          } } />
    </div>
  );
};

export default LoginPage;
