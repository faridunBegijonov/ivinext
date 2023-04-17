import { FC } from "react";
import { ILayoutType } from "../types";
import { BottomNavigationComponent, NavbarComponent } from "@/src/widgets";
import { FooterComponent } from "@/src/widgets/footer";

export const LayoutComponent: FC<ILayoutType> = ({ children }: ILayoutType) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <div className="lg:hidden">
        <BottomNavigationComponent />
      </div>
      <div className="hidden lg:block">
        <FooterComponent />
      </div>
    </>
  );
};
