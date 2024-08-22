const API_URL = import.meta.env.VITE_API_URL;

export const GetLecturas = async (id) => {
  const result = await fetch(`${API_URL}/DatosBiodigestor/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const GetLecturasSD = async (id) => {
  const result = await fetch(`${API_URL}/DatosBiodigestor/SD/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};
