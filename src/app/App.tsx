import './styles/index.css';
import { Header } from '~/widgets/Header';
import { RouterProvider } from '~/app/providers/RouterProvider';

function App() {
  return (
    <div className={'app'}>
      <div className={'content-page'}>
        <Header />
        <RouterProvider />
      </div>
    </div>
  );
}

export default App;
