import PrmTemperaturas from './components/PrmTemperaturas';
import PrmHumedadRelativa from './components/PrmHumedadRelativa';
import PrmPresion from './components/PrmPresion';
import PrmPh from './components/PrmPh';
import { Button, Card, Text, Title } from '@tremor/react';
import BadgeCustom from './components/BadgeCustom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';
//import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { SignalRContext } from '../../providers/providers';
import PrmVoltaje from './components/PrmVoltaje';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  CreateCiclo,
  GetCiclo,
} from '../../services/procesoBiodigestor.service';
import {
  GetLecturas,
  GetLecturasSD,
} from '../../services/datosBiodigestor.service';

import { GenerateReport } from '../../report/report';
import { pdf } from '@react-pdf/renderer';
import { Switch } from './components/Switch';
import { useParams } from 'react-router-dom';

const DatosBiodigestor = () => {
  const { id, name } = useParams();
  const [biodigesterRead, setBiodigesterRead] = useState();
  const [isRL, setIsRL] = useState(true);
  const [biodigesterReadList, setBiodigesterReadList] = useState([]);
  const [biodigesterReadSDList, setBiodigesterReadSDList] = useState([]);
  const [cicloActual, setCicloActual] = useState({});
  const [loadingReport, setLoadingReport] = useState(false);

  useEffect(() => {
    const obtenerCicloActual = async () => {
      try {
        const result = await GetCiclo(id);
        setCicloActual(result);
      } catch (error) {
        console.log('error al obtener el ciclo actual');
      }
    };
    const obtenerLecturasBiodigestor = async () => {
      try {
        const result = await GetLecturas(id);
        setBiodigesterReadList(result);
      } catch (error) {
        console.log('error al obtener las lecturas');
      }
    };

    const obtenerLecturasSD = async () => {
      try {
        const result = await GetLecturasSD(id);
        setBiodigesterReadSDList(result);
      } catch (error) {
        console.log('error al obtener las lecturas de la SD');
      }
    };

    obtenerCicloActual();
    obtenerLecturasBiodigestor();
    obtenerLecturasSD();
  }, []);

  const handleReporte = async () => {
    setLoadingReport(true);
    GetLecturas(id)
      .then((result) => {
        const pdfLink = document.createElement('a');
        document.body.appendChild(pdfLink);
        pdf(<GenerateReport entity={result} />)
          .toBlob()
          .then((blob) => {
            const blobUrl = window.URL.createObjectURL(blob);
            pdfLink.href = blobUrl;
            pdfLink.download =
              'certificate-' + new Date().getUTCMilliseconds() + '.pdf';
            pdfLink.click();
            setTimeout(() => {
              window.URL.revokeObjectURL(blobUrl);
              document.body.removeChild(pdfLink);
            }, 0);
          });
      })
      .finally(() => {
        setLoadingReport(false);
      });
  };

  const handleIniciarNuevoCiclo = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: 'Estás seguro?',
      text: 'Esta acción no se puede revertir!',
      inputLabel: 'Ingresa la fecha aproximada del fin de ciclo (opcional)',
      input: 'date',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, reinicia el ciclo!',
      cancelButtonText: 'Cancelar',
      preConfirm: async (fecha) => {
        try {
          const response = await CreateCiclo(id, fecha ? fecha : null);
          setCicloActual(response);
          return response;
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Se ha reiniciado el ciclo`,
          icon: 'success',
        });
      }
    });
  };

  SignalRContext.useSignalREffect('getReads', (result) => {
    if (result.dtBgrId === cicloActual.prBId) {
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
    }
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div>
        <Card className="h-full flex flex-col justify-between space-y-8 md:space-y-0">
          <div className="space-y-1">
            <Title className="text-xl">Biodigestor {name}</Title>
            {biodigesterRead?.dateRead && (
              <Text>
                Fecha y Hora última lectura:{' '}
                {format(new Date(biodigesterRead.dateRead), 'PPPPpp', {
                  locale: es,
                })}
              </Text>
            )}
            {cicloActual?.bgrFchMezcla && (
              <Text>
                Fecha y Hora Inicio ciclo:{' '}
                {format(new Date(cicloActual.bgrFchMezcla), 'PPPPpp', {
                  locale: es,
                })}
              </Text>
            )}
            {cicloActual?.bgrFchAprxFnlProceso && (
              <Text>
                Fecha y Hora Fin ciclo:{' '}
                {format(new Date(cicloActual.bgrFchAprxFnlProceso), 'PPPPpp', {
                  locale: es,
                })}
              </Text>
            )}
          </div>
          <div className="space-y-8">
            <Switch active={isRL} setActive={setIsRL} />
            <Text className="text-center text-lg font-bold">
              Datos Recibidos
            </Text>
            <div className="grid grid-cols-2 gap-6 [&_div]:grid [&_div]:text-center [&_div]:grid-cols-2 w-full ">
              <div>
                <Text>TI</Text>
                <BadgeCustom>{biodigesterRead?.dtBTmpInterna ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>TE</Text>
                <BadgeCustom>{biodigesterRead?.dtBTmpExterna ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>MV</Text>
                <BadgeCustom>{biodigesterRead?.dtBVoltaje ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>HR</Text>
                <BadgeCustom>
                  {biodigesterRead?.dtBHmdRelativa ?? 0}
                </BadgeCustom>
              </div>
              <div>
                <Text>PS</Text>
                <BadgeCustom>{biodigesterRead?.dtBPresion ?? 0}</BadgeCustom>
              </div>
              <div>
                <Text>PB</Text>
                <BadgeCustom>{biodigesterRead?.dtBPh ?? 0}</BadgeCustom>
              </div>
            </div>
          </div>
          <div className="self-center space-x-4">
            <Button
              onClick={handleReporte}
              variant="secondary"
              color="blue"
              disabled={loadingReport}
            >
              {loadingReport ? 'Generando...' : 'Generar reporte'}
            </Button>
            <Button
              onClick={handleIniciarNuevoCiclo}
              variant="secondary"
              color="red"
            >
              Iniciar nuevo ciclo
            </Button>
          </div>
        </Card>
      </div>
      <div className="">
        <PrmTemperaturas
          biodigesterReadList={
            isRL ? biodigesterReadList : biodigesterReadSDList
          }
        />
      </div>
      <div className="h-full">
        <PrmVoltaje
          biodigesterReadList={
            isRL ? biodigesterReadList : biodigesterReadSDList
          }
        />
      </div>
      <div className="">
        <PrmHumedadRelativa
          biodigesterReadList={
            isRL ? biodigesterReadList : biodigesterReadSDList
          }
        />
      </div>
      <div className="">
        <PrmPresion
          biodigesterReadList={
            isRL ? biodigesterReadList : biodigesterReadSDList
          }
        />
      </div>
      <div className="">
        <PrmPh
          biodigesterReadList={
            isRL ? biodigesterReadList : biodigesterReadSDList
          }
        />
      </div>
    </div>
  );
};
export default DatosBiodigestor;
