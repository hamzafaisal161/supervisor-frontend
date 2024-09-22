import { apiClient } from './ApiClient';

export const retrieveAllSupervisorsApi = () => apiClient.get(`/api/supervisors`);

export const submitNotificationApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo);
