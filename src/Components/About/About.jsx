import React from 'react'

export default function About() {
  return (
    <div className='text-center text-white bg-greens min-vh-100 d-grid align-content-center'>
      <div className='container'>
        <h2 className='bigText'>ABOUT COMPONENT</h2>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <div className='line bg-white me-3'></div>
          <i className='fa-solid fa-star'></i>
          <div className='line bg-white ms-3'></div>
        </div>
        <div className='row text-start'>
          <div className='col-md-6'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className='col-md-6'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
      </div>
    </div>
  )
}
