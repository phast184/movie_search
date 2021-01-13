import  { useEffect, useState } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=5ec8d1c9`


const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
              const response = await fetch(url);
              const data = await response.json();
              if (data.Response === "True") {
                setData(data.Search || data);
                setError({ show: false, msg: "" });
              } else {
                setError({ show: true, msg: data.Error });
              }
              setIsLoading(false);
            } catch (error) {
              console.log(error);
            }
          };
        
      fetchData(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);
    return {isLoading, error, data}
}

export default useFetch;


