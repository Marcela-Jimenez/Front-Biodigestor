import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

//*Imágenes
import escudo_UDEC from '../../assets/img/escudo_UDEC.webp';
import escudo_UDEC_Completo from '../../assets/img/escudo_UDEC_Completo.webp';
import imgProfile from '../../assets/img/avatar.webp';

//*Iconos
import DashboardIcon from '../../assets/icons/dashboard.jsx';
import tasks_icon from '../../assets/icons/tasks.svg';
import contacts_icon from '../../assets/icons/contacts.svg';
import chat_icon from '../../assets/icons/chat.svg';
import settings_icon from '../../assets/icons/settings.svg';
import toggle_icon from '../../assets/icons/toggle.svg';
import icnBell from '../../assets/icons/bell.svg';

const DashboardLayout = () => {
  const [toggler, setToggler] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className={`${toggler ? 'block md:flex' : 'flex'} bg-zinc-100`}>
      <aside
        className={`bg-teal-500 h-screen p-2 flex flex-col space-y-5 ${
          toggler ? 'md:w-2/5 lg:w-1/4 2xl:w-1/5' : ''
        } `}
      >
        <img
          src={toggler ? escudo_UDEC_Completo : escudo_UDEC}
          alt="Escudo UDEC"
          className={`aspect-auto mx-auto ${toggler ? 'w-3/5' : 'w-10'}`}
        />
        <div className="flex space-x-2">
          <img
            src={imgProfile}
            alt="Imagen Avatar"
            className="aspect-auto w-10 rounded-full object-cover object-center"
          />
          <span className={`${toggler ? '' : 'hidden'} w-10/12`}>
            <p className="text-xl">Diana Blanco</p>
            <p className="truncate">dmarcelablanco@ucundinamarca.edu.co</p>
          </span>
        </div>

        <nav className="flex flex-col  h-full justify-between">
          <ul>
            <li>
              <Link
                className={`flex items-center space-x-2 hover:text-white transition-colors ${
                  pathname === '/' ? 'text-white' : ''
                }`}
                to={'/'}
              >
                <DashboardIcon classText="w-10 p-1 text-zinc-300" />
                <span className={toggler ? '' : 'hidden'}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center space-x-2 hover:text-white transition-colors ${
                  pathname === '/actividades' ? 'text-white' : ''
                }`}
                to={`/actividades`}
              >
                <img
                  src={tasks_icon}
                  alt="icono de actividades"
                  className="w-10 p-1"
                />
                <span className={toggler ? '' : 'hidden'}>Actividades</span>
              </Link>
            </li>

            <li>
              <Link
                className={`flex items-center space-x-2 hover:text-white transition-colors ${
                  pathname === '/usuarios' ? 'text-white' : ''
                }`}
                to={`/usuarios`}
              >
                <img
                  src={contacts_icon}
                  alt="icono de usuarios"
                  className="w-10 p-1"
                />
                <span className={toggler ? '' : 'hidden'}>Usuarios</span>
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center space-x-2 hover:text-white transition-colors ${
                  pathname === '/solicitudes' ? 'text-white' : ''
                }`}
                to={`/solicitudes`}
              >
                <img
                  src={chat_icon}
                  alt="icono de solicitudes"
                  className="w-10 p-1"
                />
                <span className={toggler ? '' : 'hidden'}>Solicitudes</span>
              </Link>
            </li>

            <li className="border-t mt-2">
              <Link
                className={`flex items-center space-x-2 hover:text-white transition-colors ${
                  pathname === '/configuraciones' ? 'text-white' : ''
                }`}
                to={`/configuraciones`}
              >
                <img
                  src={settings_icon}
                  alt="icono de configuraciones"
                  className="w-10 p-1"
                />
                <span className={toggler ? '' : 'hidden'}>Configuraciones</span>
              </Link>
            </li>
          </ul>

          <ul className="flex justify-end">
            <li>
              <div>
                <input
                  type="checkbox"
                  name="toggleAside"
                  id="toggleAside"
                  value={toggler}
                  onChange={(e) => setToggler(e.target.checked)}
                  className="hidden"
                />
                <label htmlFor="toggleAside" className="cursor-pointer">
                  <img
                    src={toggle_icon}
                    alt="icono de barra lateral"
                    className="w-10 p-1"
                  />
                  <span className="hidden">Barra Lateral</span>
                </label>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="w-full h-screen overflow-auto">
        <header className="flex bg-white">
          <div className="relative w-full mx-3 items-center justify-center h-14">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5">
              <img src={icnBell} alt="Icono Campana" className="w-8" />
              <span className="absolute flex h-3 w-3 top-3 right-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-white text-gray-900 text-sm block w-full pl-12 p-3 h-full focus:border-0 focus:ring-0 focus:outline-0 focus:shadow-lg placeholder:text-gray-400"
              placeholder="Busqueda"
            />
          </div>
        </header>
        <div className="mx-3 mt-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default DashboardLayout;
