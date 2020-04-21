/**
 * Define the Module REST API services
 */
import { service } from '../../app/services';


/**
 * Basic CRUD definition
 */
const servicesApi = {
  list: (payload) =>
    service
      .get('/alerts/active', {params: payload})
      .then(response => response)
      .catch(error => error),
  create: (payload) =>
    service
      .post('/alerts', payload)
      .then(response => response)
      .catch(error => error),
  update: (id, payload) =>
    service
      .patch(`/alerts/${id}`, payload)
      .then(response => response)
      .catch(error => error),
  delete: (id) =>
    service
      .delete(`/alerts/${id}`)
      .then(response => response)
      .catch(error => error)
};

export default servicesApi;
