import axios from "axios";
// 서버 주소
const KH_DOMAIN = "http://localhost:8111";


const AxiosApi = {
  // 매장 id 리스트
    restaurantIdList:async()=>{
      return await axios.get(KH_DOMAIN +`/`)
    },
// 매장 리스트
    restaurantList:async(restaurantId)=>{
      return await axios.get(KH_DOMAIN + `/list?restaurantId=${restaurantId}`)
    },

  //페이지 상단 고정 매장정보 불러오기
    restaurantInfoFixed:async(restaurantId) =>{
      return await axios.get(KH_DOMAIN + `/restaurant/?restaurantId=${restaurantId}`)
    }, 
    
  // 매장 상세 정보 불러오기
    restaurantInfo: async (restaurantId) => {
      return await axios.get(KH_DOMAIN + `/restaurant/info?restaurantId=${restaurantId}`);
    },
    
  // 매장의 메뉴 정보 불러오기
    restaurantMenu:async(restaurantId)=>{
      return await axios.get(KH_DOMAIN + `/restaurant/menu?restaurantId=${restaurantId}`)
    },
    
  //매장의 리뷰 정보 불러오기
    restaurantReview:async(restaurantId)=>{
      return await axios.get(KH_DOMAIN + `/restaurant/review?restaurantId=${restaurantId}`)
    }

  }

export default AxiosApi;