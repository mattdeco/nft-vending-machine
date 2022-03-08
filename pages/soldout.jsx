import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import Header from "../components/header/Header";
import styles from "./soldout.module.scss";

const Soldout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ContentContainer>
          <h1>Sold Out</h1>
          <h2 className={styles.subtitle}>
            Sorry, there are no more NFTs left.
          </h2>
        </ContentContainer>
      </main>
    </div>
  );
};

export default Soldout;
