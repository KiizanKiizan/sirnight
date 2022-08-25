import Link from "next/link";
import { TFooterState } from "./FooterMenu";

type TProps = {
  onClick: () => void;
  footerState: TFooterState;
};

export const Menu = ({ onClick, footerState }: TProps) => {
  return (
    <div
      id="menu"
      className={`fixed top-0 z-40 overflow-auto px-[13%] h-[calc(100vh_-_70px)] sm:w-[498px] sm:px-[66px] bg-clay text-themeGray ${
        footerState === "initial"
          ? "translate-y-[100%]"
          : footerState === "open"
          ? "animate-slideFromBottom"
          : "animate-slideToBottom"
      }`}
    >
      <div className="font-semibold sm:text-xl mt-16 border-b-2 border-[#D8D8D2] border-solid">
        <Link
          href={{
            pathname: "/",
            hash: "about",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            UWearとは
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "service-value",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            UWearで出来ること
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "flow",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            コーデの提供方法
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "coordinates",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            コーデ例
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "how-to-start",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            UWearのはじめ方
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "faq",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            よくあるご質問
          </a>
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "news",
          }}
        >
          <a onClick={onClick} className="my-[8vw] sm:my-10 block">
            お知らせ
          </a>
        </Link>
      </div>
      <div className="flex flex-wrap text-xs py-[5vw] sm:py-5 border-b-2 border-[#D8D8D2] border-solid">
        <Link href="/company">
          <a className="w-1/3 my-[3vw] sm:my-5 text-[3vw] sm:text-base">
            運営会社
          </a>
        </Link>
        <Link href="/laws">
          <a className="w-2/3 my-[3vw] sm:my-5 text-[3vw] sm:text-base">
            特定商取引法に基づく表示
          </a>
        </Link>
        <Link href="/term">
          <a className="w-1/3 my-[3vw] sm:my-5 text-[3vw] sm:text-base">
            利用規約
          </a>
        </Link>
        <Link href="/privacy">
          <a className="w-2/3 my-[3vw] sm:my-5 text-[3vw] sm:text-base">
            プライバシーポリシー
          </a>
        </Link>
      </div>
      <div className="flex space-x-7 pt-10 pb-14">
        <a
          href="https://www.instagram.com/leeapjp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/instagram/secondary.svg"
            alt="icon-instagram"
            className="h-[20px] fill-[#ffffff]"
          />
        </a>
        <a
          href="https://twitter.com/leeapjp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/twitter/secondary.svg"
            alt="icon-twitter"
            className="h-[20px]"
          />
        </a>
        <a
          href="https://www.facebook.com/leeapjp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/facebook/secondary.svg"
            alt="icon-facebook"
            className="h-[20px]"
          />
        </a>
      </div>
    </div>
  );
};
