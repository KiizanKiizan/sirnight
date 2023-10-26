import Link from "next/link";
import { COMPANY_PATHS } from "../../lib/microCMS/uwearClient";
import { TFooterState } from "./FooterMenu";

type TProps = {
  onClick: () => void;
  footerState: TFooterState;
};

export const Menu = ({ onClick, footerState }: TProps) => {
  return (
    <div
      id="menu"
      className={`fixed top-0 z-40 h-[calc(100vh_-_70px)] overflow-auto bg-clay px-[13%] text-themeGray sm:w-[638px] sm:px-[66px] ${
        footerState === "initial"
          ? "hidden"
          : footerState === "open"
          ? "animate-slideFromBottom"
          : "animate-slideToBottom"
      }`}
    >
      <div className="mt-16 border-b-2 border-solid border-[#D8D8D2] font-medium sm:text-xl">
        <Link
          href={{
            pathname: "/",
            hash: "about",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          UWearとは
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "service-value",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          UWearで出来ること
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "coordinates",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          コーデ例
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "how-to-start",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          UWearのはじめ方
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "faq",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          よくあるご質問
        </Link>
        <Link
          href={{
            pathname: "/",
            hash: "news",
          }}
          onClick={onClick}
          className="my-[8vw] block sm:my-10"
        >
          お知らせ
        </Link>
      </div>
      <div className="flex flex-wrap border-b-2 border-solid border-[#D8D8D2] py-[5vw] text-xs sm:py-5">
        <Link
          href={COMPANY_PATHS.COMPANY}
          onClick={onClick}
          className="my-[3vw] w-1/3 text-[3vw] sm:my-5 sm:text-sm"
        >
          運営会社
        </Link>
        <Link
          href={COMPANY_PATHS.LAWS}
          onClick={onClick}
          className="my-[3vw] w-2/3 text-[3vw] sm:my-5 sm:text-sm"
        >
          特定商取引法に基づく表示
        </Link>
        <Link
          href={COMPANY_PATHS.TERM}
          onClick={onClick}
          className="my-[3vw] w-1/3 text-[3vw] sm:my-5 sm:text-sm"
        >
          利用規約
        </Link>
        <Link
          href={COMPANY_PATHS.PRIVACY}
          onClick={onClick}
          className="my-[3vw] w-2/3 text-[3vw] sm:my-5 sm:text-sm"
        >
          プライバシーポリシー
        </Link>
        <a
          href={`${process.env.NEXT_PUBLIC_HOST_URL}/inquiry`}
          className="my-[3vw] w-2/3 text-[3vw] sm:my-5 sm:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </a>
      </div>
      <div className="flex space-x-7 pb-14 pt-10">
        <a
          href="https://www.instagram.com/UWearJP/"
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
          href="https://twitter.com/UWearJP"
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
          href="https://www.facebook.com/UWearJP/"
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
