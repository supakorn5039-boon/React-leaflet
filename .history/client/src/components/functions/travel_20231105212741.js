import axios from "axios";

export const create = async (data) =>
  await axios.post("http://localhost:5001/api/travel", data);
