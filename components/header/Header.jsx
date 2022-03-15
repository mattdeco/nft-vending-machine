import Image from "next/image";
import Head from "next/head";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>NFT Vending Machine</title>
      </Head>
      <Image
        src="/images/themes/sxsw2022/header.png"
        width={1080}
        height={100}
        alt="Header"
        priority
      />
    </header>
  );
};

export default Header;
