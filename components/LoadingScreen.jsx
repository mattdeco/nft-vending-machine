import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ title, message }) => {
  return (
    <div className={styles.loading}>
      <Loader />
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

const Loader = () => {
  return (
    <motion.div
      className={styles.loader}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ repeat: Infinity, duration: 2 }}
    ></motion.div>
  );
};

export default LoadingScreen;
