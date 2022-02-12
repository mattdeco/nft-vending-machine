import { AnimatePresence, motion } from "framer-motion";
import QRCode from "./QRCode";
import styles from "./PollForSignature.module.css";
import { useEffect, useState } from "react";

const PollForSignature = ({ qrCodeParams }) => {
  const steps = [
    "Scan the QR Code with Phantom Mobile",
    "Pick your price",
    "Receive an NFT in your wallet",
  ];

  const [currentInstruction, setCurrentInstruction] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentInstruction <= steps.length - 1) {
        setCurrentInstruction(currentInstruction + 1);
      } else {
        setCurrentInstruction(1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentInstruction]);

  return (
    <div className={styles.container}>
      <div className={styles.codecontainer}>
        <QRCode qrCodeParams={qrCodeParams} />
      </div>

      <div className={styles.instructions}>
        <AnimatePresence>
          <Instruction
            stepNumber={currentInstruction}
            stepText={steps[currentInstruction - 1]}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

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

export default PollForSignature;
