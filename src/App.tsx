import React from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Home} from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
]);

export const App = () => {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
};
