import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MdArrowOutward } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const Contact = ({ closeContact }) => {
  const [state, handleSubmit] = useForm("xjvqajev");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (state.succeeded) {
    return (
      <section className="h-[100%] w-full flex flex-col justify-center p-4 lg:p-12 relative z-50">
        <div className="w-full flex flex-col h-[70px] absolute top-0 left-0">
          <div className="w-full border-b border-black flex items-center justify-between py-[2%]">
            <span className="uppercase text-[13px]">Contact us</span>
            <span
              onClick={closeContact}
              className="text-[25px] cursor-pointer z-[99] hover:scale-[0.8] transition duration-500"
            >
              <IoCloseOutline />
            </span>
          </div>
        </div>
        <p className="text-[3em] font-[600] text-[#2c2c2c]">Thank you!</p>
        <div className="my-4 flex flex-col gap-3 pb-[100px] max-w-[800px]">
          <p className="text-[13px]">
            Your request has been successfully sent. Please await a response
            from our manager 🙂{" "}
          </p>
        </div>
        <div className="max-h-max absolute bottom-10 right-10 text-[#2c2c2c]">
          <p className="text-[12px] hover:underline my-[2px] leading-tight">
            <a href="https://www.instagram.com/thisiskromad/" target="_blank">
              PINTEREST
            </a>
          </p>
          <p className="text-[12px] hover:underline my-[2px] leading-tight">
            <a href="https://www.instagram.com/thisiskromad/" target="_blank">
              INSTAGRAM
            </a>
          </p>
          <p className="text-[12px] hover:underline my-[2px] leading-tight">
            <a href="https://www.instagram.com/thisiskromad/" target="_blank">
              BEHANCE
            </a>
          </p>
          <p className="text-[12px] hover:underline my-[2px] leading-tight">
            <a href="https://www.instagram.com/thisiskromad/" target="_blank">
              DRIBBLE
            </a>
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <section className="h-[100%] w-full px-[18px] md:px-0 z-50 flex flex-col relative">
          <div className="w-full flex flex-col h-[70px]">
            <div className="w-full border-b border-black flex items-center justify-between py-[2%]">
              <span className="uppercase text-[13px]">Contact us</span>
              <span
                onClick={closeContact}
                className="text-[25px] cursor-pointer z-[99] hover:scale-[0.8] transition duration-500"
              >
                <IoCloseOutline />
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col relative w-[100%] h-[100%] gap-[5px] pt-[10%]"
          >
            <div className="w-full max-h-max flex flex-col md:flex-row gap-[5px]">
              <input
                className="md:w-[50%] w-[100%] h-[44px] border border-[#181818] rounded-[25px] focus:outline-none p-4 bg-transparent text-[15px] md:text-[17px] text-gray-500 font-[300]"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                required={true}
              />
              <input
                className="md:w-[50%] w-[100%] h-[44px] border border-[#181818] rounded-[25px] focus:outline-none p-4 bg-transparent text-[15px] md:text-[17px] text-gray-500 font-[300]"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required={true}
              />
            </div>
            <div className="w-full max-h-max flex md:gap-[5px]">
              <textarea
                className={`w-[100%] h-[240px] border border-[#181818] rounded-[25px] focus:outline-none p-4 bg-transparent text-[15px] md:text-[17px] text-gray-500 font-[300]`}
                name="projectDetails"
                placeholder="Project details"
                onChange={handleInputChange}
                required={true}
              />
            </div>
            <div className="w-full h-[10%] flex items-end justify-between absolute bottom-0">
              <p className="text-[13px] lg:text-[16px] text-black">
                Our Email:{" "}
                <a href="mailto:info@awsmd.com">
                  <u>hello@aetherium.agency</u>
                </a>
              </p>
              <div className="flex flex-col">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex group"
                >
                  <p className="underline uppercase text-[36px] lg:leading-[36px] leading-[26px] font-[700] text-[#2c2c2c]">
                    Submit
                  </p>
                  <div
                    className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-[#2c2c2c]`}
                  >
                    <div className="absolute left-[-5px] top-[5px] -mt-1 ml-1 group-hover:animate-slant">
                      <span className="text-[36px] leading-[36px] font-[700]">
                        <MdArrowOutward />
                      </span>
                    </div>
                    <div className="absolute left-[-50px] top-[50px] -mt-1 ml-1 group-hover:animate-slant">
                      <span className="text-[36px] leading-[36px] font-[700]">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </button>
                <p className="max-w-[200px] text-[12px]">
                  By submitting, You agree to{" "}
                  <a href="" className="underline">
                    data processing policy
                  </a>
                </p>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
};

export default Contact;
