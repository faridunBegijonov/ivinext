import { FC } from "react";
import { Container } from "@/src";
import { FooterAboutModel, FooterPartitionModel } from "@/src/widgets/footer";
import { IfooterType } from "../types";
import Link from "next/link";
import { useRouter } from "next/router";

export const FooterComponent: FC = () => {
  const { pathname } = useRouter();
  return (
    <Container>
      <div className="flex w-full flex-wrap gap-3 border-t border-[#36353E] py-10">
        <div className="flex flex-col">
          <p className="p-1 font-bold ">О нас</p>
          {FooterAboutModel.map(({ title, route }: IfooterType) => (
            <Link
              className={`${
                pathname === route && "text-[#fff]"
              } p-1 text-[13px] font-bold text-[#828187] transition-colors duration-300 hover:text-[#fff]`}
              href={route}
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="p-1 font-bold ">Разделы</p>
          {FooterPartitionModel.map(({ title, route }: IfooterType) => (
            <Link
              className={`${
                pathname === route && "text-[#fff]"
              }  p-1 text-[13px] font-bold text-[#828187] transition-colors duration-300 hover:text-[#fff]`}
              href={route}
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>
        <div>
          <p className="p-1 font-bold ">Разделы</p>
          <p>Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</p>
          <button>Написать в чате</button>
          <div className="">
            <button>1</button>
            <button>2</button>
          </div>
          <Link href="/">ask.ivi.ru</Link>
          <p>Ответы на вопросы </p>
        </div>
        <div>
          <p className="p-1 font-bold ">Разделы</p>
        </div>
      </div>
    </Container>
  );
};
