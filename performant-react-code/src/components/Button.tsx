import React, { ComponentProps } from "react";

const Button: React.FC<
  ComponentProps<"button"> & { handleOnClick: () => void }
> = ({ children, handleOnClick }) => {
  const onClick = () => {
    handleOnClick();
    console.log("Button clicked!!!");
  };

  return (
    <button
      onClick={onClick}
      className="my-6 mx-auto px-4 py-2 bg-stone-700 text-red-300 text-xl rounded-md border-0 hover:opacity-70"
    >
      {children}
    </button>
  );
};

export default Button;
