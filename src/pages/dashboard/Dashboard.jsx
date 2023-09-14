import PrmTemperaturas from './components/PrmTemperaturas';
import PrmHumedadRelativa from './components/PrmHumedadRelativa';
import PrmCalidadAire from './components/PrmCalidadAire';
import PrmGas from './components/PrmGas';
import PrmMonoxidoCarbono from './components/PrmMonoxidoCarbono';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-white rounded-2xl p-3 max-h-[28rem] overflow-scroll">
        <PrmTemperaturas />
      </div>
      <div className="h-full">
        <PrmTemperaturas />
      </div>
      <div className="">
        <PrmHumedadRelativa />
      </div>
      <div className="">
        <PrmCalidadAire />
      </div>
      <div className="">
        <PrmGas />
      </div>
      <div className="">
        <PrmMonoxidoCarbono />
      </div>
    </div>
  );
};
export default Dashboard;
