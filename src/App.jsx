import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './Layout/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Usuarios from './pages/usuarios/Usuarios';
import Login from './pages/login/Login';
import Actividades from './pages/actividades/Actividades';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
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
  return <RouterProvider router={router} />;
};
export default App;
