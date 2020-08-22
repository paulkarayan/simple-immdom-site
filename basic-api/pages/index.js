import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Basic API examples</h1>

        <div className={styles.grid}>
          <a href="/api/js/basic" className={styles.card}>
            <h3>Javascript - Basic API Example &rarr;</h3>
            <p>Available at /api/js/basic</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>
          Made with &lt;3 by the Dark Baron von Tessier-Ashpool and his Imminent
          Domain pals
        </h3>
      </footer>
    </div>
  );
}
