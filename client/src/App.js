import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import ErrorPage from './error-page';
import Home from './pages/Home';
import Connections from './pages/Connections';
import Profile from './pages/Profile';
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Connections />,
        path: '/connection',
      },
      {
        element: <Profile />,
        path: '/profile',
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
