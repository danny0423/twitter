import React from 'react';
import styles from './Input.module.scss';



type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const Input: React.FC<InputProps> = ({label,...props}) => {
  return (
    <label className={styles.field}>
      <input
        className={styles.input}
        {...props}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Input;
