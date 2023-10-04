import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../models/plan/Plan";

type TProps = {
  planId: number;
};

export const Cloths = ({ planId }: TProps) => {
  switch (planId) {
    case LIGHT_PLAN.id:
      return (
        <div className="flex w-1/3 py-8">
          <img
            src="/images/icons/cloths/1.svg"
            alt="cloth-icon"
            className="z-10 -mr-4 w-1/3"
          />
          <img
            src="/images/icons/cloths/2.svg"
            alt="cloth-icon"
            className="-mr-2 w-1/3"
          />
          <img
            src="/images/icons/cloths/3.svg"
            alt="cloth-icon"
            className="z-10 w-1/3"
          />
        </div>
      );
    case STANDARD_PLAN.id:
      return (
        <div className="flex w-1/3 py-8">
          <img
            src="/images/icons/cloths/4.svg"
            alt="cloth-icon"
            className="z-10 -mr-4 w-1/3"
          />
          <img
            src="/images/icons/cloths/1.svg"
            alt="cloth-icon"
            className="-mr-2 w-1/3"
          />
          <img
            src="/images/icons/cloths/3.svg"
            alt="cloth-icon"
            className="z-10 w-1/3"
          />
        </div>
      );
    case PREMIUM_PLAN.id:
      return (
        <div className="flex h-[111px] w-1/3 flex-wrap pt-5">
          <div className="my-auto">
            <div className="flex">
              <img
                src="/images/icons/cloths/1.svg"
                alt="cloth-icon"
                className="z-0 -mr-4 w-1/3"
              />
              <img
                src="/images/icons/cloths/2.svg"
                alt="cloth-icon"
                className="-mr-2 w-1/3"
              />
              <img
                src="/images/icons/cloths/3.svg"
                alt="cloth-icon"
                className="z-0 w-1/3"
              />
            </div>
            <div className="z-20 flex translate-x-[15%] translate-y-[-50%]">
              <img
                src="/images/icons/cloths/4.svg"
                alt="cloth-icon"
                className="z-20 -mr-4 w-1/3"
              />
              <img
                src="/images/icons/cloths/1.svg"
                alt="cloth-icon"
                className="z-10 -mr-2 w-1/3"
              />
              <img
                src="/images/icons/cloths/3.svg"
                alt="cloth-icon"
                className="z-20 w-1/3"
              />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
