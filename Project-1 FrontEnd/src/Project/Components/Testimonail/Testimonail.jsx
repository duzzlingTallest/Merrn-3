import React, { useEffect, useState } from "react";
import "./testimonail.css";

export default function () {
  const images = [
    "img/avaters/avatar3.png",
    "img/avaters/avatar1.png",
    "img/avaters/avatar2.png",
  ]; // Replace with your actual image URLs

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <>
      <div className="testimonail-section d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="testimonial-sliders">
                <div
                  className="single-testimonial-slider"
                  style={{
                    transform: `translateX(-${currentSlide * 920}px)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="testimonial-slide">
                      <div className="client-avatar">
                        <img src={image} alt={`Avatar ${index + 1}`} />
                      </div>
                      <div className="client-meta">
                        <h3>
                          {index === 0
                            ? "Saira Hakim"
                            : index === 1
                            ? "David Niph"
                            : "Jacob Sikim"}{" "}
                          <span>Local shop owner</span>
                        </h3>
                        <p className="testimonial-body">
                          "Sed ut perspiciatis unde omnis iste natus error
                          veritatis et quasi architecto beatae vitae dicta eaque
                          ipsa quae ab illo inventore Sed ut perspiciatis unde
                          omnis iste natus error sit voluptatem accusantium"
                        </p>
                        <div className="last-icon">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
