import { Title, Card, LineChart } from '@tremor/react';

const PrmGas = ({ biodigesterReadList }) => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Gas</span>
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={biodigesterReadList}
        categories={['phBiol']}
        colors={['teal']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmGas;
