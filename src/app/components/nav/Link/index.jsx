import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../anim';

export default function Index({data}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className="relative flex items-center z-[99] cursor-pointer" custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <Link href={href}>{title}</Link>
      </motion.div>
    )
  }