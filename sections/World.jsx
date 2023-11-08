'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| Spark with SparQ" textStyles="text-center" />
      <TitleText
        title={
          <>
            Reach. Relax & Xperience the Different Digital<br/>
            Xplore Solutions to Xpand Globally 
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="object-cover w-full h-full" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/letter-s.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/letter-s.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/letter-s.png" alt="people" className="w-full h-full" />
        </div>

        {/* <div className="absolute top-20 left-[65%] w-[150px] h-[150px] p-[6px] rounded">
          <img
            src="/planet-08.png"
            alt="people"
            className="w-full h-full rounded-[10px]"
          />
        </div>
        <div className="absolute bottom-24 left-[15%] w-[150px] h-[150px] p-[6px] rounded">
          <img
            src="/planet-09.png"
            alt="people"
            className="w-full h-full rounded-[10px]"
          />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
