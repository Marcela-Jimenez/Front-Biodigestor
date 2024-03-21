import { Title, Card, LineChart } from '@tremor/react';

const PrmPresion = ({ biodigesterReadList }) => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Presión</span>{' '}
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={biodigesterReadList}
        categories={['dtBPresion']}
        colors={['amber']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmPresion;
