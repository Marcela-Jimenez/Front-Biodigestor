import IcnPlay from '../../../assets/icons/Play';

import { Title, Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    Gas: 0,
  },
  {
    Gas: 20,
  },
  {
    Gas: 40,
  },
  {
    Gas: 60,
  },
  {
    Gas: 100,
  },
];

const PrmGas = () => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Gas</span>
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={chartdata}
        categories={['Gas']}
        colors={['teal']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmGas;
