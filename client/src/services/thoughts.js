import api from './apiConfig';

export const getAllThoughts = async () => {
  const resp = await api.get('/thoughts');
  return resp.data;
}

export const getOneThought = async (id) => {
  const resp = await api.get(`/thoughts/${id}`);
  return resp.data;
}

export const postThought = async (thoughtData) => {
  const resp = await api.post('/thoughts', { thought: thoughtData });
  return resp.data;
}

export const putThought = async (id, thoughtData) => {
  const resp = await api.put(`/thoughts/${id}`, { thought: thoughtData });
  return resp.data;
}

export const destroyThought = async (id) => {
  const resp = await api.delete(`/thoughts/${id}`);
  return resp;
}