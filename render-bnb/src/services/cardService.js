const API_URL = '/api';

export const saveCard = async (card) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');
  const res = await fetch(`${API_URL}/card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(card)
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({ message: 'Error' }));
    throw new Error(data.message || 'Failed to save card');
  }
  return res.json();
};
