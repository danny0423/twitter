import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

type SocialButtonsProps ={
    variant:"primary" | "outline"
}

const socialButtons: { icon: string; alt: string; label: string }[] = [
  { icon: "/icons/google.svg", alt: "Google", label: "Sign up with Google" },
  { icon: "/icons/apple.svg", alt: "Apple", label: "Sign up with Apple" },
];

const SocialButtons = ({variant}:SocialButtonsProps) => {
  return (
    <>
      {socialButtons.map(({ icon, alt, label }) => (
        <Button key={label} variant={variant}>
          <Image src={icon} alt={alt} width={20} height={20} /> {label}
        </Button>
      ))}
    </>
  );
};

export default SocialButtons;
