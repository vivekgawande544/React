import { Link } from "react-router-dom";

const Bloglist = ({ blog,title }) => {
 
  return (
    <div>
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
              <Link className= "link" to = {`/Blog/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                  <p>{blog.body}</p>
                  <p>{blog.description}</p>
                </Link>
          <button className="but">Delete*</button>
           
          
        </div>
      ))}
      ;
    </div>
  );
};

export default Bloglist;
