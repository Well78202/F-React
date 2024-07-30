import React from 'react'
import Form from 'react-bootstrap/Form';
export default function Contact() {
  return (
    <div className='text-center text-white min-vh-100 d-grid align-content-center'>
      <h2 className='fontcolor fontsize'>CONATCT SECTION</h2>
      <div className='d-flex align-items-center justify-content-center my-3 fontcolor'>
        <div className='line me-3 bg-blues'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3 bg-blues'></div>
      </div>
      <Form className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Number" placeholder="User Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="User email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="User Password" />
      </Form.Group>
      <button className="bg-greens btn text-white btn-custom" type="submit">
        Send Message
      </button>
    </Form>
    </div>
  )
}
