import Head from "next/head";
import styles from "../styles/waitlistSignup.module.css";

function waitlistSignup() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Signup</title>
        <meta
          name="description"
          content="Be one of the first to join JustCause waitlist and get 200JCT instantly."
        />
        <link rel="apple-touch-icon" href="jcFinalIcon.png" />
        <link rel="icon" href="jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Signup Early</h1>
        <h2 className={styles.description}>Lets grow the family together!</h2>
        <br />
        <br />
        <div classNameName={styles.form}>
          <form action="POST" id="createAccount">
            <div className="formMessage formMessageError"></div>
            <div className="formInputGroup">
              <input
                type="text"
                id="Name"
                className="formInput"
                
                placeholder="First Name    Last Name"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="text"
                id="Username"
                className="formInput"
                
                placeholder="Username"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="email"
                id="Email"
                className="formInput"
                
                placeholder="Email"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="tel"
                id="tel"
                className="formInput"
                
                placeholder="Phone Number"
              />
            </div>
            <div className="formInputGroup">
              {/** get type for country */}
              <input
                type=""
                id="Country"
                className="formInput"
                
                placeholder="Country"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="DOB"
                id="DateOfBirth"
                className="formInput"
                
                placeholder="D.O.B"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="text"
                id="BSCAddress"
                className="formInput"
                
                placeholder="Binance Smart Chain (BEP20) address"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="password"
                id="Password"
                className="formInput"
                
                placeholder="Password"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <div className="formInputGroup">
              <input
                type="password"
                id="PasswordConfirmation"
                className="formInput"
                
                placeholder="Confirm Password"
              />
              <div className="formInputErrorMessage"></div>
            </div>
            <button className="formButton" type="button" value="Take Me In!" />
            {/*Change to svg*/}
          </form>
        </div>
      </main>
    </div>
  );
}

export default waitlistSignup;