import axios from "axios";
// 서버 주소
const HD_DOMAIN = "http://localhost:8111";


const AxiosApi = {

  // 매장 리스트 불러오기
    restaurantList:async()=>{
      return await axios.get(HD_DOMAIN + `/list`)
    },

  //페이지 상단 고정 매장정보 불러오기
    restaurantInfoFixed:async(restaurantId) =>{
      return await axios.get(HD_DOMAIN + `/restaurant/?restaurantId=${restaurantId}`)
    }, 
    
  // 매장 상세 정보 불러오기
    restaurantInfo: async (restaurantId) => {
      return await axios.get(HD_DOMAIN + `/restaurant/info?restaurantId=${restaurantId}`);
    },
    
  // 매장의 메뉴 정보 불러오기
    restaurantMenu:async(restaurantId)=>{
      return await axios.get(HD_DOMAIN + `/restaurant/menu?restaurantId=${restaurantId}`)
    },
    
  //매장의 리뷰 정보 불러오기
    restaurantReview:async(restaurantId)=>{
      return await axios.get(HD_DOMAIN + `/restaurant/review?restaurantId=${restaurantId}`)
    },

  // 리뷰 추가 하기
    addReview:async(title,content)=>{
      const review={
        title:title,
        content:content
      }
      return await axios.post(HD_DOMAIN + "/addReview",review);
    }
  }

export default AxiosApi;