const API_URL = import.meta.env.VITE_API_URL;

export const GetCiclo = async () => {
  const result = await fetch(`${API_URL}/Biodigestor`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const CreateCiclo = async (fechaFinProceso) => {
  const result = await fetch(`${API_URL}/Biodigestor`, {
    method: 'POST',
    body: JSON.stringify({
      bgrFchMezcla: new Date(),
      bgrFchAprxFnlProceso: fechaFinProceso,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const GetLecturas = async () => {
  const result = await fetch(`${API_URL}/DatosBiodigestor`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const GetLecturasSD = async () => {
  const result = await fetch(`${API_URL}/DatosBiodigestor/SD`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};
