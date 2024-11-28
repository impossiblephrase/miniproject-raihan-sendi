import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  // Define an array of images and their respective links
  const images = [
    { src: "/event1.webp", alt: "Image 1", link: "/page1" },
    { src: "/event2.webp", alt: "Image 2", link: "/page2" },
    { src: "/event3.jpg", alt: "Image 3", link: "/page3" },
    { src: "/event4.webp", alt: "Image 4", link: "/page4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
  
    <section className="p-7 pt-24 bg-gray-300">
      <div className="max-w-full mx-auto">

        <Slider {...settings}>
          <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Link href="/event-details/1">
              <div className="block relative w-full h-full cursor-pointer">
                <Image
                  src="/event1.webp"
                  alt="image1"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Link href="/event-details/2">
              <div className="block relative w-full h-full cursor-pointer">
                <Image
                  src="/event2.webp"
                  alt="image2"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Link href="/event-details/3">
              <div className="block relative w-full h-full cursor-pointer">
                <Image
                  src="/event3.jpeg"
                  alt="image3"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </Link>
          </div>

         <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
           <Link href="/event-details/4">
             <div className="block relative w-full h-full cursor-pointer">
               <Image
                 src="/event4.webp"
                 alt="image4"
                 layout="fill"
                 objectFit="cover"
                 priority
               />
             </div>
           </Link>
         </div>
        </Slider>
        
      </div>
    </section>
  );
};


