import { Card, Title, AreaChart } from '@tremor/react';

const TemperaturaFormat = (number) => {
  return `${number}°C`;
};

const PrmTemperaturas = ({ biodigesterReadList }) => {
  return (
    <Card className="h-full">
      <Title className="flex justify-between border-b-2 border-slate-200 py-4">
        <span>Temperaturas</span>
      </Title>
      <AreaChart
        className=""
        curveType="natural"
        data={biodigesterReadList}
        index="dateRead"
        categories={['insideTemperature', 'outsideTemperature']}
        colors={['amber', 'teal']}
        valueFormatter={TemperaturaFormat}
      />
    </Card>
  );
};
export default PrmTemperaturas;
