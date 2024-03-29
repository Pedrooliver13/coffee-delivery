// Packages
import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import { DefaultLayout } from 'components/layout';

// Pages
import { Home } from 'pages/home';
import { Checkout } from 'pages/checkout';
import { Success } from 'pages/success';

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
};
