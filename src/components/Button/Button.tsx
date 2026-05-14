import React from 'react'
import styles from './Button.module.scss'

import Link from "next/link";

type Variant = 'primary' | 'outline'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: React.ReactNode
  isLink?: boolean
  href?: string
}

const Button: React.FC<ButtonProps> = ({ isLink = false, href = '/', variant = 'primary', children, ...props }) => {
  const variantClass = {
    primary: styles['btn--primary'],
    outline: styles['btn--outline'],
  }

  if (isLink) {
    return <Link href={href} className={variantClass[variant]} >{children}</Link>
  }

  return (
    <button className={variantClass[variant]} {...props}>
      {children}
    </button>
  )
}

export default Button
