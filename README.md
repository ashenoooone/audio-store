## О проекте

Проект представляет из себя магазин по продаже наушников.

## Список выполненных задач

1. [x] Разработка с использованием React, React Router, с двумя страницами интернет-магазина: каталог товаров и корзина.
2. [x] Реализация удобного и масштабируемого роутинга.
3. [x] Все элементы ссылок и иконок отзываются при наведении на них.
4. [x] Реализация перехода с корзины обратно на главную страницу через логотип или кнопку возврата.
5. [x] При нажатии на кнопку "Купить" в карточке товара на первой странице увеличивается счетчик товаров рядом с иконкой корзины.
6. [x] При изменении количества товаров в корзине обновляется сумма и количество товаров.
7. [x] Хранение данных о каждом товаре в виде элемента массив
8. [x] Возможность удалять карточку товара из корзины товаров;
9. [x] Добавил интернационализацию (смену языков)
10. [x] Адаптивность на все устройства
11. [x] Реализовать «Переход к оформлению» на отдельную страницу с формой оплаты или
   модальное окно с формой оплаты;
12. [x] Реализовать модальное окно с подробной информацией о товаре, добавить в карточку
    иконку просмотра на свой выбор, которая будет открывать данное модальное окно
13. [x] Добавил страницу избранное



## Роутинг

Основной файл для роутинга - ```src/shared/configs/routerConfig/routerConfig.ts```

В нем находятся следующие переменные: 
```tsx
 // енам для хранения всех роутов
export enum Routes {
  MAIN = 'main',
  CART = 'cart',
  FAVOURITES = 'favourites',
  TERMS = 'terms',
  CONTACTS = 'contacts',
  NOT_FOUND = 'not_found',
}
// объект для хранения путей для роутов
export const RoutesPaths: Record<Routes, string> = {
  [Routes.CART]: '/cart',
  [Routes.FAVOURITES]: '/favourites',
  [Routes.TERMS]: '/terms',
  [Routes.CONTACTS]: '/contacts',
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '*',
};
// объект для хранения настроек роутов
export const RoutesConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [Routes.CONTACTS]: {
    path: RoutesPaths.contacts,
    element: <ContactsPage />,
  },
  [Routes.TERMS]: {
    path: RoutesPaths.terms,
    element: <TermsPage />,
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

```

Далее в файле ```src/app/providers/RouterProvider/ui/RouterProvider.tsx``` создаем роуты следующим образом
```tsx
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
```


В итоге, благодаря такому хранению роутов, мы легко можем добавлять новые страницы в приложение.
## Запуск в режиме разработки

1. Установите все зависимости, запустив команду:

```bash
npm install
```

2. Запустите локальный сервер разработки с помощью следующей команды:

```bash
npm run dev
```

## Запуск в продакшн режиме

1. Соберите проект, выполните следующие команды:

```bash
npm run build
```

Эта команда сначала выполнит компиляцию TypeScript кода, а затем соберет проект для продакшн с использованием Vite.

2. Запустите предпросмотр собранного проекта:

```bash
npm run preview
```


## Зависимости

Вот основные зависимости проекта:

- `react`: 18.2.0
- `react-dom`: 18.2.0
- `react-router-dom`: 6.22.3
- `zustand`: 4.5.2
- `typescript`: 4.5.2

