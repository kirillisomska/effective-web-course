import type { RouteObject } from 'react-router-dom';
import React from 'react';

import Layout from '../layouts/Layout';
import NoMatch from './NoMatch';
import Characters from './Characters';
import Comics from './Comics';
import Series from './Series';
import CharactersFullPage from './Characters/CharactersFullPage';
import ComicsFullPage from './Comics/ComicsFullPage';
import SeriesFullPage from './Series/SeriesFullPage';
import Favourites from './Favourites';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Characters /> },
      {
        path: '/characters',
        children: [
          { index: true, element: <Characters /> },
          { path: '/characters/:id', element: <CharactersFullPage /> }
        ]
      },
      {
        path: '/comics',
        children: [
          { index: true, element: <Comics /> },
          { path: '/comics/:id', element: <ComicsFullPage /> }
        ]
      },
      {
        path: '/series',
        children: [
          { index: true, element: <Series /> },
          { path: '/series/:id', element: <SeriesFullPage /> }
        ]
      },
      {
        path: '/favourites',
        children: [{ index: true, element: <Favourites /> }]
      },
      { path: '*', element: <NoMatch /> }
    ]
  }
];

export default routes;
