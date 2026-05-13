"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Image from "next/image";
import Input from "../Input/Input";

const LoginForm = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

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
      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <Input
            type="text"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
            label="姓名"
          />

          <Input
            type="text"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
            label="使用者名稱"
          />

          <Input
            type="text"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
            label="使用者名稱"
          />

          <Input
            type="email"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            label="電子郵件"
          />

          <Input
            type="password"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
            label="密碼"
          />
        </div>

        <button className={styles.nextBtn} type="submit">
          下一步
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
