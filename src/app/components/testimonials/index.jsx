import React, { useRef } from "react";
import Slider from "react-slick";
import InitialCard from "./InitialCard";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Text from "./Text";

const Testimonials = () => {
  const totalSlides = 7;
  const [progress, setProgress] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  const setSlides = () => {
    if (window.innerWidth <= 1210) {
      setSlidesToShow(2);
    }
    if (window.innerWidth <= 768) {
      setSlidesToShow(1);
    }
  };

  React.useEffect(() => {
    setSlides();
    setProgress(100 / (totalSlides - slidesToShow + 1));
    window.addEventListener("resize", ()=> {setSlides()});
  }, []);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current) => {
      setProgress(100 / (totalSlides - slidesToShow + 1) * (current + 1));
    }
  };

  return (
    <section className="max-h-max w-[100vw] bg-white">
      <Text />
      <section className="pb-[50px] z-[0] bg-white w-screen pl-[10px] overflow-hidden">

          <Slider ref={sliderRef} {...settings}>
            <InitialCard totalReviews={data.length} />
            {data.map((testimonial, index) => (
            <Card
              key={index}
              stars={testimonial.stars}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
          </Slider>

        <div className="max-h-max my-[2vw] flex flex-col items-center justify-center gap-[0.9vw]">
          <div className="h-[2px] w-[310px] bg-[rgba(0,0,0,0.1)] relative">
            <div
              className={`absolute h-full bg-[rgba(0,0,0,1)] transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="w-full flex items-center justify-center gap-[0.9vw]">
            <PrevArrow onClick={previous} />
            <NextArrow onClick={next} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;

const data = [
{
  stars : 5,
  text : "Fusion7 successfully completed each project phase and delivered high-quality assets on time. Their team was calm. They also facilitated constant communication via email and messaging apps, ensuring the client was well-informed about the project's progress.",
  name : "Colin Marsh",
  position : "Head of Marketing Communications at Shopbox AI"
},
{
  stars : 4,
  text : "Fusion7 delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client's specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.",
  name : "Ana Davies",
  position : "Director, Clickl"
},
{
  stars : 4,
  text : "Fusion7 delivered a logo book that outlined the client's mission. The team delivered on time, and the Fusion7 had a complete understanding of the client's requirements. The service provider was detail-oriented to ensure the client was satisfied with the final product.",
  name : "Anastasia Bezuglaya",
  position : "COO, The OneGate"
},
{
  stars : 5,
  text : "Bigblue Digital was able to set a healthy and efficient rhythm for feedback loops. The team was reactive to feedback to ensure 100% results satisfaction. Their excellent project management, talented designers, and capacity to keep up with tight deadlines were impressive.",
  name : "Ana Martínez",
  position : "Marketing Lead, Bigblue"
},
{
  stars : 5,
  text : "Fusion7 leveraged their creativity to produce high-level assets that matched the client's brand and vision. The organized team worked efficiently and was highly receptive to feedback throughout. Their high-quality work, reasonable pricing, and quick turnaround time stood out.",
  name : "Erik De Kroon",
  position : "CEO, Yordex"
},
{
  stars : 5,
  text : "Thanks to Fusion7's work, the new website received positive feedback, with users commenting that they have a much clearer comprehension of the products and services offered by the client. The team's impressive communication and timely responses made all the difference.",
  name : "Will Carter",
  position : "Marketing Manager, Acorn Property Invest"
},
]