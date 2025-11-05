const API_BASE = `${import.meta.env.VITE_BACKEND_URL}/api/session`;

export async function createSession() {
  const res = await fetch(`${API_BASE}/create`, { method: "POST" });
  return res.json();
}

export async function getSession(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}
