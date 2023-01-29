import React , {useContext} from 'react'
import { Link } from 'react-router-dom'


const BlogCards = ({ post }) => {
 
    const PF = "http://localhost:5000/images/";
    return (
        <div className="flex flex-col w-full rounded-xl overflow-hidden shadow-xl">
        <div>
        {post.photo &&   <img src={PF + post.photo} className="w-full h-[250px] object-cover" alt="interior" />}
        </div>
        <div className=" px-2 pb-2 ">
          <div className="flex justify-between text-lg  py-2 screen:text-sm">
           <span> {new Date(post.createdAt).toDateString()}</span> 
       
            <span className="">{post.username}</span>

          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold pb-3 screen:text-xl">
              {post.title}
            </h3>
            <p className="text-xl pb-5 truncate max-w-sm ">
             {post.desc}
            </p>
            <Link to={`/post/${post._id}`}><span className="underline hover:opacity-20">Read More</span></Link> 
          </div>
        </div>
      </div>
      )
    }

export default BlogCards