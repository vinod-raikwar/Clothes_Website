import React from "react";
import {Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Style.css";
import pic_1 from '../assets/images/pic-1.jpg';
import pic_2 from '../assets/images/pic-2.jpg';
import pic_3 from '../assets/images/pic-3.jpg';
import pic_4 from '../assets/images/pic-4.jpg';
import pic_5 from '../assets/images/pic-5.jpg';


function  Product() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <>
    <section className="product">
      <Container fluid>
        <h2 className="product_slider_heading">Auto Play</h2>
        <Slider {...settings}>
          <div  className="product_slider">
            <img src={pic_1} alt="women" />
          </div>
          <div  className="product_slider">
          <img src={pic_2} alt="" />
          </div>
          <div  className="product_slider">
          <img src={pic_3} alt="" />
          </div>
          <div  className="product_slider">
          <img src={pic_4} alt="" />
          </div>
          <div  className="product_slider">
          <img src={pic_5} alt="" />
          </div>
        </Slider>
      </Container>
    </section>
    </>
  );
}

export default Product;
