import React from 'react'
import {Link} from "react-router-dom"

const NewsBlogCards = (props) => {
  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden shadow-xl">
    <div>
      <img src={props.image} className="w-full h-[250px]" alt="interior" />
    </div>
    <div className=" px-2 pb-2 ">
      <div className="flex justify-between text-lg  py-2 screen:text-sm">
        <span>{props.date}</span>
        <span>{props.category}</span>
      </div>
      <div className="relative">
        <h3 className="text-xl font-bold pb-3 screen:text-xl">
          {props.title}
        </h3>
        <p className="text-xl pb-5 truncate max-w-sm ">
         {props.text}
        </p>
        <Link to={props.link}><span className="underline hover:opacity-20">Read More</span></Link> 
      </div>
    </div>
  </div>
  )
}

export default NewsBlogCards