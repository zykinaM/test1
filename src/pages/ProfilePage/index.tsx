import React, { FC, memo } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const ProfilePage: FC = () => {
  const { user } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      <div>ProfilePage</div>
      <div>UserName: {user}</div>
    </>
  );
};

export default memo(ProfilePage);
