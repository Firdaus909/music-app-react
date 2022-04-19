import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Login from '../Login/Login';

function Dashboard() {
  const user = useAppSelector((state) => state.user.user);

  if (!user) {
    return <Login />;
  }

  return <div>Dashboard</div>;
}

export default Dashboard;
