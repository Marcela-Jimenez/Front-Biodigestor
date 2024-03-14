const urlApi = import.meta.env.VITE_API_URL;

import { createSignalRContext } from 'react-signalr/signalr';
export const SignalRContext = createSignalRContext();
const Providers = ({ children }) => {
  //return children;
  return (
    <SignalRContext.Provider
      url={`http://localhost:5240/api/hubReadBiodigester`}
    >
      {children}
    </SignalRContext.Provider>
  );
};
export default Providers;
