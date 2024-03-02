import axios from "../axios";

let handleCreateUserService = async (data) => {
  let res = await axios.post("/api/user/create-user", data);
  return res.data;
};

let handleCheckUserExistService = async (userName) => {
  return axios.get(`/api/user/check-user-exist?userName=${userName}`);
};

let handleLoginService = async (data) => {
  let res = await axios.post("/api/user/login", data, {
    withCredentials: true,
  });
  return res;
};

let handleGetAllUser = () => {
  return axios.get("/api/user/get-all-user");
};

let handleGetDetailUserService = async (id, access_token) => {
  let res = await axios.get(`/api/user/get-detail-user?userId=${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res;
};

let handleRefershTokenService = async (refresh_token) => {
  let res = await axios.post(`/api/user/refresh-token`, {
    headers: {
      token: `Bearer ${refresh_token}`,
    },
  });
  return res.access_token;
};

export {
  handleCreateUserService,
  handleCheckUserExistService,
  handleGetAllUser,
  handleLoginService,
  handleGetDetailUserService,
  handleRefershTokenService,
};
