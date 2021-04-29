import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import Button from '../Button';


function LoginFormModal( {text = 'Log In'}) {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      <Button onClick={onClick} text={text}/>
      {showModal && (
        <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;