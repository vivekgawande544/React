import Bloglist from './BlogList';
import Temp  from './temp';
import useFetch from "./Usefetch";

const HomePage = () => {
 


const {data:blog,ispending,error} = useFetch('http://localhost:8000/blog');


  return (
    <div className="homepage">
      {error &&   <h3 className= " error">{error}</h3>} 
      {ispending && <div className= "loading">Loading....</div>}
      {blog && <Bloglist blog= {blog} />}
     
    </div>
  );
}

export default HomePage;
