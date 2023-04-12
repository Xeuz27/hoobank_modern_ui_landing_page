import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Pvariants = {
  hidden: {

    opacity: 0,
    x:350
  },
  visible: {
    opacity: 1,
    x:0,
  },
}

const Stats = () => (
  <section className={`${styles.flexCenter} mx-auto w-[80%] flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <motion.div
        initial="hidden"
        transition={{ duration: 0.6 }}
        whileInView="visible"
        variants={variants}
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[28px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{duration: 0.9}}
          variants={Pvariants}
          className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
        >
          {stat.title}
        </motion.p>
      </motion.div>
    ))}
  </section>
);

export default Stats;
