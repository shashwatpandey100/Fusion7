"use client"
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion'

const Video = ({ videoOpen, setVideoOpen }) => {

    const dropIn = {
        hidden: {
            y: '100vh'
        },
        visible: {
            y: '0',
            transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 30
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 30
            }
        }
    }

    return (
        <>

            {/* black shade */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    duration={0.3}
                    onClick={() => setVideoOpen(false)}
                    className={`w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[12] fixed top-0 right-0 ${videoOpen ? 'block' : 'hidden'}`}
                ></motion.div>

            {/* video */}
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="max-w-max h-max flex justify-center z-[13] fixed bottom-[30px] right-[30px]">
                    {/* close floating button */}
                    <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center z-[15] justify-center absolute top-[10px] right-[10px] cursor-pointer hover:invert duration-500" onClick={() => setVideoOpen(false)}>
                        <IoCloseOutline className="text-[24px] text-slate-500" />
                    </div>
                    {
                        videoOpen &&
                        <video
                            width="700px"
                            autoPlay
                            controls={true}
                            className="bg-white rounded-3xl"
                        >
                            <source src="https://download-video.akamaized.net/v2-1/playback/7ad19c57-5d6f-4b8c-bd9e-e26d0c2f389d/5c5a8e6d-aeb8599e?__token__=st=1693372212~exp=1693386612~acl=%2Fv2-1%2Fplayback%2F7ad19c57-5d6f-4b8c-bd9e-e26d0c2f389d%2F5c5a8e6d-aeb8599e%2A~hmac=057fc0493f6361685ad8dfec16af11a0ddb247ce05bdc9a594ecacee952831f3&r=dXMtY2VudHJhbDE%3D" type="video/mp4" />
                        </video>
                    }
                </motion.div>
        </>
    )
}

export default Video