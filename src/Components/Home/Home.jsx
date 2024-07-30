import React from 'react'
import avataaars from '../../../public/avataaars.svg'
export default function Home() {
  return (
    <>
      <div className='text-center text-white bg-greens min-vh-100  d-grid align-content-center'>
        <div>
        <img src={avataaars} className='w-15' alt="" />
        </div>
        <h2 className='bigText'>START FRAMEWORK</h2>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <div className='line bg-white me-3'></div>
          <i className='fa-solid fa-star'></i>
          <div className='line bg-white ms-3'></div>
        </div>
        <p className='mb-0'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
