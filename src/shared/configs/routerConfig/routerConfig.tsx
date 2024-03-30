import { RouteProps } from 'react-router-dom';
import { MainPage } from '~/pages/MainPage';
import { CartPage } from '~/pages/CartPage';
import { ErrorPage } from '~/pages/ErrorPage';
import { FavouritesPage } from '~/pages/FavouritesPage';

export enum Routes {
  MAIN = 'main',
  CART = 'cart',
  FAVOURITES = 'favourites',
  NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.CART]: '/cart',
  [Routes.FAVOURITES]: '/favourites',
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
  [Routes.FAVOURITES]: {
    path: RoutesPaths.favourites,
    element: <FavouritesPage />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPaths.not_found,
    element: <ErrorPage />,
  },
};
