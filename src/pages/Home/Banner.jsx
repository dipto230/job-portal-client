import React from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/banner/team1 (1).jpg';
import team2 from '../../assets/banner/second.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
<div className='flex-1'>
<motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{duration: 10, delay: 5, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
</div>
    <div className='flex-1 mr-9'>
    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Jobs</motion.span> For You!</motion.h1>
      <p className="py-6">
      "Unlock Your Potential, Find Your Perfect Role.
      Your Future Starts Here, Let's Build It Together!"
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;