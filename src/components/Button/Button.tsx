import React from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const variantClass = {
    primary: styles['btn--primary'],
    outline: styles['btn--outline'],
  }

  return (
    <button className={variantClass[variant]} {...props}>
      {children}
    </button>
  )
}

export default Button
