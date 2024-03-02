import axios from "axios";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
const axiosJWT = axios.create();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentTime = new Date();
    const access_token = useSelector((state) => state.user.access_token);
    const decoded = jwtDecode(access_token);
    console.log(decoded);
    // if (decoded?.exp < currentTime.getTime() / 1000) {
    //   if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
    //     const data = await UserService.refreshToken(refreshToken);
    //     config.headers["token"] = `Bearer ${data?.access_token}`;
    //   } else {
    //   }
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;

export { axiosJWT };
