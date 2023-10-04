import Link from "next/link";
import { useRouter } from "next/router";
import { analyzeEvent } from "../../lib/gtag";
import { Button } from "./Button";

export const Header = () => {
  const router = useRouter();
  const handleClickPlan = () => {
    analyzeEvent({
      action: "click",
      category: "footer_plan",
    }).then(() => router.push({ pathname: "/plan" }));
  };

  return (
    <div className="fixed left-0 top-0 z-20 h-[64px] w-screen border-b-[1px] border-b-[#D8D8D2] bg-clay">
      <div className="mx-[24px] flex items-center justify-between">
        <Link
          href={{ pathname: "/" }}
          className="flex h-[64px] items-center justify-center"
        >
          <img src="/images/logos/gray.svg" alt="logo" className="h-[30px]" />
        </Link>
        <Button
          onClick={handleClickPlan}
          className="flex w-[120px] cursor-pointer items-center justify-center"
        >
          料金プラン
        </Button>
      </div>
    </div>
  );
};
