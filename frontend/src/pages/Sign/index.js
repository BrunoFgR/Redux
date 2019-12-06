import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch()

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email,password))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <strong>SEU E-MAIL:</strong>
        <Input name="email" type="email" placeholder="Digite o seu e-mail" />

        <strong>SUA SENHA:</strong>
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha secreta"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
