import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Hive Mind</h1>
        <p className={styles.subtitle}>
          Jump straight into creating your account to start collaborating.
        </p>
        <Link href="/register" className={styles.cta}>
          Go to Register
        </Link>
      </main>
    </div>
  );
}
