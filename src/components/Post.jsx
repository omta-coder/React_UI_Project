import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const Post = ({data, bgColor, color}) => {
  return (
    <>
    <div className="post_container flex flex-col justify-center gap-4 mb-8 p-5 rounded-xl bg-red-500" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
      <div className="person flex items-center justify-between">
        <div className="author flex items-center justify-center gap-4">
          <div className="img flex items-center justify-center">
            <img className=' rounded-full ' src={data.pImg} alt=""/>
          </div>
          <div className="text">
            <h3>{data.userName}</h3>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="dot">
        <BsThreeDotsVertical />
        </div>
      </div>
      <p>{data.description}</p>
      <div className="post_img flex items-center justify-center">
        <img className='h-[300px] w-[700px] border-2 border-zinc-400 rounded-xl' src={data.mImg} alt="" />
      </div>
      <div className="like_comment flex items-center gap-4 mt-2.5">
      <div className="likes flex items-center mr-2.5">
            <FaHeart className="items mr-1" /> {data.like} k
          </div>
          <div className="comments flex items-center mr-2.5">
            <FaComment className="items mr-1" />{data.comment} k
          </div>
          <div className="share flex items-center">
            <FaShare className="items mr-1" />{data.share} k
          </div>
      </div>
    </div>
    </>
  )
}

export default Post