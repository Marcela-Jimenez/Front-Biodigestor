import IcnPlay from '../../../assets/icons/Play';

import { Title, Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    'Monoxido Carbono': 50,
  },
  {
    'Monoxido Carbono': 65,
  },
  {
    'Monoxido Carbono': 15,
  },
  {
    'Monoxido Carbono': 30,
  },
  {
    'Monoxido Carbono': 40,
  },
];

const PrmMonoxidoCarbono = () => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Monoxido de Carbono</span>
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={chartdata}
        categories={['Monoxido Carbono']}
        colors={['amber']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmMonoxidoCarbono;
