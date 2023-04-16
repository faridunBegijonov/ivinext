import { FC } from "react";
import { IContainerType } from "../types";

export const Container: FC<IContainerType> = ({ children }: IContainerType) => {
  return <div className="mx-auto max-w-[1500px] px-5 lg:px-16">{children}</div>;
};
