import React, { FC, memo } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const ProfilePage: FC = () => {
  const { user } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      <div>ProfilePage</div>
      <div>UserName: {user}</div>
      <Button onClick={() => localStorage.clear()}>Logout</Button>
    </>
  );
};

export default memo(ProfilePage);
