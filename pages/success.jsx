import { useRouter } from "next/router";
import { useEffect } from "react";
import AmbientBackground from "../components/ambient-background/AmbientBackground";
import Header from "../components/header/Header";
import SuccessScreen from "../components/success-screen/SuccessScreen";
import styles from "./success.module.scss";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Redirect back to the QR code screen after 5 seconds
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className={styles.container}>
      <AmbientBackground />
      <Header />
      <main className={styles.main}>
        <SuccessScreen />
      </main>
    </div>
  );
};

export default Success;
