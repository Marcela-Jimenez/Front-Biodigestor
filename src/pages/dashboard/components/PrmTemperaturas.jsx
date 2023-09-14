import { Card, Title, AreaChart } from '@tremor/react';
import { useEffect, useState } from 'react';
import IcnPlay from '../../../assets/icons/Play';

const chartdata = [
  {
    Tiempo: '01:00',
    Interna: 30,
    Externa: 25,
  },
  {
    Tiempo: '02:00',
    Interna: 32,
    Externa: 26,
  },
  {
    Tiempo: '03:00',
    Interna: 34,
    Externa: 23,
  },
  {
    Tiempo: '04:00',
    Interna: 29,
    Externa: 28,
  },
  {
    Tiempo: '05:00',
    Interna: 36,
    Externa: 30,
  },
  {
    Tiempo: '06:00',
    Interna: 40,
    Externa: 25,
  },
];

const TemperaturaFormat = (number) => {
  return `${number}°C`;
};

const PrmTemperaturas = () => {
  const [data, setData] = useState(chartdata);

  return (
    <Card className="h-full">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Temperaturas</span>
      </Title>
      <AreaChart
        className=""
        curveType="natural"
        data={data}
        index="Tiempo"
        categories={['Interna', 'Externa']}
        colors={['amber', 'teal']}
        valueFormatter={TemperaturaFormat}
      />
    </Card>
  );
};
export default PrmTemperaturas;
