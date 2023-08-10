import { Card, Title, DonutChart } from '@tremor/react';
import IcnPlay from '../../../assets/icons/Play';

const prmSensores = [
  {
    status: 'Inactivo',
    percent: 40,
  },
  {
    status: 'Activo',
    percent: 60,
  },
];

const valueFormatter = () => {
  return `${prmSensores[1].percent}%`;
};

const PrmSensores = () => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Promedio de sensores en uso</span>{' '}
        <span className="flex items-center space-x-1">
          <span className="text-slate-400">Filtro:</span>
          <span className="text-teal-500">Este Mes</span>
          <IcnPlay classCustom={'w-3 rotate-90 text-slate-400'} />
        </span>
      </Title>
      <DonutChart
        className="mt-6"
        data={prmSensores}
        category="percent"
        index="status"
        valueFormatter={valueFormatter}
        colors={['amber', 'teal']}
      />
    </Card>
  );
};
export default PrmSensores;
