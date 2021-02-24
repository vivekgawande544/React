import Homepage from './HomePage';
import useFetch from './Usefetch';
import Bloglist from './BlogList';

const Temp = () => {

    const {data:blog,ispending,error} = useFetch ('http://localhost:9000/blog')

  return (
        
     <div className="temp-container">
           {error && <h3 className = "error">{error}</h3>}
           {ispending && <div className = "loading">Loading...</div>}
           {blog && <Bloglist blog = {blog} />}
     </div>
  
  );

}
export default Temp;