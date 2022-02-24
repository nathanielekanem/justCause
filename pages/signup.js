import Fragment from "react";
import styles from "../styles/Signup.module.css";

function Signup() {
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Creator &rarr;</h2>
        </div>
        <div className={styles.grid}>
          <h2>User &rarr;</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
