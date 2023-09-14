import IcnPlay from '../../../assets/icons/Play';

import { Title, Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    'Humedad Relativa': 20,
  },
  {
    'Humedad Relativa': 30,
  },
  {
    'Humedad Relativa': 25,
  },
  {
    'Humedad Relativa': 60,
  },
  {
    'Humedad Relativa': 40,
  },
];

const PrmHumedadRelativa = () => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Humedad Relativa</span>
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={chartdata}
        categories={['Humedad Relativa']}
        colors={['teal']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmHumedadRelativa;
