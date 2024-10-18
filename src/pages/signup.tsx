import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import { UserContext } from './context/UserContext'; // Assuming UserContext exists

const SignupPage: React.FC = () => {
  const { setUser } = useContext(UserContext); // Use UserContext to get setUser function

  return (
    <div>
      <Header />
      <Signup setUser={setUser} /> {/* Pass setUser as prop to Signup */}
    </div>
  );
};

export default SignupPage;
