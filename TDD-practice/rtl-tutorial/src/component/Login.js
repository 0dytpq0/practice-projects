import React from 'react';
import { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const onClickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <button onClick={onClickHandler}>{isLogin ? 'Logout' : 'Login'}</button>
  );
}

export default Login;
