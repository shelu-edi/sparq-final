'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`} style={{height:'40vw', paddingTop:'8rem'}}>
    <motion.dev
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row justify-center`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          S
        </motion.h1>
        <motion.dev
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          {/* <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1> */}
        </motion.dev>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.4)} className={styles.heroHeading}>
          P
        </motion.h1>
        <motion.dev
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
        </motion.dev>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.7)} className={styles.heroHeading}>
          A
        </motion.h1>
        <motion.dev
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
        </motion.dev>
      </div>

<div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(2)} className={styles.heroHeading}>
          R
        </motion.h1>
        <motion.dev
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
        </motion.dev>
      </div>

<div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(2.3)} className={styles.heroHeading}>
          Q
        </motion.h1>
        <motion.dev
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
        </motion.dev>
      </div>


      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/jilogo.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm-h-[155px] h-[100px] object-contain "
            />
          </div>
        </a>
      </motion.div> */}
    </motion.dev>
  </section>



  );


export default Hero;
