import React from "react";

type ButtonProps = {
  text?: string;
  classes?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text = "",
  classes = "",
  onClick,
  style = {},
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`btn fw-semibold shadow ${classes}`}
      style={{
        background: "linear-gradient(to right,#c59adf,#e5a4a8)",
        borderRadius: "12px",
        border: "none",
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
