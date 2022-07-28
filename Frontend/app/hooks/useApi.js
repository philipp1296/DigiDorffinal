import { useState } from "react";

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]); //falls server nicht an ist

    const request = async (...args) => {
        const response = await apiFunc(...args); //apiSauce benötigt kein try catch, er handelt error selbst,
        if(!response.ok) return setError(true);
  
        setError(false);
        setData(response.data);
      };

      return { request, data, error}
}