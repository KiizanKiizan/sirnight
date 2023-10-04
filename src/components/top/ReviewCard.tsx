import { ReactElement } from "react";
import { Animation } from "../baseParts/Animation";

type TProps = {
  customer: {
    imagePath: string;
    initial: string;
    age: number;
    address: string;
  };
  content: ReactElement;
  type: "left" | "right";
};

export const ReviewCard = ({ customer, content, type }: TProps) => {
  return (
    <Animation
      animationClassName={
        type === "left" ? "animate-slideInLeftSide" : "animate-slideInRightSide"
      }
      options={{ threshold: 1, triggerOnce: true }}
    >
      <div
        className={`relative my-10 flex w-full ${
          type === "left" ? "justify-end" : ""
        }`}
      >
        {type === "left" ? (
          <>
            <div className="absolute left-0 w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-center text-xs">
                  {customer.initial}様
                  <br />
                  {customer.age}歳
                  <br />
                  {customer.address}
                </p>
              </div>
            </div>
            <p className="w-[80%] rounded-[16px] border-2 border-[#D8D8D2] p-[6vw] text-sm sm:p-7">
              {content}
            </p>
          </>
        ) : (
          <>
            <p className="w-[80%] rounded-[16px] border-2 border-[#D8D8D2] p-[6vw] text-sm sm:p-7">
              {content}
            </p>
            <div className="absolute right-0 w-[15%]">
              <img src={customer.imagePath} alt="customer-icon" />
              <div className="mt-3">
                <p className="text-center text-xs">
                  {customer.initial}様
                  <br />
                  {customer.age}歳
                  <br />
                  {customer.address}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Animation>
  );
};
