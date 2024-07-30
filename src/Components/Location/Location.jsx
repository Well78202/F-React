import React from 'react'

export default function Location() {
  return (
    <div className='py-5 bg-blues'>
      <div className="row text-center px-5 text-white">
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <div className="icons">
            <i className='fa-brands fa-facebook mx-1 icon'></i>
            <i className="fa-brands fa-twitter mx-1 icon"></i>
            <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
            <i className="fa-solid fa-globe mx-1 icon"></i>
          </div>
        </div>
        <div className="col-md-4">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>

      </div>
    </div>
  )
}
