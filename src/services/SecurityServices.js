import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findSecurity = () => {
  return axios.get(`${hostNameUrl}/security`);
};