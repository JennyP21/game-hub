import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f7c8e2ced13a4167825d31131e582235",
  },
});
