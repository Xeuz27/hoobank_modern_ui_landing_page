import { stagger, motion } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const container = {
  hidden: {
    opacity: 0,
    y: 650,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 1,
      delayChildren: 5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={layout.sectionInfo}
    >
      <motion.h2
        initial="hidden"
        variants={item}
        animate="visible"
        className={styles.heading2}
        //   initial="hidden"
        // whileInView="visible"
        // variants={variants}
      >
        You do the business, <br className="sm:block hidden" /> we'll handle the
        money.
      </motion.h2>
      <motion.p
        initial="hidden"
        variants={item}
        animate="visible"
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        //   initial="hidden"
        // whileInView="visible"
        // variants={variants}
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </motion.p>

      <Button
        initial="hidden"
        variants={item}
        animate="visible"
        styles={`mt-10`}
      />
    </motion.div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
