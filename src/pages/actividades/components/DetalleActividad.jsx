import PropTypes from 'prop-types';

import { Card } from '@tremor/react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import IcnTrash from '../../../assets/icons/Trash';
import IcnPencil from '../../../assets/icons/Pencil';

const DetalleActividad = ({ actividad }) => {
  const { fecha, responsable, completado } = actividad;
  return (
    <Card className="shadow-md space-y-3">
      <div className="flex justify-between">
        <h2 className="">Ver actividades Asignadas</h2>
        <button className="text-xs text-slate-400">Recordar</button>
      </div>
      <div className="space-x-3">
        <span className="text-slate-400">Fecha: </span>
        <span className="text-slate-700">
          {format(fecha, 'MMMM dd, yyyy', { locale: es })}
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={responsable.foto}
            alt={`Imagen perfil responsable ${responsable.nombre}`}
            className="w-8 rounded-full object-cover object-center"
          />
          <span className="text-slate-700 text-sm">{responsable.nombre}</span>
        </div>
        <div className="flex items-center space-x-2">
          {!completado && (
            <div className="flex space-x-2">
              <IcnPencil
                classCustom={
                  'w-4 text-slate-300 hover:text-teal-500 hover:cursor-pointer'
                }
              />
              <IcnTrash
                classCustom={
                  'w-4 text-slate-300 hover:text-teal-500 hover:cursor-pointer'
                }
              />
            </div>
          )}
          <button
            className={`w-24 font-light text-xs px-2 py-1  text-white rounded-lg ${
              completado
                ? 'bg-teal-500 hover:bg-teal-600'
                : 'bg-amber-500 hover:bg-amber-600'
            }`}
          >
            {completado ? 'Completado' : 'Cancelar'}
          </button>
        </div>
      </div>
    </Card>
  );
};
export default DetalleActividad;

DetalleActividad.propTypes = {
  actividad: PropTypes.object.isRequired,
};
