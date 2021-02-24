import { useHistory, useParams } from "react-router-dom";
import useFetch from "./Usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog,ispending,error} = useFetch('http://localhost:8000/blog/'+ blog.id )
    const history = useHistory();

    const handleDelete = () => {
           fetch('http://localhost:8000/blog/' + blog.id, {
            method : 'DELETE'
           }).then(() => {
              history.push('/');
           })
    };

    return ( 
        <div className="main">
           {ispending && <div>Loading...</div>}
           {error && <div>{error} </div>}
           {
               blog && (
                   <article>
                       <h1>{blog.name}</h1>
                       <p>{blog.id}</p>
                       <p>{blog}</p>
                       <button onClick= {handleDelete}>Delete</button>
                   </article>
               )
           }
           
        </div>
     );
}
 
export default BlogDetails;
