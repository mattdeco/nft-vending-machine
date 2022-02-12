import { createQR, encodeURL } from "@solana/pay";
import { useEffect, useRef } from "react";
import styles from "./QRCode.module.css";

const QRCode = ({ qrCodeParams }) => {
  const ref = useRef();

  useEffect(() => {
    const encodedParams = encodeURL(qrCodeParams);
    const qrCode = createQR(encodedParams, 512, "#1e1e1e", "#e1e1e1");

    if (ref.current) {
      ref.current.innerHTML = "";
      qrCode.append(ref.current);
    }
  }, [ref, qrCodeParams]);

  return <div ref={ref} className={styles.codecontainer}></div>;
};

export default QRCode;
