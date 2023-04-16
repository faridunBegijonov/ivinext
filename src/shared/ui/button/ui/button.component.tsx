import React, { FC } from "react";
import { IButtonType } from "../type";
import Link from "next/link";

export const ButtonComponent: FC<IButtonType> = ({
  children,
  link,
  size = "text-sm",
  py,
  px,
}: IButtonType) => {
  return (
    <Link href={link}>
      <button
        className={`w-full ${size} cursor-pointer rounded-[10px] border-[#ff0f4d] bg-[#ff0f4d] ${px} ${py} font-bold text-white`}
      >
        {children}
      </button>
    </Link>
  );
};
