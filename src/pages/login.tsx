// src/app/page.tsx
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { UserContext } from './context/UserContext'; // Assuming UserContext exists


const LoginPage: React.FC = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
        {/* <Header /> */}
        <Header />
        <Login setUser={setUser} />
    </div>
  );
};

export default LoginPage;
