// Packages
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { Header } from 'components/core';

export const DefaultLayout = (): ReactElement => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
