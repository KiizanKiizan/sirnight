import { ReactNode } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  content: ReactNode;
  type: "right" | "left";
};

export const Worry = ({ content, type }: TProps) => {
  const animationClassName =
    type === "right" ? "animate-slideInRightSide" : "animate-slideInLeftSide";

  return (
    <Animation
      animationClassName={animationClassName}
      options={{ threshold: 1, triggerOnce: true }}
    >
      <div className="w-full">
        <p
          className={`min-w-[50%] rounded-[16px] p-5 [font-feature-settings:'palt'on] ${
            type === "right"
              ? "w-full bg-[#F4F3EF]"
              : "mr-auto w-fit bg-themeGray text-lg font-bold text-beige"
          }`}
        >
          {content}
        </p>
      </div>
    </Animation>
  );
};
