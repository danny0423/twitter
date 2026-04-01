"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./SignupForm.module.scss";
import { useState } from "react";

const MONTHS = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i,
);

export default function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }

    // 註冊成功 → 導向登入或直接登入
    router.push("/login");
  };

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

      <h1 className={styles.title}>建立你的帳戶</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <label className={styles.field}>
            <input
              className={styles.input}
              type="text"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
            />
            <span className={styles.label}>姓名</span>
          </label>

          <label className={styles.field}>
            <input
              className={styles.input}
              type="text"
              placeholder=" "
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className={styles.label}>使用者名稱</span>
          </label>

          <label className={styles.field}>
            <input
              className={styles.input}
              type="email"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={styles.label}>電子郵件</span>
          </label>

          <label className={styles.field}>
            <input
              className={styles.input}
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.label}>密碼</span>
          </label>
        </div>

        <div className={styles.birthday}>
          <p className={styles.birthdayTitle}>出生日期</p>
          <p className={styles.birthdayDesc}>
            此資訊將不會公開顯示。請確認你自己的年齡，即使此帳戶是用於公司、寵物或其他用途。
          </p>
          <div className={styles.selects}>
            <label className={styles.selectWrap} style={{ flex: 2 }}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  月
                </option>
                {MONTHS.map((m, i) => (
                  <option key={i} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.selectWrap} style={{ flex: 1 }}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  日
                </option>
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.selectWrap} style={{ flex: 1.5 }}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  年
                </option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.nextBtn} type="submit">
          下一步
        </button>
      </form>
    </div>
  );
}
