import Star from "./Star";

const Card = ({ stars, text, name, position }) => {

  const starElements = [];

  for (let i = 0; i < stars; i++) {
    starElements.push(<Star key={i} />);
  }

  return (
    <div className="mx-[10px] responsiveWidth h-[80vh] bg-[#e3e8ea] rounded-[25px] overflow-hidden cursor-pointer">
      <div className="w-[100%] relative min-h-[400px] h-[100%] md:pt-[2.86vw] md:pr-[2.38vw] md:pb-[2.38vw] md:pl-[2.38vw] pt-[35px] pr-[30px] pb-[35px] pl-[30px] flex flex-col">
        <div className="bg-[#e3e8ea] h-[100%] w-[100%] flex flex-col justify-between">
          <div className="flex">
            <div className="flex items-center">
              <span className="mb-[3px] inline-flex">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3666 8.97754C14.5728 8.97754 15.7295 9.45478 16.5824 10.3043C17.4352 11.1538 17.9144 12.3059 17.9144 13.5073C17.9144 14.7087 17.4352 15.8608 16.5824 16.7103C15.7295 17.5598 14.5728 18.0371 13.3666 18.0371C12.1605 18.0371 11.0037 17.5598 10.1509 16.7103C9.29798 15.8608 8.81885 14.7087 8.81885 13.5073C8.81885 12.3059 9.29798 11.1538 10.1509 10.3043C11.0037 9.45478 12.1605 8.97754 13.3666 8.97754Z"
                    fill="#E94E3C"
                  ></path>
                  <path
                    d="M13.5741 21.0418C15.5586 21.0418 17.3671 20.362 18.7367 19.1356L19.6928 18.2866L24 22.5063L22.9747 23.4601C20.5106 25.7407 17.1626 27 13.5725 27C5.84668 27 0 21.1467 0 13.4154C0 5.65124 5.70987 0 13.5725 0C17.0966 0 20.4099 1.25931 22.9055 3.50383L23.967 4.45771L19.7258 8.68047L18.7713 7.86286C17.3671 6.63644 15.5241 5.98956 13.5741 5.98956C9.09711 5.98956 5.98663 9.05482 5.98663 13.4483C5.98663 17.8418 9.19932 21.0418 13.5741 21.0418Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
              <div className="flex mx-[12px] mb-[5px] gap-[1px]">
              {starElements}
              </div>
              <span className="text-[13px] leading-[1.3em] mb-[5px] normalFont">
                {stars}.0
              </span>
            </div>
          </div>
          <div className="">
            <p className="mb-[45px] mt-[45px] normalFont font-[400] customFontSize">
              {text}
            </p>
            <div>
              <p className="text-black mb-[4px] text-[15px] font-[600] leading-[1em] normalFont">
                {name}
              </p>
              <p className="text-black mb-[4px] text-[14px] leading-[1em] normalFont">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
