import { RouteProps } from 'react-router-dom';
import { MainPage } from '~/pages/MainPage';
import { CartPage } from '~/pages/CartPage';
import { ErrorPage } from '~/pages/ErrorPage';

export enum Routes {
  MAIN = 'main',
  CART = 'cart',
  NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.CART]: '/cart',
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '*',
};

export const RoutesConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [Routes.CART]: {
    path: RoutesPaths.cart,
    element: <CartPage />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPaths.not_found,
    element: <ErrorPage />,
  },
};
