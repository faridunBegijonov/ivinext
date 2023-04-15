import { FC } from "react";
import { IContainerType } from "../types";

export const Container: FC<IContainerType> = ({ children }: IContainerType) => {
  return <div className="mx-auto max-w-[1280px] px-5 lg:px-36">{children}</div>;
};
