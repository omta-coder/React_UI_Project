import React from 'react'

const Rightbar = ({data, bgColor, color}) => {
  return (
    <div className='right_container p-2.5' style={{
      backgroundColor: `${bgColor}`,
      color: "white",
    }}>
      <div className="postImg relative">
        <img className='w-[200px] h-[130px] rounded-md border border-teal-300' src={data.img} alt="" />
        <div className="inside_img flex justify-center items-center absolute bottom-[10px] left-[10px] gap-4">
          <div className="img flex justify-center items-center">
          <img className='h-[40px] w-[40px] rounded-md border-2 border-amber-400' src={data.authorImg} alt="" />
          </div>
          <div className="text">
          <h3>{data.authorName}</h3>
          <p>{data.authortext}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar