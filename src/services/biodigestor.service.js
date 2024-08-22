const API_URL = import.meta.env.VITE_API_URL;

export const GetBiodigestores = async () => {
  const result = await fetch(`${API_URL}/Biodigestor`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const DeleteBiodigestores = async (id) => {
  const result = await fetch(`${API_URL}/Biodigestor/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};

export const CreateBiodigestores = async (nombre) => {
  const result = await fetch(`${API_URL}/Biodigestor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bgrnombre: nombre }),
  });
  var data = await result.json();
  if (result.status !== 200) throw new Error(result.statusText);
  return data;
};
