import { FC } from "react";
import { ILayoutType } from "../types";
import { NavbarComponent } from "@/src/widgets";
import { BottomavigationComponent } from "@/src/widgets/navbar/ui/bottomavigation.component";

export const LayoutComponent: FC<ILayoutType> = ({ children }: ILayoutType) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <div className="lg:hidden">
        <BottomavigationComponent />
      </div>
      <div className="hidden lg:block">footer</div>
    </>
  );
};
