import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import useRegisterMutation from '../../hooks/useRegisterMutation';
import { Button, Form, Input, Title, Error } from './styles';

const UserFormRegister = ({ onSubmit, title }) => {
  const { handleRegister, error, loading } = useRegisterMutation(onSubmit);
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
      return handleRegister(payload);
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
        <Button disabled={loading}>{title}</Button>
      </Form>

      {error && <Error>Ups...Usuario ya registrado o hay algún problema</Error>}
    </>
  );
};

export default UserFormRegister;
