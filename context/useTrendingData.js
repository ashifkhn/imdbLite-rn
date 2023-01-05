import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

const TrendingDataContext = createContext();
const TrendingDataContextProvider = ({children}) => {
  const [trendingData, setTrendingData] = useState([]);

  return (
    <TrendingDataContext.Provider value={{trendingData, setTrendingData}}>
      {children}
    </TrendingDataContext.Provider>
  );
};

const useTrendingData = () => useContext(TrendingDataContext);

export {useTrendingData, TrendingDataContextProvider};
