import styles from "../styles/Layout.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img src="loading.svg" />
      <div>Loading...</div>
    </div>
  );
}
