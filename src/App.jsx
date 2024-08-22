import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './Layout/dashboard/DashboardLayout';
import DatosBiodigestor from './pages/dashboard/DatosBiodigestor';
import Biodigestor from './pages/dashboard/Biodigestor';
import Usuarios from './pages/usuarios/Usuarios';
import Login from './pages/login/Login';
import Actividades from './pages/actividades/Actividades';
import Providers from './providers/providers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Biodigestor />,
      },
      { path: '/:name/:id', element: <DatosBiodigestor /> },
      { path: 'usuarios', element: <Usuarios /> },
      { path: 'actividades', element: <Actividades /> },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
export default App;
