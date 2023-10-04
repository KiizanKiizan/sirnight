import Image from "next/image";
import { ReactNode } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  illustPosition: "right" | "left";
  imagePath: string;
  content: ReactNode;
};

export const ServicePoint = ({
  illustPosition,
  imagePath,
  content,
}: TProps) => {
  return (
    <Animation options={{ threshold: 1, triggerOnce: true }}>
      <div
        className={`mt-7 flex flex-row bg-clay p-7 ${
          illustPosition === "right" ? "" : "justify-end"
        }`}
      >
        {illustPosition === "right" ? (
          <>
            <div className="w-2/5">
              <p className=" mx-auto w-fit border-b border-dashed border-themeGray font-lora text-[3vw] sm:text-sm ">
                Point
              </p>
              <h4 className="mx-auto pt-5 text-[4vw] font-medium leading-7 tracking-widest [writing-mode:vertical-rl] sm:text-xl sm:!leading-8">
                {content}
              </h4>
            </div>
            <Image
              src={imagePath}
              alt="points-illust"
              className="w-[55%] object-cover"
              width={320}
              height={300}
            />
          </>
        ) : (
          <>
            <Image
              src={imagePath}
              alt="points-illust"
              className="w-[55%] object-cover"
              width={320}
              height={300}
            />
            <div className="w-2/5">
              <p className="mx-auto w-fit border-b border-dashed border-themeGray font-lora text-[3vw] sm:text-sm">
                Point
              </p>
              <h4 className="mx-auto pt-5 text-[4vw] font-medium leading-7 tracking-widest [writing-mode:vertical-rl] sm:text-xl sm:!leading-8">
                {content}
              </h4>
            </div>
          </>
        )}
      </div>
    </Animation>
  );
};
