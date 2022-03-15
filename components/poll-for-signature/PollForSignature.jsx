import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { INSTRUCTION_STEPS } from "../../lib/constants";
import ContentContainer from "../content-container/ContentContainer";
import QRCode from "../qr-code/QRCode";
import Instruction from "../instruction/Instruction";
import styles from "./PollForSignature.module.scss";
import SupportedWallets from "../supported-wallets/SupportedWallets";

const PollForSignature = ({ qrCodeParams }) => {
  const [currentInstruction, setCurrentInstruction] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentInstruction <= INSTRUCTION_STEPS.length - 1) {
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
      <ContentContainer autoHeight={false}>
        <div className={styles["content"]}>
          <h1 className={styles["headline"]}>NFT Vending Machine</h1>
          <h2 className={styles["subhead"]}>
            All proceeds will be sent to the <strong>#HELPUKRAINE</strong> fund
            <br />
            supported by Solana and Metaplex.
          </h2>
          <h3 className={styles["body"]}>
            Pay [x] SOL and you’ll receive an NFT from the available supply.
          </h3>
        </div>
      </ContentContainer>
      <ContentContainer>
        <QRCode qrCodeParams={qrCodeParams} />
      </ContentContainer>

      <div className={styles.instructions}>
        <AnimatePresence>
          <Instruction
            stepNumber={currentInstruction}
            stepText={INSTRUCTION_STEPS[currentInstruction - 1]}
          />
        </AnimatePresence>
      </div>
      <SupportedWallets />
      <div className={styles["credit"]}>
        <p className={styles["credit-line"]}>built by @mattdeco</p>
      </div>
    </div>
  );
};

export default PollForSignature;
