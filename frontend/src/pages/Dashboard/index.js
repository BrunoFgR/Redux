import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions'

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }


  return (
    <button onClick={() => handleSignOut()}>Voltar a pagina de SignIn</button>
  );
}
