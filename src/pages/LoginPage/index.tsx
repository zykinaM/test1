import React, { FC, memo, FormEventHandler, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/store';
import LoginForm from '../../components/LoginForm';

const LoginPage: FC = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <LoginForm />
  );
};

export default memo(LoginPage);
