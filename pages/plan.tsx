import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import React, { useRef, useState } from "react";
import { Breadcrumb } from "../src/components/plan/Breadcrumb";
import { PlanDetail } from "../src/components/plan/PlanDetail";
import { FooterMenu } from "../src/components/top/FooterMenu";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../src/models/plan/Plan";

const Plan: NextPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<number>(LIGHT_PLAN.id);
  const plans = [LIGHT_PLAN, STANDARD_PLAN, PREMIUM_PLAN];
  const carousel = useRef<HTMLDivElement>(null);

  const onClickLabel = (index: number, planId: number) => {
    if (typeof carousel.current!.scrollLeft === "undefined") return;

    carousel.current!.scrollLeft =
      (carousel.current!.offsetWidth as number) * index;
    setSelectedPlanId(planId);
  };

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    if (typeof carousel.current!.scrollLeft === "undefined") return;

    if (e.currentTarget.scrollLeft < carousel.current!.offsetWidth / 2) {
      setSelectedPlanId(LIGHT_PLAN.id);
    } else if (
      e.currentTarget.scrollLeft <
      (carousel.current!.offsetWidth * 3) / 2
    ) {
      setSelectedPlanId(STANDARD_PLAN.id);
    } else {
      setSelectedPlanId(PREMIUM_PLAN.id);
    }
  };

  return (
    <div className="h-full">
      <NextSeo title="プラン" />
      <div
        id="container"
        className="inset-0 h-full min-h-screen text-themeGray"
      >
        <Breadcrumb lists={[{ name: "料金プラン" }]} />
        <h2 className="my-[12vw] text-center text-[10vw] font-bold sm:my-20 sm:text-4xl">
          料金プラン
        </h2>
        <div>
          <div id="tab" className="relative mb-8 flex h-12">
            {plans.map((plan, index) => (
              <div
                className={`mx-3 flex w-1/3 cursor-pointer items-center justify-center ${
                  selectedPlanId === plan.id
                    ? "border-b-2 border-themeGray"
                    : "border-b border-[#C7C9C4]"
                }`}
                onClick={() => onClickLabel(index, plan.id)}
                key={index}
              >
                <p
                  className={`cursor-pointer text-[4vw] font-bold sm:text-xl ${
                    selectedPlanId === plan.id ? "opacity-100" : "opacity-20"
                  }`}
                >
                  {plan.jpName}
                </p>
              </div>
            ))}
          </div>

          <div
            id="carousel"
            ref={carousel}
            className="hidden-scrollbar flex snap-x snap-mandatory overflow-x-auto"
            onScroll={onScroll}
          >
            {plans.map((plan, index) => (
              <div
                className={`h-full w-[90%] shrink-0 snap-center snap-always ${
                  index === 0 && "ml-[5%]"
                } ${index === plans.length - 1 && "mr-[5%]"}`}
                key={index}
              >
                <PlanDetail plan={plan} disabled={selectedPlanId !== plan.id} />
              </div>
            ))}
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export default Plan;
