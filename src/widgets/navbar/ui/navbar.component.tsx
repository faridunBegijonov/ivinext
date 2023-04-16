import { FC, useState } from "react";
import { ButtonComponent, Container } from "@/src";
import { navbarModel } from "../model";
import { INavbarType } from "../types";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { DropNavbarComponent } from ".";
import { AnimatePresence } from "framer-motion";

export const NavbarComponent: FC = () => {
  const { pathname } = useRouter();
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <nav>
      <Container>
        <div className="relative flex w-full items-center justify-between py-2 md:py-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  className="h-[50px] w-[50px] md:h-[64px] md:w-[64px]"
                  width={64}
                  height={64}
                />
              </Link>
            </div>
            <div className="hidden items-center justify-between pl-4 lg:flex">
              {navbarModel.map((item: INavbarType) => (
                <Link
                  key={item.title}
                  href={item.route}
                  className={`${
                    pathname === item.route && "text-[#fff]"
                  } pr-4 font-bold text-[#828187] transition-colors duration-300 first:hidden last:pr-0 hover:text-[#fff] xl:first:block`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div
              onMouseOver={() => setDropdown(true)}
              className="w-[200px] md:w-[250px]"
            >
              <ButtonComponent
                px="px-1.3"
                py="py-2"
                size="text-[12px] md:text-sm"
                link="/"
              >
                Смотреть 30 дней бесплатно
              </ButtonComponent>
              <AnimatePresence>
                {dropdown && (
                  <div onMouseOut={() => setDropdown(false)}>
                    <DropNavbarComponent />
                  </div>
                )}
              </AnimatePresence>
            </div>
            <div className="hidden items-center justify-between md:flex lg:hidden">
              <div className="cursor-pointer p-3 text-[#828187]  transition-colors duration-500 hover:text-white">
                <IoMdNotificationsOutline size={25} />
              </div>
              <div className="cursor-pointer rounded-[10px] border-2 border-[#828187] p-2 transition-colors duration-500 hover:border-white hover:shadow hover:shadow-white ">
                <BiUser
                  size={30}
                  className="text-[#828187] transition-colors duration-500 hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
