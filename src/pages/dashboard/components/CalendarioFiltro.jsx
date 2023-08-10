import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import PropTypes from 'prop-types';

const CalendarioFiltro = ({ tipo }) => {
  if (tipo === 0) return <CalendarioDia />;
  if (tipo === 1) return <CalendarioSemana />;
  if (tipo === 2) return <CalendarioMes />;
  return <div>CalendarioFiltro</div>;
};
export default CalendarioFiltro;

CalendarioFiltro.propTypes = {
  tipo: PropTypes.number.isRequired,
};

const CalendarioDia = () => {
  return <div>Dia</div>;
};

const CalendarioSemana = () => {
  const diasSemana = Array.from(new Array(7), (_, i) => {
    const fechaActual = new Date();
    const fecha = fechaActual.setDate(fechaActual.getDate() + i);
    return {
      dia: format(fecha, 'EEE', {
        locale: es,
      }),
      fecha: format(fecha, 'dd'),
    };
  });
  return (
    <div className="flex justify-between">
      {diasSemana.map(({ dia, fecha }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center group hover:cursor-pointer space-y-1"
        >
          <p className="capitalize text-slate-400 group-hover:text-teal-400">
            {dia}
          </p>
          <p
            className={`text-slate-500  group-hover:text-teal-400 p-1 ${
              index === 0 ? 'bg-teal-500 text-white rounded-full' : ''
            }`}
          >
            {fecha}
          </p>
        </div>
      ))}
    </div>
  );
};
const CalendarioMes = () => {
  return <div>Mes</div>;
};
