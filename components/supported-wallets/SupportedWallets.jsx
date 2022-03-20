import React from "react";
import Image from "next/image";
import { SUPPORTED_WALLETS } from "../../lib/constants";
import styles from "./SupportedWallets.module.scss";

const SupportedWallets = () => {
  return (
    <div className={styles["wallets"]}>
      <h3 className={styles["wallets-headline"]}>Supported Wallets</h3>
      <div className={styles["wallets-logos"]}>
        {SUPPORTED_WALLETS.map((wallet, i) => {
          return (
            <div
              key={`supported-wallets-${i}`}
              className={styles["wallet-logo"]}
            >
              <Image
                src={wallet.logo}
                width={wallet.width}
                height={wallet.height}
                alt={wallet.name}
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportedWallets;
