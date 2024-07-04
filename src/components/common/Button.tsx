import React from "react";

interface ButtonProps {
  label: string;
  onclick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onclick,
  className,
  disabled,
}) => {
  return (
    <button
      className={`${className} w-24 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-none disabled:opacity-75 disabled:cursor-default`}
      onClick={onclick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
