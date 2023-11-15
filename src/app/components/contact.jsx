import React, { useState } from 'react';
import FloatingInput from './input';
import { useForm, ValidationError } from '@formspree/react';
import { BsArrowUpRight } from "react-icons/bs";

const Contact = () => {
    const [state, handleSubmit] = useForm("xjvqajev");

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        interests: [],
        budget: [],
        projectDetails: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInterestSelection = (selectedInterest) => {
        const interestsCopy = [...formData.interests];

        if (interestsCopy.includes(selectedInterest)) {
            interestsCopy.splice(interestsCopy.indexOf(selectedInterest), 1);
        } else {
            interestsCopy.push(selectedInterest);
        }

        setFormData({ ...formData, interests: interestsCopy });
    };
    const handleBudgetSelection = (selectedBudget) => {
        const budgetCopy = [...formData.budget];

        if (budgetCopy.includes(selectedBudget)) {
            budgetCopy.splice(budgetCopy.indexOf(selectedBudget), 1);
        } else {
            budgetCopy.push(selectedBudget);
        }

        setFormData({ ...formData, budget: budgetCopy });
    };

    const options = ['Web Development', 'App Development', 'UI/UX Design', 'Wordpress Website', 'E-commerce', 'Shopify', 'woocommerce', 'Other'];
    const PriceOptions = ['>$1K', '$1k-$10k', '$10k-$20k', '$20K<'];

    if (state.succeeded) {
        return (
            <section className='h-[100%] w-full flex flex-col justify-center p-4 lg:p-12 relative z-50'>
                <p className='text-[6em] font-[600] text-[#2c2c2c]'>Thank you!</p>
                <div className='my-4 flex flex-col gap-3 pb-[100px] max-w-[800px]'>
                    <p className='text-[#2c2c2c]'>Your request has been successfully sent. Please await a response from our manager 🙂 </p>
                </div>
                <div className='max-h-max absolute bottom-10 right-10 text-[#2c2c2c]'>
                    <p className='text-[12px] hover:underline my-[2px] leading-tight'>
                        <a href="https://www.instagram.com/thisiskromad/" target='_blank'>PINTEREST</a>
                    </p>
                    <p className='text-[12px] hover:underline my-[2px] leading-tight'>
                        <a href="https://www.instagram.com/thisiskromad/" target='_blank'>INSTAGRAM</a>
                    </p>
                    <p className='text-[12px] hover:underline my-[2px] leading-tight'>
                        <a href="https://www.instagram.com/thisiskromad/" target='_blank'>BEHANCE</a>
                    </p>
                    <p className='text-[12px] hover:underline my-[2px] leading-tight'>
                        <a href="https://www.instagram.com/thisiskromad/" target='_blank'>DRIBBLE</a>
                    </p>
                </div>
            </section>
        )
    }
    else {
        return (
            <>
                <section className='h-[100%] w-full p-2 lg:px-10 z-50 flex flex-col justify-evenly relative'>
                    <div className='w-full flex h-[10%] lg:h-[20%]'>
                        <h1 className='max-h-max underline w-full text-[#2c2c2c] font-[700] lg:text-[76px] text-[36px] boldFont'>Hello!</h1>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col relative h-[90%] lg:h-[80%] gap-4 lg:gap-5'>

                        <div className='w-full max-h-max flex relative'>
                            <span className='max-w-max h-[50px] mt-[6px] font-[500] text-[18px] lg:text-[22px]'>My name is &nbsp;</span>
                            <FloatingInput type='input' typeOfData='text' name='name' placeholder='John' onChange={handleInputChange} />
                            <span className='max-w-max h-[50px] mt-[6px] font-[500] text-[18px] lg:text-[22px]'>&nbsp; and i work at &nbsp; </span>
                            <FloatingInput type='input' typeOfData='text' name='company' placeholder='Apple' onChange={handleInputChange} />
                        </div>

                        <div className='w-full max-h-max flex'>
                            <span className='max-w-max h-[50px] font-[500] text-[18px] lg:text-[22px]'>We want to collaborate with you on &nbsp;</span>
                            <div className='flex flex-wrap max-w-[600px] max-h-max overflow-hidden gap-2 mb:mt-2 mb-6'>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`select-none cursor-pointer checkbox-label flex items-center justify-center px-2 lg:px-8 max-w-max h-[30px] rounded-[20px] ${formData.interests.includes(option) ? 'bg-gray-400' : 'bg-gray-100'
                                            }`}
                                        onClick={() => handleInterestSelection(option)}
                                    >
                                        <span className='text-[13px] lg:text-[15px] font-[300] text-[#2c2c2c]'>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full max-h-max flex'>
                            <span className='w-[200px] h-[40px] font-[500] text-[18px] lg:text-[22px]'>Our goal is &nbsp;</span>
                            <FloatingInput
                                type='text'
                                name='projectDetails'
                                placeholder='Project details'
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='w-full max-h-max flex'>
                            <span className='max-w-max h-[40px] font-[500] text-[18px] lg:text-[22px]'>Our budget for the project is &nbsp;</span>
                            <div className='flex flex-wrap max-w-[600px] max-h-max overflow-hidden gap-2'>
                                {PriceOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`select-none cursor-pointer checkbox-label flex items-center justify-center px-2 lg:px-8 max-w-max h-[30px] rounded-[20px] ${formData.budget.includes(option) ? 'bg-gray-400' : 'bg-gray-100'
                                            }`}
                                        onClick={() => handleBudgetSelection(option)}
                                    >
                                        <span className='text-[13px] lg:text-[15px] font-[300] text-[#2c2c2c]'>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full max-h-max flex relative mt-6'>
                            <span className='max-w-max h-[50px] mt-[6px] font-[500] text-[18px] lg:text-[22px]'>Let's get in touch &nbsp;</span>
                            <FloatingInput type='email' typeOfData='email' name='email' placeholder='John@apple.com' onChange={handleInputChange} />
                        </div>

                        <div className='w-full h-[10%] flex items-end justify-between absolute bottom-0'>
                            <p className="text-[13px] lg:text-[16px] text-[#cccaca]">Our Email: <a href="mailto:info@awsmd.com"><u>hello@fusion7.com</u></a></p>
                            <div className='flex flex-col'>
                                <button type='submit' disabled={state.submitting} className='flex group'>
                                    <p className='underline uppercase text-[26px] lg:text-[36px] lg:leading-[36px] leading-[26px] font-[700] text-[#2c2c2c]'>Submit</p>
                                    <div className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-[#2c2c2c]`}>
                                        <div className='absolute left-[-5px] top-[5px] -mt-1 ml-1 group-hover:animate-slant'>
                                            <span className='text-[36px] leading-[36px] font-[700]'><BsArrowUpRight /></span>
                                        </div>
                                        <div className='absolute left-[-50px] top-[50px] -mt-1 ml-1 group-hover:animate-slant'>
                                            <span className='text-[36px] leading-[36px] font-[700]'><BsArrowUpRight /></span>
                                        </div>
                                    </div>
                                </button>
                                <p className='max-w-[200px] text-[12px]'>By submitting, You agree to <a href="" className='underline'>data processing policy</a></p>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        );
    }
};

export default Contact;