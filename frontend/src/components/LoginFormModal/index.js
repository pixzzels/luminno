import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import Button from '../Button';


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      <Button onClick={onClick} text={'Log In'}/>
      {showModal && (
        <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;