import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesConfig } from '~/shared/configs/routerConfig/routerConfig.tsx';

export const RouterProvider = () => {
  return (
    <Routes>
      {Object.values(RoutesConfig).map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        );
      })}
    </Routes>
  );
};
