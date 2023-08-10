import { Card } from '@tremor/react';
import CalendarioFiltro from './CalendarioFiltro';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import DetalleActividad from './DetalleActividad';
import IcnPlay from '../../../assets/icons/Play';

const actividades = [
  {
    id: 1,
    fecha: new Date(),
    responsable: {
      nombre: 'Jorge Forero',
      foto: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    completado: true,
  },
  {
    id: 2,
    fecha: new Date(),
    responsable: {
      nombre: 'Andrea Molano',
      foto: 'https://randomuser.me/api/portraits/women/90.jpg',
    },
    completado: false,
  },
  {
    id: 3,
    fecha: new Date(),
    responsable: {
      nombre: 'Linda Solarte',
      foto: 'https://randomuser.me/api/portraits/women/70.jpg',
    },
    completado: true,
  },
];

const PnlActividades = () => {
  return (
    <Card className="h-full space-y-4">
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <p className="text-slate-700">8 Tareas completadas de 10</p>
          <p className="flex items-center space-x-1">
            <span className="text-slate-400">Filtro:</span>
            <span className="text-teal-500">Esta Semana</span>
            <IcnPlay classCustom={'w-3 rotate-90 text-slate-400'} />
          </p>
        </div>
        <div className="bg-slate-200 w-full relative h-1 rounded-lg">
          <div className="bg-teal-500 absolute h-1 left-0 rounded-lg w-3/4"></div>
        </div>
        <div>
          <span className="text-lg  ">
            {format(new Date(), 'dd MMMM, eeee', { locale: es })}
          </span>
        </div>
      </div>
      <div>
        <CalendarioFiltro tipo={1} />
      </div>
      <div className="mx-1 space-y-4">
        {actividades.map((actividad) => (
          <div key={actividad.id} className="">
            <DetalleActividad actividad={actividad} />
          </div>
        ))}
      </div>
    </Card>
  );
};
export default PnlActividades;
