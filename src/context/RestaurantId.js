import React, { createContext, useState } from "react";
export const RestIdContext= createContext([]);


const RestaurantProvider = ({ children }) => {
  const [restId, setRestId] = useState("");

  return (
      <RestIdContext.Provider value={{ restId, setRestId }}>
        {children}
      </RestIdContext.Provider>
  );
};

export default RestaurantProvider;