import React, { useEffect, useState } from 'react'
import { opacity, slideUp } from '../nav/anim'
import { motion } from 'framer-motion'
import styles from './style.module.scss';

const words = ["Hello", "नमस्ते", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ", "নমস্কার", "आदाब", "வணக்கம்", "राधे राधे", "नमस्कार"]

const Preloader = () => {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`
    const shallowInitialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 100} 0 ${dimension.height}  L0 0`
    const shallowTargetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const isMobile = dimension.width <= 768;
    const pathData = isMobile ? shallowInitialPath : initialPath;
    const targetPathData = isMobile ? shallowTargetPath : targetPath;

    const curve = {
        initial: {
            d: pathData,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPathData,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
        {dimension.width > 0 && 
        <>
            <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
            <svg>
                <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
            </svg>
        </>
        }
    </motion.div>
    )
}

export default Preloader