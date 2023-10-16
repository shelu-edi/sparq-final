'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/jilogo.png"
        alt="search"
        className="w-[75px] h-[75px] object-contain"
      />
      {/* <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        JEWEL ICONIC
      </h2> */}
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <p className="font-normal text-[24px] leading-[30px] text-white">
        ask.jeweliconic@gmail.com
      </p>
    </div>
  </motion.nav>
);

export default Navbar;
