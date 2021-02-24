import {useState,useEffect} from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [ispending,setIspending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
     
      const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
          .then(res => {
    
            if(!res.ok){
              throw Error('could not fetch the data for that resorce')
            }
             return res.json();
          })
      
          .then(data => {
             setdata(data)
             setIspending(false)
             setError(null)
          })
    
          .catch(err => {
            if(err.name === 'AbortError')
            {
              console.log('fetch Aborted');
            }
            else{ 
              setIspending(false)
               setError(err.message);
            }

          })

        },1000)

        return () => abortCont.abort(); 
    
      }, [url]);

   return {data,ispending,error};
};


export default useFetch;