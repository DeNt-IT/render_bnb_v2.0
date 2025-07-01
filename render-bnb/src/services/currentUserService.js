export const fetchCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const res = await fetch('/api/profile', {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) return null;
  return res.json();
};
