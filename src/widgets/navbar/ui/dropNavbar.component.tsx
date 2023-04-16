import { FC } from "react";
import { motion } from "framer-motion";
import { dropNavbarModel } from "../model";
import { IDropNavbarType } from "../types";
import Image from "next/image";

export const DropNavbarComponent: FC = () => {
  return (
    <motion.menu
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-0 right-0 top-[70px] w-full rounded-[16px] bg-[red] bg-indigo-950/30 p-[20px]  backdrop-blur-sm backdrop-brightness-150 md:top-[88px]"
    >
      <div className="flex-col md:flex md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[24px] font-bold text-[#fff]">Подписка Иви</h1>
          <p className="mt-2 text-sm font-bold text-[#828187] ">
            Стоимость 2.99 $ в месяц, продление автоматическое
          </p>
          <div className="mt-4 flex flex-wrap">
            {dropNavbarModel.map(({ title, icon }: IDropNavbarType) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-3.5 mr-3.5 flex h-[150px]  w-full flex-col items-start justify-around rounded-[12px] bg-[#1e293b] px-3 py-2 shadow shadow-[#12101b] md:w-[45%]"
              >
                <Image src={icon} alt="Icon" width={26} height={26} />
                <p className="font-bold text-[#fff] md:text-[12px] ">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.menu>
  );
};
