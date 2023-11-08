'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="font-bold md:text-[18px] text-[44px] text-white">
          START today to build your tomorrow's Vision into a Digitized Tech
        </h4>
        <div className="flex">
          <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          style={{ marginLeft:"10px", marginRight:"5px" }}
        >
          <img
            src="/circle.png"
            alt="headset"
            className="w-[28px] h-[28px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            +94 77 665 7057
          </span>
        </button>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          style={{ marginLeft:"5px", marginRight:"10px" }}
        >
          <img
            src="/united-arab-emirates.png"
            alt="headset"
            className="w-[28px] h-[28px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            +971 55 577 4001
          </span>
        </button>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/australia.png"
            alt="headset"
            className="w-[28px] h-[28px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            XXXXXXXXXXXX
          </span>
        </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="py-12" style={{ display:'flex', flexDirection: 'row', justifycontent:'space-around'}}>          
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > Sofware Development </h1>
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > Websites </h1>         
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > UI/UX & CX</h1>
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > mApps Mobile applications </h1>                      
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > SaaS </h1>
            <h1 className=" font-semi-bold text-[15px] text-white px-12 py-2" > Digital Marketing </h1>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-extrabold text-[36px] text-white">
            SparQ
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 SparQ. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  key={social.name}
                  src={social.logo}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
