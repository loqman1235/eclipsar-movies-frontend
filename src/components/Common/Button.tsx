import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = "primary", size, className, ...props }) => {
  const sizeStyles = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-3",
    lg: "text-lg px-6 py-4",
  };

  const primaryBtnStyles = `${
    size && sizeStyles[size]
  } flex items-center justify-center gap-1 bg-primary hover:bg-primary-hover transition rounded-2xl font-medium`;

  const secondaryBtnStyles = `${
    size && sizeStyles[size]
  } flex items-center justify-center bg-white/10 hover:bg-white/20 transition rounded-2xl font-medium backdrop-blur-sm`;

  return (
    <button
      className={
        className +
        " " +
        (variant === "primary" ? primaryBtnStyles : secondaryBtnStyles)
      }
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
