import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findData = () => {
  return axios.get(`${hostNameUrl}/security`);
};