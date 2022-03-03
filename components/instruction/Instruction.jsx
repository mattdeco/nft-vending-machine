import { motion } from "framer-motion";

import styles from "./Instruction.module.scss";

const Instruction = ({ stepNumber, stepText, isActive = true }) => {
  return isActive ? (
    <motion.div
      className={styles.instructionContainer}
      key={stepText}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <h2 className={styles.instruction}>
        <span className={styles.step}>Step {stepNumber}:</span> {stepText}
      </h2>
    </motion.div>
  ) : null;
};

export default Instruction;
