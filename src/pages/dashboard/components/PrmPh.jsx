import { Title, Card, LineChart } from '@tremor/react';

const PrmPh = ({ biodigesterReadList }) => {
  return (
    <Card className="">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Ph biol</span>
      </Title>
      <LineChart
        className="mt-6"
        curveType="natural"
        data={biodigesterReadList}
        categories={['phBiol']}
        colors={['amber']}
        yAxisWidth={40}
      />
    </Card>
  );
};
export default PrmPh;
