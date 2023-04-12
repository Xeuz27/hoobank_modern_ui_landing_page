import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.4 }}
        variants={variants}
        className={`${styles.boxWidth}`}
      >
        <Hero />
      </motion.div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
