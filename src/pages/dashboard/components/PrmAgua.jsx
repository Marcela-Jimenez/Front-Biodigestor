import { Card, Title, AreaChart } from '@tremor/react';
import { useEffect, useState } from 'react';

const chartdata = [
  {
    date: 'Jan 22',
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    'The Pragmatic Engineer': 1726,
  },
];

const dataFormatter = (number) => {
  return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const PrmAgua = () => {
  const [data, setData] = useState(chartdata);

  return (
    <Card className="">
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className=""
        data={data}
        index="date"
        categories={['The Pragmatic Engineer']}
        colors={['cyan']}
        valueFormatter={dataFormatter}
        curveType="natural"
        stack={true}
      />
    </Card>
  );
};
export default PrmAgua;
