import Request from '../index';
import { ILoginApi } from './types';
const http = Request.requestMethod;

const loginApi: ILoginApi = {
  login(params) {
    return http.post('/login', params);
  },
};
export default loginApi;
