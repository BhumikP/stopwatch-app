import React from 'react'

interface ButtonProps {
  label: string;
  onclick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onclick,
}) => {
  return <button onClick={onclick}>{label}</button>;
};

export default Button