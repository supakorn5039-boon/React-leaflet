import axios from "axios";

export const create = async (data) =>
  await axios.post(process.env.REACT_APP_API + "/product", data);

export const getdata = async () => {
  return await axios.get(process.env.REACT_APP_API + "/product");
};
