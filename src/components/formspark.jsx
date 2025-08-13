
export const buildFormsparkUrl = (value) => {
  if (!value) throw new Error('Formspark URL/ID fehlt');
  return value.startsWith('http') ? value : `https://submit-form.com/${value}`;
};

export const submitToFormspark = async (url, payload, { signal } = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', // wichtig für CORS/vernünftige Responses
    },
    body: JSON.stringify(payload),
    signal,
  });

  let data = null;
  try {
    // Manche Responses sind leer (204). Dann bleibt data null.
    data = await res.json();
  } catch (err){
    console.log(err)
  }

  if (res.ok) return { ok: true, data };

  const message =
    data?.message ||
    data?.error ||
    (res.status ? `Fehler ${res.status}` : 'Unbekannter Fehler');

  return { ok: false, status: res.status, message };
};
