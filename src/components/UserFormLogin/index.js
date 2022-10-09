import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import useLoginMutation from '../../hooks/useLoginMutation';
import SubmitButton from '../SubmitButton';
import { Form, Input, Title, Error } from './styles';

const UserFormLogin = ({ onSubmit, title }) => {
  const { handleLogin, error, loading } = useLoginMutation(onSubmit);
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      input: {
        email: email.value,
        password: password.value,
      },
    };

    if (payload.input.email !== '' && payload.input.password !== '') {
      return handleLogin(payload);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={loading}>
        <Title>{title}</Title>
        <Input type='text' placeholder='Email' {...email} disabled={loading} />
        <Input
          type='password'
          placeholder='Password'
          {...password}
          disabled={loading}
        />
        <SubmitButton disabled={loading} title={title} />
      </Form>

      {error && <Error>Ups...Usuario no registrado o hay algún problema</Error>}
    </>
  );
};

export default UserFormLogin;
