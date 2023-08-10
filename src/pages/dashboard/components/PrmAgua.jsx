import { Card, Title, AreaChart } from '@tremor/react';
import { useEffect, useState } from 'react';
import IcnPlay from '../../../assets/icons/Play';

const chartdata = [
  {
    date: 'Jan 22',
    'Nivel del agua': 2338,
  },
  {
    date: 'Feb 22',
    'Nivel del agua': 2103,
  },
  {
    date: 'Mar 22',
    'Nivel del agua': 2194,
  },
  {
    date: 'Apr 22',
    'Nivel del agua': 2108,
  },
  {
    date: 'May 22',
    'Nivel del agua': 1812,
  },
  {
    date: 'Jun 22',
    'Nivel del agua': 1726,
  },
];

const dataFormatter = (number) => {
  return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const PrmAgua = () => {
  const [data, setData] = useState(chartdata);

  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Promedio de aguas tanques</span>{' '}
        <span className="flex items-center space-x-1">
          <span className="text-slate-400">Filtro:</span>
          <span className="text-teal-500">Esta Semana</span>
          <IcnPlay classCustom={'w-3 rotate-90 text-slate-400'} />
        </span>
      </Title>
      <AreaChart
        className=""
        data={data}
        index="date"
        categories={['Nivel del agua']}
        colors={['cyan']}
        valueFormatter={dataFormatter}
        curveType="natural"
        stack={true}
      />
    </Card>
  );
};
export default PrmAgua;
