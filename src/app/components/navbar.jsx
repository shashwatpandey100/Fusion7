"use client"
import React, { useState } from 'react'
import Nav from './nav';

const Navbar = () => {
    let [navbarShow, setNavbarShow] = useState(true);

    if (typeof window !== "undefined") {
        let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                setNavbarShow(true)
            }
            else {
                setNavbarShow(false)
            }
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <>
            <section>
                <div className={`w-screen h-[45px] fixed ${navbarShow ? 'top-0' : 'top-[-45px]'} duration-1000 z-[10] bg-[hsla(0,0%,100%,.35)] backdrop-filter backdrop-blur-[5px]`}></div>
                <div className={`w-screen h-[45px] fixed ${navbarShow ? 'top-0' : 'top-[-45px]'} duration-1000 z-[10] flex justify-between items-center px-4 sm:px-10`}>
                    <Nav />
                </div>
            </section>

        </>
    )
}

export default Navbar