import { useEffect, useState } from "react";
import { INSTRUCTION_STEPS } from "../../lib/constants";
import ContentContainer from "../content-container/ContentContainer";
import QRCode from "../qr-code/QRCode";
import Instruction from "../instruction/Instruction";
import styles from "./PollForSignature.module.scss";
import SupportedWallets from "../supported-wallets/SupportedWallets";
import HeroCopy from "./HeroCopy";
import CreditLine from "./CreditLine";

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
      <HeroCopy />
      <ContentContainer>
        <QRCode qrCodeParams={qrCodeParams} />
      </ContentContainer>

      <div className={styles.instructions}>
        <Instruction
          stepNumber={currentInstruction}
          stepText={INSTRUCTION_STEPS[currentInstruction - 1]}
        />
      </div>
      <SupportedWallets />
      <CreditLine />
    </div>
  );
};

export default PollForSignature;
