"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Image from "next/image";
import Input from "../Input/Input";
import SocialButtons from "../SocialButtons/SocialButtons";
import Button from "../Button/Button";

const LoginForm = () => {
  const router = useRouter();

  const [identifier, setIdentifier] = useState<string>("");


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <button
          className={styles.closeBtn}
          onClick={() =>
            window.history.length > 1 ? router.back() : router.push("/login")
          }
          aria-label="關閉"
        >
          ✕
        </button>
        <Image src="/icons/x-logo.svg" alt="X" width={28} height={28} />
        <div />
      </div>
      <form onSubmit={handleSubmit} >
        <div className={styles.fields}>
          <SocialButtons variant={'outline'}/>
          <div className={styles.divider}>OR</div>
          <Input
            type="text"
            placeholder=" "
            onChange={(e) => setIdentifier(e.target.value)}
            label="Phone, email, or username"
          />
        </div>
        <Button  type="submit">
          Next
        </Button>

        <Button  type="submit">
          Forgot password?
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
