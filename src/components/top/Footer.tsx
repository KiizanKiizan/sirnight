import Image from "next/image";
import Link from "next/link";
import { COMPANY_PATHS } from "../../lib/microCMS/uwearClient";

export const Footer = () => {
  return (
    <div className="bg-themeGray py-28">
      <div className="mx-[13%] text-beige">
        <Image
          src="/images/logos/beige.svg"
          alt="logo"
          width={472}
          height={101}
        />
        <p className="mb-16 mt-8 text-center text-sm">
          服選びの面倒から解放する
          <br />
          メンズファッションレンタルサービス
        </p>
        <div className="flex justify-center space-x-7 border-b-2 border-[#676F72] pb-20">
          <a
            href="https://www.instagram.com/UWearJP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/instagram/primary.svg"
              alt="icon-instagram"
              className="h-[30px]"
            />
          </a>
          <a
            href="https://twitter.com/UWearJP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/twitter/primary.svg"
              alt="icon-twitter"
              className="h-[30px]"
            />
          </a>
          <a
            href="https://www.facebook.com/UWearJP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/icons/facebook/primary.svg"
              alt="icon-facebook"
              className="h-[30px]"
            />
          </a>
        </div>
        <div className="flex flex-wrap border-b-2 border-[#676F72] py-10 font-medium">
          <Link
            href={{ hash: "about" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            UWearとは
          </Link>
          <Link
            href={{ hash: "service-value" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            UWearで出来ること
          </Link>
          <Link
            href={{ hash: "flow" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            コーデの提供方法
          </Link>
          <Link
            href={{ hash: "coordinates" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            コーデ例
          </Link>
          <Link
            href={{ hash: "how-to-start" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            UWearのはじめ方
          </Link>
          <Link
            href={{ hash: "faq" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            よくあるご質問
          </Link>
          <Link
            href={{ hash: "news" }}
            className="my-[4vw] w-1/2 text-[3.5vw] sm:my-5 sm:text-base"
          >
            お知らせ
          </Link>
        </div>
        <div className="flex flex-wrap pt-10 text-xs">
          <Link
            href={{ pathname: COMPANY_PATHS.COMPANY }}
            className="my-[4vw] w-1/2 text-[2.5vw] sm:my-5 sm:text-sm"
          >
            運営会社
          </Link>
          <Link
            href={{ pathname: COMPANY_PATHS.LAWS }}
            className="my-[4vw] w-1/2 text-[2.5vw] sm:my-5 sm:text-sm"
          >
            特定商取引法に基づく表示
          </Link>
          <Link
            href={{ pathname: COMPANY_PATHS.TERM }}
            className="my-[4vw] w-1/2 text-[2.5vw] sm:my-5 sm:text-sm"
          >
            利用規約
          </Link>
          <Link
            href={{ pathname: COMPANY_PATHS.PRIVACY }}
            className="my-[4vw] w-1/2 text-[2.5vw] sm:my-5 sm:text-sm"
          >
            プライバシーポリシー
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_HOST_URL}/inquiry`}
            className="my-[4vw] w-1/2 text-[2.5vw] sm:my-5 sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};
