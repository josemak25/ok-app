/*
 *`ALL NETWORK API REQUESTS AND INTERCEPTOR BUILDER
 * @method POST - http verb for request
 * @method GET - http verb for get
 * @method DELETE - http verb for delete
 * @method PUT - http verb for update
 * @GET - send a get request to the server
 * @POST - send a post request to the server
 * @DELETE - send a delete request to the server
 * @PUT - send a put request to the server
 */

import ENV_VARIABLES, { ENV_VARIABLES_TYPES } from '../../config';

class API {
  private BASE_URL: string;

  constructor(ENV: ENV_VARIABLES_TYPES) {
    this.BASE_URL = ENV.DATABASE_URI;
  }

  get(): Promise<any> {
    return fetch(`${this.BASE_URL}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
  }
}

export default new API(ENV_VARIABLES);
