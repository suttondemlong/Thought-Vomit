import api from './apiConfig';

export const getAllMoods = async () => {
  const resp = await api.get('/moods');
  return resp.data;
}

export const addMood = async (moodId, thoughId) => {
  const resp = await api.put(`/moods/${moodId}/thoughts/${thoughtId}`);
  return resp.data;
}