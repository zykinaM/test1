import React, { useEffect, FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { checkAuth } from '../store/slices/authSlice';
import ProfilePage from './ProfilePage';
import { RootState } from '../store/store';

const PrivateComponent: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const { isAuthenticated, checkAuthError } = useSelector(
    (state: RootState) => state.auth
  );
  if (!isAuthenticated && !checkAuthError) {
    return null;
  }
  if (!isAuthenticated && checkAuthError) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route exact path="/profile" component={ProfilePage} />
    </Switch>
  );
};

export default memo(PrivateComponent);
