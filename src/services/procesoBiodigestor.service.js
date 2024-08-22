const API_URL = import.meta.env.VITE_API_URL;

export const CreateCiclo = async (id, fechaFinProceso) => {
  const result = await fetch(`${API_URL}/ProcesoBiodigestor`, {
    method: 'POST',
    body: JSON.stringify({
      prBBgrId: id,
      bgrFchAprxFnlProceso: fechaFinProceso,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const GetCiclo = async (id) => {
  const result = await fetch(`${API_URL}/ProcesoBiodigestor/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};
