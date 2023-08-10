import PnlActividades from './components/PnlActividades';
import PrmAgua from './components/PrmAgua';
import PrmSensores from './components/prmSensores';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="row-span-2 ">
        <PnlActividades />
      </div>
      <div className="">
        <PrmAgua />
      </div>
      <div className="">
        <PrmSensores />
      </div>
    </div>
  );
};
export default Dashboard;
