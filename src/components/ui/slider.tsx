"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/saas-dashboard.jpg"
              alt="SaaS Dashboard"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/coding-setup.jpg"
              alt="Development Environment"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/software-dev.jpg"
              alt="Software Development"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
                              src="/images/api-development.webp"
              alt="API Development"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/startup-office.jpg"
              alt="Modern Tech Startup"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;