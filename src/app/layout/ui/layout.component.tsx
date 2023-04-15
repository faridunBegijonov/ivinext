import { FC } from "react";
import { ILayoutType } from "../types";

export const LayoutComponent: FC<ILayoutType> = ({ children }: ILayoutType) => {
  return (
    <>
      nav
      <main>{children}</main>
      footer
    </>
  );
};
