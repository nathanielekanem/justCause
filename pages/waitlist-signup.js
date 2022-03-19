import Head from "next/head";
import styles from "../styles/waitlistSignup.module.css";

function waitlistSignup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup</title>
        <meta
          name="description"
          content="Be one of the first to join JustCause waitlist and get 200JCT instantly."
        />
        <link rel="apple-touch-icon" href="jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Signup Early</h1>
        <h3 className={styles.title}>Lets grow the family together!</h3>
        <br />
        <br />
        <div className={styles.form}>
          <form action="POST" id="createAccount">
            <div class="formMessage formMessageError"></div>
            <div class="formInputGroup">
              <input
                type="text"
                id="Name"
                class="formInput"
                autofocus
                placeholder="First Name    Last Name"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="text"
                id="Username"
                class="formInput"
                autofocus
                placeholder="Username"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="email"
                id="Email"
                class="formInput"
                autofocus
                placeholder="Email"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="tel"
                id="tel"
                class="formInput"
                autofocus
                placeholder="Phone Number"
              />
            </div>
            <div class="formInputGroup">
              {/** get type for country */}
              <input
                type=""
                id="Country"
                class="formInput"
                autofocus
                placeholder="Country"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="DOB"
                id="DateOfBirth"
                class="formInput"
                autofocus
                placeholder="D.O.B"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="text"
                id="BSCAddress"
                class="formInput"
                autofocus
                placeholder="Binance Smart Chain (BEP20) address"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="password"
                id="Password"
                class="formInput"
                autofocus
                placeholder="Password"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <div class="formInputGroup">
              <input
                type="password"
                id="PasswordConfirmation"
                class="formInput"
                autofocus
                placeholder="Confirm Password"
              />
              <div class="formInputErrorMessage"></div>
            </div>
            <button class="formButton" type="button" value="Take Me In!" />
            {/*Change to svg*/}
          </form>
        </div>
      </main>
    </div>
  );
}

export default waitlistSignup;