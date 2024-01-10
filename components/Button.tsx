import Image from "@/node_modules/next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
      {title}
    </button>
  );
};

export default Button;
