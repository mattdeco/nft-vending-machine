import React from "react";
import { HOME_CREDIT_LINE } from "../../lib/constants";
import styles from "./CreditLine.module.scss";

const CreditLine = () => {
  return HOME_CREDIT_LINE ? (
    <div className={styles["credit"]}>
      <p className={styles["credit-line"]}>{HOME_CREDIT_LINE}</p>
    </div>
  ) : null;
};

export default CreditLine;
