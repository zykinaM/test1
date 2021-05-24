import React, { FC, memo, FormEventHandler, ChangeEvent, useState } from 'react';
import { Form, Button, Alert, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { AuthData } from '../../interfaces/user';
import { RootState } from '../../store/store';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState<AuthData>({} as AuthData);

  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(login(values));
  }

  return (
    <div className="loginContainer">
      <h2 className="loginHeader">Login</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mt-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control name="username" type="username" placeholder="Enter username" onChange={onFormChange} />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={onFormChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 col-12">
          Submit
            </Button>
      </Form>
      {
        !isAuthenticated && error &&
        <Alert variant='danger' className="mt-3">
          Имя пользователя или пароль введены неверно
          </Alert>
      }
    </div >
  );
};

export default memo(LoginForm);
