const BlogList = (props) => {
    return (  
        <div className="blog-list">
            <h1>{props.title}</h1>
            {props.blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    
                    <h2>{blog.author}</h2>  <br/>   
                    <p>{blog.title}</p><br/>
                    {/* <button onClick={() => props.handleDelete(blog.id)}>Delete panna click me</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;