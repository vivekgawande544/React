import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";


const Create = () => {
   const [title,setTitle]  = useState(' ')
   const [body,setBody] = useState('')
   const [author,setAuthor] = useState('mario')
   const [ispending,setIspending] = useState(false);
   const history  = useHistory();
 

   const handleSubmit = (e) => {
       e.preventDefault();
       const blog = {title,body,author}
       console.log(blog)

       setIspending(true);

       fetch('http://localhost:8000/blog',{
            method : 'POST',
            headers : {"Content-Type" :"application/json"},
            body : JSON.stringify(blog)
       }).then(() => {
           setIspending(false);
            console.log('New blog Added');
            history.go(-1);
       })
   };

    return (
        <div className="main">
         <form onSubmit = {handleSubmit}>
             <label>Blog title</label>
             <input type="text"
              requried
              value={title}
              onChange = {(e) => setTitle(e.target.value)}
              />
             <label>Blog Body</label>
             <textarea type="text"
             requried
             value = {body}
             onChange = {(e) => setBody(e.target.value)}
             >
             </textarea>
             <label>Author</label>
             <select
             value = {author}
             onChange = {(e) => setAuthor(e.target.value)}
             > 
                 <option value = "mario">mario</option>
                 <option value = "john">john</option>
             </select>
            {!ispending && <button>Add Blog</button>}
            {ispending && <button disabled>Adding..</button>}
           

         </form>
           <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        
        </div>
        
    );
}
 
export default Create;