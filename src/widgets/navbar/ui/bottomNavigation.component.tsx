import React, { FC } from "react";
import { INavbarType } from "../types";
import { bottomNavigationModel } from "../model";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const BottomNavigationComponent: FC = () => {
  const { pathname } = useRouter();
  return (
    <div className="fixed bottom-0 left-0 right-0 flex w-full justify-center bg-indigo-950/30 backdrop-blur-sm backdrop-brightness-150">
      <div className="flex w-full items-center justify-between">
        {bottomNavigationModel.map(({ title, route, icon }: INavbarType) => (
          <Link
            className="flex w-full flex-col items-center justify-center py-3"
            href={route}
            key={title}
          >
            <Image src={icon!} alt="Img" width={23} height={23} />
            <p
              className={`pt-1.5 text-[10px] ${
                pathname === route && "font-bold"
              }`}
            >
              {title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
