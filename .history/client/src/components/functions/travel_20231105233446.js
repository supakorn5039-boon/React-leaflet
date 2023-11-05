import axios from "axios";

export const create = async (data) =>
  await axios.post(process.env.REACT_APP_API, data);

export const list = async () => {
  return await axios.get("http://localhost:5001/api/travel");
};
