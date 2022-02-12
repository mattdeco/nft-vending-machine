import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./success.module.css";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Redirect back to the QR code screen after 5 seconds
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Vending Machine</title>
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/header.png"
          width={1080}
          height={100}
          alt="Header"
        />
      </header>
      <main className={styles.main}>
        <div className={styles.success}>
          <Image
            src="/images/icon-success.svg"
            width={256}
            height={256}
            alt="Success"
          />
          <h1>Success!</h1>
          <h2 className={styles.subtitle}>
            <span className={styles.walletAddress}>
              Your NFT has been sent to your wallet!
            </span>
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Success;
