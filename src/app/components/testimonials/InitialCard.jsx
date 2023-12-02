import Star from "./Star";
import ClutchIcon from "./ClutchIcon";

const InitialCard = ({totalReviews}) => {
    return (
      <div className="mx-[10px] h-[70vh] border border-black overflow-hidden flex flex-col items-center justify-center relative">
        <div className="h-[100%] w-[100%] p-[32px] overflow-hidden flex flex-col items-center justify-center cursor-pointer relative">
          <a href="https://clutch.co/profile/unikorns-0" target="_blank">
            <div className="flex flex-col items-center justify-center mt-[-50px]">
              <span className="normalFont text-black heading-xl mb-[16px] text-[35px]">
                Clutch
              </span>
              <div className="mb-[100px] gap-[3px] flex">
                <Star initial={true} />
                <Star initial={true} />
                <Star initial={true} />
                <Star initial={true} />
                <Star initial={true} />
              </div>
              <div className="bg-black px-[1.43vw] rounded-[20px] py-[0.36vw]">
                <span className="text-white text-[15px] normalFont">
                  Go to clutch
                </span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center absolute bottom-[44px]">
              <span className="text-white">
                <ClutchIcon />
              </span>
              <span className="normalFont">{totalReviews} reviews</span>
            </div>
          </a>
        </div>
      </div>
    );
  };

  export default InitialCard;
