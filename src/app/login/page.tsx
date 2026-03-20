import React from "react";
import Image from "next/image";
import styles from "./login.module.scss";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";

const Login = () => {
  return (
    <>
      <div className={styles.page}>
        {/* Left */}
        <aside className={styles.brand}>
          <Image src="/icons/x-logo.svg" className={styles.logo} alt="logo" width={300} height={300} />
        </aside>

        {/* Right */}
        <main className={styles.main}>
          <h1 className={styles.headline}>Happening now</h1>

          <section className={styles.panel}>
            <h2 className={styles['panelTitle--join']}>Join today.</h2>
            <div className={styles.panelActions}>
              <Button variant="primary">
                <Image src="/icons/google.svg" alt="Google" width={20} height={20} /> Sign up with Google
              </Button>
              <Button variant="primary">
                <Image src="/icons/apple.svg" alt="Apple" width={20} height={20} /> Sign up with Apple
              </Button>
              <div className={styles.divider}>OR</div>
              <Button variant="primary">Create account</Button>
            </div>
            <p className={styles.terms}>
              By signing up, you agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>, including Cookie Use.
            </p>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle2}>Already have an account?</h2>
            <Button variant="outline">Sign in</Button>
            <Button variant="outline">
              <Image src="/icons/grok.svg" alt="Grok" width={20} height={20} /> Get Grok
            </Button>
          </section>
        </main>
      </div>

      <Footer/>
    </>
  );
};

export default Login;
