import axios from "../axios";

let handleCreateUserService = (data) => {
  return axios.post("/api/user/create-user", data);
};

let handleCheckUserExistService = (userName) => {
  return axios.get(`/api/user/check-user-exist?userName=${userName}`);
};

export { handleCreateUserService, handleCheckUserExistService };
