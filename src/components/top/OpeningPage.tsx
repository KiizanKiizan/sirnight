import Image from "next/image";
import { useEffect } from "react";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly className?: string;
};
export const OpeningPage = ({ className }: TProps) => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    const text = document.getElementById("text");
    const subText = document.getElementById("sub-text");
    const opPage = document.getElementById("op-page");
    setTimeout(() => {
      logo?.classList.remove("animate-slideInOpLogo");
      logo?.classList.add("animate-slideOutOp");
      text?.classList.remove("animate-slideInOpText");
      text?.classList.add("animate-slideOutOp");
      subText?.classList.remove("animate-slideInOpSubText");
      subText?.classList.add("animate-slideOutOp");
    }, 2500);
    setTimeout(() => {
      opPage?.classList.add("animate-slideOutOp");
      opPage?.classList.add("hidden");
    }, 3000);
  }, []);

  return (
    <div
      id="op-page"
      className={`fixed inset-0 h-screen bg-clay ${className ?? ""}`}
    >
      <div className="absolute left-1/2 top-[41%] w-full translate-x-[-50%] text-center">
        <Image
          id="logo"
          src="/images/logos/gray.svg"
          alt="logo-gray"
          width={300}
          height={65}
          className="mx-auto w-[60vw] animate-slideInOpLogo sm:w-[300px]"
          priority
        />
        <Typography
          id="text"
          color="primary"
          weight="bold"
          className="mt-[7vw] animate-slideInOpText text-[4vw] opacity-0 sm:mt-7 sm:text-xl"
        >
          服選びの面倒から解放する
        </Typography>
        <Typography
          id="sub-text"
          color="primary"
          weight="bold"
          className="mt-[2vw] animate-slideInOpSubText text-[4vw] opacity-0 sm:mt-1 sm:text-xl"
        >
          メンズファッションレンタルサービス
        </Typography>
      </div>
    </div>
  );
};
