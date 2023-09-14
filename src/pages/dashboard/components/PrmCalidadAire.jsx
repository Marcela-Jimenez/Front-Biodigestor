import IcnPlay from '../../../assets/icons/Play';

import { Title, Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    'Calidad del Aire': 89,
  },
  {
    'Calidad del Aire': 92,
  },
  {
    'Calidad del Aire': 100,
  },
  {
    'Calidad del Aire': 85,
  },
  {
    'Calidad del Aire': 90,
  },
];

const PrmCalidadAire = () => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Calidad del Aire</span>{' '}
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={chartdata}
        categories={['Calidad del Aire']}
        colors={['amber']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmCalidadAire;
