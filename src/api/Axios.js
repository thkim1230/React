import axios from "axios";
// 서버 주소
const KH_DOMAIN = "http://localhost:8111";
const FRONTEND_DOMAIN = "http://localhost:3000";


const AxiosApi = {
    restaurantInfo: async (restaurantId) => {
      return await axios.get(
        `${KH_DOMAIN}/restaurant/info/${restaurantId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": FRONTEND_DOMAIN,
          },
        }
      );
    },
    restaurantMain: async (restaurantId) => {
      return await axios.get(
        `${KH_DOMAIN}/restaurant/${restaurantId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": FRONTEND_DOMAIN,
          },
        }
      );
    },
  };
  


export default AxiosApi;