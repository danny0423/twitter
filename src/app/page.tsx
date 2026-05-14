import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import SocialButtons from "@/components/SocialButtons/SocialButtons";


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
              <SocialButtons variant="primary"/>
              <div className={styles.divider}>OR</div>
              <Button href="/auth/signup"  isLink={true}>
                Create account
              </Button>
            </div>
            <p className={styles.terms}>
              By signing up, you agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>, including Cookie Use.
            </p>
          </section>

          <section className={styles.panel}>
            <h2 className={styles['panelTitle--signin']}>Already have an account?</h2>
            <Button variant="outline" href="/auth/login"  isLink={true}>Sign in</Button>
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
