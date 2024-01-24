import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, variant = "primary", ...props }) => {
  const primaryBtnStyles =
    "w-full px-4 py-4 flex items-center justify-center gap-1 bg-primary hover:bg-primary-hover transition rounded-2xl font-medium";

  const secondaryBtnStyles =
    "px-4 py-3 flex items-center justify-center bg-white/10 hover:bg-white/20 transition rounded-2xl font-medium backdrop-blur-sm";

  return (
    <button
      className={variant === "primary" ? primaryBtnStyles : secondaryBtnStyles}
      {...props}
    >
      {text}
    </button>
  );
};
export default Button;
