import React, { useEffect, useState } from 'react';

const FloatingInput = ({ type, typeOfData, placeholder, name, value, onChange }) => {
    let inputElement;

    switch (type) {
        case 'input':
            inputElement = (
                <input
                    className={`md:w-[200px] w-[70px] h-[40px] border-b focus:outline-none px-1 md:px-4 text-[15px] md:text-[17px] text-gray-500 font-[300]`}
                    type={typeOfData}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={true}
                />
            );
            break;
        case 'text':
            inputElement = (
                <textarea
                    className={`md:w-[500px] w-[280px] h-[80px] border-b focus:outline-none px-1 md:px-4 text-[15px] md:text-[17px] resize-none text-gray-500 font-[300]`}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={true}
                />
            );
            break;
        case 'email':
            inputElement = (
                <input
                    className={`md:w-[400px] w-[200px] h-[40px] border-b focus:outline-none px-1 md:px-4 text-[15px] md:text-[17px] text-gray-500 font-[300]`}
                    type={typeOfData}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={true}
                />
            );
            break;
    }

    return (
        <div className='relative'>
            <span className={`absolute top-0 right-0 text-red-500`}>*</span>
            {inputElement}
        </div>
    );
};

export default FloatingInput;
