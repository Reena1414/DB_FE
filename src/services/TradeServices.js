import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findTrade = () => {
  return axios.get(`${hostNameUrl}/trade`);
};