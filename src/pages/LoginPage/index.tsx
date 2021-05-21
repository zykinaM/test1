import React, { FC, memo, FormEventHandler, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

const LoginPage: FC = () => {
  const { isAuthenticated, checkAuthError } = useSelector(
    (state: RootState) => state.auth
  );

  if (isAuthenticated && !checkAuthError) {
    return <Redirect to="/" />;
  }

  return (
    <LoginForm />
  );
};

export default memo(LoginPage);
