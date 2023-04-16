import { FC } from "react";
import { ILayoutType } from "../types";
import { BottomNavigationComponent, NavbarComponent } from "@/src/widgets";

export const LayoutComponent: FC<ILayoutType> = ({ children }: ILayoutType) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <div className="lg:hidden">
        <BottomNavigationComponent />
      </div>
      <div className="hidden lg:block">footer</div>
    </>
  );
};
