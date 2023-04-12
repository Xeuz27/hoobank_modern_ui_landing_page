import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion, spring, stagger } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: ({ delay }) => ({
      transition: {
        delay,
        duration: 0.3,
      },
      opacity: 1,
      y: 0,
    }),
  };
  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <motion.img
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2 ,type: 'spring', bounce: 0.5  }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          src={logo}
          alt="logo"
          className="w-[124px] h-[32px]"
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <motion.li
              variants={variants}
              custom={{ delay: (index + 1) * 0.4 }}
              initial="hidden"
              animate="visible"
              key={nav.id}
              className={`relative font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {active === nav.title ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`relative font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  {toggle === true && active === nav.title ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
