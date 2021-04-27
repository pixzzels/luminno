import React, { useState } from "react";
import LoginFormPage from '../LoginFormPage'
import SignupFormPage from '../SignupFormPage'

import './LoginFormModal.css'

function LoginForm() {
  const [isRegister, setIsRegister] = useState(false);
  const onClick = () => {
    setIsRegister(!isRegister)
  }

  let component;
  if(isRegister){
    component = <SignupFormPage handleClick={onClick}/>
  } else{
    component = <LoginFormPage handleClick={onClick}/>
  }

  return (
    component
  );
}

export default LoginForm;