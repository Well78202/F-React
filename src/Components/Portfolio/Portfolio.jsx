import React, { useState } from 'react';
import img1 from "../../assets/poert1.png";
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [zoomed, setZoomed] = useState(null);

  const handleImageClick = (index) => {
    setZoomed(zoomed === index ? null : index);
  };

  const images = [
    { src: img1, alt: "img1" },
    { src: img2, alt: "img2" },
    { src: img3, alt: "img3" },
    { src: img1, alt: "img1" },
    { src: img2, alt: "img2" },
    { src: img3, alt: "img3" },
  ];

  return (
    <div className='text-center text-white mt-5 min-vh-100 d-grid align-content-center portfolio-container'>
      <h2 className='fontcolor fontsize pt-5'>PORTFOLIO COMPONENT</h2>
      <div className='d-flex align-items-center justify-content-center my-3 fontcolor'>
        <div className='line me-3 bg-blues'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3 bg-blues'></div>
      </div>
      <div className='container'>
        <div className="row g-5">
          {images.map((image, index) => (
            <div
              className={`col-lg-4 col-md-6 ${zoomed === index ? 'zoomed' : ''}`}
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <div className={`image-container ${zoomed === index ? 'clicked' : ''}`}>
                <img src={image.src} className='w-100 port-img' alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
