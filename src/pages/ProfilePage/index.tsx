import React, { FC, memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { RootState } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import ProfileText from '../../components/Profile/ProfileText';
import UserData from '../../components/Profile/UserData';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = useCallback(
    () => {
      dispatch(logout());
    },
    [dispatch],
  )

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <UserData user={user} onLogout={handleLogout} />
      <ProfileText />
    </Container>
  );
};

export default memo(ProfilePage);
