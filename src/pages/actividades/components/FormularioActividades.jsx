import { useState } from 'react';
import { DateRangePicker } from '@tremor/react';
import { es } from 'date-fns/locale';

const FormularioActividades = () => {
  const [value, setValue] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className="flex bg-white rounded-lg shadow-lg p-3">
      <div className="flex flex-col space-y-3">
        <input
          type="text"
          className="w-[42rem] shadow-md border border-black rounded-md p-1.5 text-center"
          placeholder="Ingresar actividad"
        />
        <input
          type="text"
          className="w-[42rem] shadow-md border border-black rounded-md p-1.5 text-center"
          placeholder="Usuario Asignado"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <DateRangePicker
            className="accent-green-500 text-red-500"
            value={value}
            onValueChange={setValue}
            locale={es}
            enableSelect={false}
          ></DateRangePicker>
        </div>
        <button>Asignar</button>
      </div>
    </div>
  );
};
export default FormularioActividades;
