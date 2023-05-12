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
  // 리뷰 상세 정보 불러오기
    reviewDetail:async(reviewId)=>{
      return await axios.get(HD_DOMAIN + `/review/detail?reviewId=${reviewId}`)
    },
  // 리뷰 추가 하기
    addReview:async(restId,memId,title,content,rating,image)=>{
      const review={
        restId:restId,
        memberId:memId,
        title:title,
        content:content,
        rating:rating,
        image:image
      }
      return await axios.post(HD_DOMAIN + "/restaurant/add/review",review);
    },
  // 로그인 
  memberLogin : async(id,pw) => {
    const login = {
        id : id,
        pwd : pw
    };
    return await axios.post(HD_DOMAIN + "/login",login);
  },
  // 문의 등록
  addInquiry:async(restId,memId,title,content)=>{
    const inquiry={
      restId:restId,
      memberId:memId,
      title:title,
      content:content
    }
    return await axios.post(HD_DOMAIN + "/restaurant/add/inquiry",inquiry);
  },
  //찜 등록
  addRestLike:async(restId,memId)=>{
    const addLike={
      restId:restId,
      memberId:memId
    }
    return await axios.post(HD_DOMAIN+"/restaurant/add/restLike",addLike);
  },
  // 찜 삭제
  delRestLike:async(restId,memId)=>{
    const delLike={
      restId:restId,
      memberId:memId
    }
    return await axios.post(HD_DOMAIN+"/restaurant/del/restLike",delLike);
  },
   //찜 등록
   addRevLike:async(revId,memId)=>{
    const addLike={
      revId:revId,
      memberId:memId
    }
    return await axios.post(HD_DOMAIN+"/restaurant/add/revLike",addLike);
  },
  // 찜 삭제
  delRevLike:async(revId,memId)=>{
    const delLike={
      revId:revId,
      memberId:memId
    }
    return await axios.post(HD_DOMAIN+"/restaurant/del/revLike",delLike);
  },
  // 찜 리스트 조회
  restLiked:async(memId)=>{
    return await axios.get(HD_DOMAIN+`/restaurant/liked?memberId=${memId}`);
  },  
  
  // 리뷰 공감 리스트 조회
  revLiked:async(memId)=>{
    return await axios.get(HD_DOMAIN+`/review/liked?memberId=${memId}`);
  },
  // 예약 추가 
  addRes:async(restId,memId,resDate,resReq,resSeat,resPeo)=>{
    const res = {
      restId:restId,
      memberId:memId,
      resDate:resDate,
      resReq:resReq,
      resSeat:resSeat,
      resPeo:resPeo
    }
    return await axios.post(HD_DOMAIN+"/restaurant/add/reservation",res);
  },
  // 좌석 조회
  resSeat:async(date,restId,seatNum)=>{
      return await axios.get(HD_DOMAIN+`/reservation/seat?date=${date}&restaurantId=${restId}&seat=${seatNum}`);
    }
}

export default AxiosApi;