const urlApi = import.meta.env.VITE_API_URL;

import { createSignalRContext } from 'react-signalr/signalr';
export const SignalRContext = createSignalRContext();
const Providers = ({ children }) => {
  //return children;
  return (
    <SignalRContext.Provider url={`${urlApi}/hubReadBiodigester`}>
      {children}
    </SignalRContext.Provider>
  );
};
export default Providers;
