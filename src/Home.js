import { useState,useEffect} from "react";
import BlogList from "./BlogsList";
const Home = () => {
    //  const [blogs, setblog] = useState([
    //      {author:'siva',title:'hacker',id:1},
    //      {author:'sss',title:'spring wih react js',id:2},
    //      {author:'sss',title:'spring boot',id:3}
    //  ]);
    const [blogs,setblog]=useState(null);
    const [isPending,setisPending]=useState(true);

     const handleDelete=(id) =>{
        const newBlog=blogs.filter((blog)=>blog.id!==id);
        setblog(newBlog);
        // console.log(blogs);
     }
     useEffect(()=>{
        fetch("http://localhost:8000/blogs").then(res=>{
            return res.json();
        }).then(data =>{
            setblog(data);
            setisPending(false);
            console.log(data);
        })
     },[]);//this run for every renderi]85
    return (  
        <div className="home">
            {/* {blogs&&<BlogList blogs={blogs} title="Alll blogs" handleDelete={handleDelete}/>} */}
            {isPending&&<div>Load aguthu.........</div>}
            {/* it will used as loading screen when we try to fetch the data from anywhere */}
            {blogs&&<BlogList blogs={blogs} title="Alll blogs" />}
            {/* here initally the blogs is set to null , within fraction of second blog=null is mapped , here we are making it java scrip by putting Kali-braces and making with logical
            in java scrpit the logical operator will check the left , if left is true ,then right will excute */}


        </div>
    );
}
 
export default Home;