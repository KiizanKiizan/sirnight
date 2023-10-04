import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { analyzeEvent } from "../../lib/gtag";
import { Menu } from "./Menu";

export type TFooterState = "initial" | "open" | "close";

export const FooterMenu = () => {
  const router = useRouter();
  const [footerState, setFooterState] = useState<TFooterState>("initial");
  const onClickIcon = () => {
    if (footerState === "initial") {
      setFooterState("open");
    } else {
      setFooterState(footerState === "open" ? "close" : "open");
    }
  };

  const handleClickPlan = () => {
    analyzeEvent({
      action: "click",
      category: "footer_plan",
    }).then(() => router.push({ pathname: "/plan" }));
  };

  return (
    <>
      <Menu onClick={onClickIcon} footerState={footerState} />
      <div className="fixed bottom-0 z-40 flex h-[70px] border-t border-solid border-[#475156] bg-clay sm:w-[638px]">
        <Link
          href={{ pathname: "/" }}
          className="flex h-full w-1/4 items-center justify-center border-r border-solid border-[#475156]"
        >
          <Image
            src="/images/logos/gray.svg"
            alt="logo"
            className="w-[77%]"
            width={122}
            height={26}
          />
        </Link>
        <div
          className="flex h-full w-1/2 cursor-pointer items-center justify-center"
          onClick={onClickIcon}
        >
          <button className="w-[26%]">
            {footerState === "open" ? (
              <img src="/images/icons/one-line.svg" alt="one-line" />
            ) : (
              <img
                src="/images/icons/hamburger-menu.svg"
                alt="hamberger-menu"
              />
            )}
          </button>
        </div>
        <a
          onClick={handleClickPlan}
          className="flex h-full w-1/4 cursor-pointer items-center justify-center bg-themeGray text-[3.5vw] text-clay sm:text-sm"
        >
          <span className="w-[77%] text-center [font-feature-settings:'palt'on]">
            料金プラン
          </span>
        </a>
      </div>
    </>
  );
};
