import './styles/index.css';
import { Header } from '~/widgets/Header';
import { RouterProvider } from '~/app/providers/RouterProvider';
import { Footer } from '~/widgets/Footer/Footer.tsx';
import React from 'react';

function App() {
  return (
    <div className={'app'}>
      <div className={'content-page'}>
        <Header />
        <RouterProvider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
