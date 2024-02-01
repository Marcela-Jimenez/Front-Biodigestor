import PrmTemperaturas from './components/PrmTemperaturas';
import PrmHumedadRelativa from './components/PrmHumedadRelativa';
import PrmPresion from './components/PrmPresion';
import PrmPh from './components/PrmPh';
import PrmMiliVoltios from './components/PrmMiliVoltios';
import { Button, Card, Text, Title } from '@tremor/react';
import BadgeCustom from './components/BadgeCustom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import { SignalRContext } from '../../providers/providers';

const Dashboard = () => {
  const [biodigesterRead, setBiodigesterRead] = useState();
  const [biodigesterReadList, setBiodigesterReadList] = useState([]);

  SignalRContext.useSignalREffect('getReads', (result) => {
    setBiodigesterRead(result);
    const limitReads = 15;
    if (biodigesterReadList.length >= limitReads) {
      const lastReadsBiodigesterReads = biodigesterReadList.slice(
        biodigesterReadList.length - limitReads + 1,
        biodigesterReadList.length
      );
      setBiodigesterReadList([...lastReadsBiodigesterReads, result]);
    } else {
      setBiodigesterReadList([...biodigesterReadList, result]);
    }
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div>
        <Card className="h-full flex flex-col justify-between space-y-12 md:space-y-0">
          <div>
            <Title className="text-xl">Biodigestor Lestoma v2.0</Title>
            <Text>
              Fecha y Hora:{' '}
              {format(
                new Date(biodigesterRead?.dateRead ?? new Date()),
                'PPPPpp',
                {
                  locale: es,
                }
              )}
            </Text>
          </div>
          <div className="space-y-8">
            <Text className="text-center text-lg font-bold">
              Datos Recibidos
            </Text>
            <div className="grid grid-cols-2 gap-6 [&_div]:grid [&_div]:text-center [&_div]:grid-cols-2 w-full ">
              <div>
                <Text>TI</Text>
                <BadgeCustom>
                  {biodigesterRead?.insideTemperature ?? 0}
                </BadgeCustom>
              </div>
              <div>
                <Text>TE</Text>
                <BadgeCustom>
                  {biodigesterRead?.outsideTemperature ?? 0}
                </BadgeCustom>
              </div>
              <div>
                <Text>MV</Text>
                <BadgeCustom>{biodigesterRead?.miliVoltios ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>HR</Text>
                <BadgeCustom>
                  {biodigesterRead?.relativeHumidety ?? 0}
                </BadgeCustom>
              </div>
              <div>
                <Text>PS</Text>
                <BadgeCustom>{biodigesterRead?.presion ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>PB</Text>
                <BadgeCustom>{biodigesterRead?.phBiol ?? 0}</BadgeCustom>
              </div>
            </div>
          </div>
          <Button className="self-end" variant="secondary" color="red">
            Stop
          </Button>
        </Card>
      </div>
      <div className="">
        <PrmTemperaturas biodigesterReadList={biodigesterReadList} />
      </div>
      <div className="h-full">
        <PrmMiliVoltios biodigesterReadList={biodigesterReadList} />
      </div>
      <div className="">
        <PrmHumedadRelativa biodigesterReadList={biodigesterReadList} />
      </div>
      <div className="">
        <PrmPresion biodigesterReadList={biodigesterReadList} />
      </div>
      <div className="">
        <PrmPh biodigesterReadList={biodigesterReadList} />
      </div>
    </div>
  );
};
export default Dashboard;
