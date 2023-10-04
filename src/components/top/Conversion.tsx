import Image from "next/image";
import { useRouter } from "next/router";
import { analyzeEvent } from "../../lib/gtag";
import { LinkButton } from "../baseParts/LinkButton";
import { ConversionImages } from "./ConversionImages";

type TProps = {
  number: number;
  leftImagePath: string;
  rightImagePath: string;
};

export const Conversion = ({
  number,
  leftImagePath,
  rightImagePath,
}: TProps) => {
  const router = useRouter();
  const handleClick = () => {
    analyzeEvent({
      action: "click",
      category: `conversion_${number}th`,
    }).then(() => router.push("/plan"));
  };

  return (
    <div className="overflow-hidden bg-themeGray pt-5">
      <div className="mx-auto mb-10 w-[62%] pt-[98px]">
        <Image
          src="/images/logos/white.svg"
          alt="logo-white"
          width={396}
          height={85}
        />
      </div>
      <div className="flex w-full">
        <div className="relative z-10 w-[20%]">
          <p className="absolute left-1/2 top-1/2 h-full translate-x-[-50%] translate-y-[-50%] text-center text-white [writing-mode:vertical-rl]">
            メンズファッションレンタルサービス
          </p>
        </div>
        <ConversionImages
          number={number}
          leftImagePath={leftImagePath}
          rightImagePath={rightImagePath}
        />
        <div className="relative z-10 w-[20%]">
          <p className="absolute left-1/2 top-1/2 h-full translate-x-[-50%] translate-y-[-50%] text-center text-white [writing-mode:vertical-rl]">
            服選びの面倒から解放する
          </p>
        </div>
      </div>
      <div className="mx-auto mb-16 w-[73%]">
        <LinkButton
          href="/plan"
          onClick={handleClick}
          className="my-10 font-medium"
          border
        >
          プランを選ぶ
        </LinkButton>
      </div>
    </div>
  );
};
