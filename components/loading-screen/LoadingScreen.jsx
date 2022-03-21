import { motion } from "framer-motion";
import ContentContainer from "../content-container/ContentContainer";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = ({ title, message }) => {
  return (
    <ContentContainer>
      <Loader />
      <div className={styles["content"]}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </ContentContainer>
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
