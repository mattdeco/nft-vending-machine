import Image from "next/image";
import ContentContainer from "../content-container/ContentContainer";
import styles from "./SuccessScreen.module.scss";

const SuccessScreen = () => {
  return (
    <ContentContainer mode="success">
      <Image
        src="/images/icon-success.svg"
        width={256}
        height={256}
        alt="Success"
      />
      <h1>Success!</h1>
      <h2 className={styles.subtitle}>
        Your NFT has been sent to your wallet!
      </h2>
    </ContentContainer>
  );
};

export default SuccessScreen;
