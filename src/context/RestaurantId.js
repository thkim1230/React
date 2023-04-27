import React, { createContext, useState } from "react";
export const RestaurantIdContext= createContext([]);



const RestaurantProvider = ({ children }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("");

  return (
    <RestaurantIdContext.Provider value={{ selectedRestaurantId, setSelectedRestaurantId }}>
      {children}
    </RestaurantIdContext.Provider>
  );
};

export default RestaurantProvider;