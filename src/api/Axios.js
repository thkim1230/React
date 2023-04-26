import axios from "axios";
// 서버 주소
const KH_DOMAIN = "http://localhost:8111";


const AxiosApi = {
    restaurantInfo: async (restaurantId) => {
      return await axios.get(KH_DOMAIN + `/restaurant/info?restaurantId=${restaurantId}`);
    },
    restaurantInfoFixed:async(restaurantId) =>{
      return await axios.get(KH_DOMAIN + `/restaurant/?restaurantId=${restaurantId}`)
    },
    restaurantMenu:async(restaurantId)=>{
      return await axios.get(KH_DOMAIN + `/restaurant/menu?restaurantId=${restaurantId}`)
    },
    restaurantReview:async(restaurantId)=>{
      return await axios.get(KH_DOMAIN + `/restaurant/review?restaurantId=${restaurantId}`)
    }

  }

export default AxiosApi;