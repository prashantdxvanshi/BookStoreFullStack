import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
const Freebook = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data.filter((d)=>d.category==="free"));
        const data=res.data.filter((d)=>d.category==="free");
        setbook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h2 className="font-semibold text-xl ">Free Offered Courses</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut delectus
        repudiandae dolorem a doloribus facere non ea pariatur, mollitia
        consectetur?
      </p>
      <div>
        <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))
        }
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
