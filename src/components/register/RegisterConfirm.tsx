import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMembersCreate } from "../../api/members/useMembersCreate";
import { setUserId, trackConversion } from "../../lib/gtag";
import { ONE_SHOT, findPlanById, isTPlan } from "../../models/plan/Plan";
import { TDiscount } from "../../models/register/TDiscount";
import { TAX } from "../../models/shared/Tax";

type TProps = {
  readonly memberId: number;
  readonly planId?: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly firstNameKana: string;
  readonly lastNameKana: string;
  readonly birthDay: Date;
  readonly height: number;
  readonly weight: number;
  readonly prefecture: string;
  readonly email: string;
  readonly maskedCardNumber: string;
  readonly serialCode?: string;
  readonly customerCardId: number;
  readonly discount?: TDiscount;
  readonly onBack: () => void;
};

export const RegisterConfirm = ({
  memberId,
  planId,
  firstName,
  lastName,
  firstNameKana,
  lastNameKana,
  birthDay,
  height,
  weight,
  prefecture,
  email,
  maskedCardNumber,
  serialCode,
  customerCardId,
  discount,
  onBack,
}: TProps) => {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [referralCode, setReferralCode] = useState<string>();
  const { mutate, isLoading } = useMembersCreate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [error]);
  useEffect(() => {
    const code = sessionStorage.getItem("referral_code");
    if (referralCode === undefined && code && typeof code === "string") {
      setReferralCode(code);
    }
  }, [referralCode]);
  const plan = planId === undefined ? ONE_SHOT : findPlanById(planId);
  const handleSubmit = () => {
    const params = {
      memberId,
      planId,
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      birthDay: birthDay.toLocaleDateString("ja-JP"),
      height,
      weight,
      prefecture,
      customerCardId,
      serialCode,
      referralCode,
    };
    mutate(params, {
      onSuccess: () => {
        const conversionName =
          planId === undefined ? ONE_SHOT.jpName : findPlanById(planId).jpName;
        trackConversion(conversionName).then(() =>
          setUserId(memberId).then(() =>
            router.push({
              pathname: "/register/thanks",
              query: { memberId: memberId },
            })
          )
        );
      },
      onError: () => {
        setError("予期せぬエラーが発生しました");
      },
    });
  };

  return (
    <div className="h-full px-12">
      {error && (
        <div className="mt-12">
          <p className="bg-[#CB5F58] p-3 text-clay">{error}</p>
        </div>
      )}
      <div className="mt-9">
        <p className="text-center text-xl font-bold">ご登録プラン</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">料金プラン</p>
            <p className="pl-3 font-bold">{`${plan.jpName}${
              isTPlan(plan) ? "プラン" : ""
            }`}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">月額料金</p>
            {isTPlan(plan) ? (
              <p className="pl-3 font-bold">
                ¥{plan.price.withoutTax.toLocaleString()}(税込¥
                {plan.price.withTax.toLocaleString()})
              </p>
            ) : (
              <div className="flex justify-around">
                <p className="pl-3 font-bold line-through">
                  ¥{plan.price.withoutTax.toLocaleString()}(税込¥
                  {plan.price.withTax.toLocaleString()})
                </p>
                <span className="font-bold">→</span>
                <p className="pl-3 font-bold">
                  ¥{plan.discountedPrice.withoutTax.toLocaleString()}(税込¥
                  {plan.discountedPrice.withTax.toLocaleString()})
                </p>
              </div>
            )}
          </div>
          {discount && (
            <>
              <div className="pt-2">
                <p className="text-xs">クーポン</p>
                <p className="pl-3 font-bold">{discount.name}</p>
              </div>
              <div className="pt-2">
                <p className="text-xs">割引価格</p>
                <p className="pl-3 font-bold">
                  ¥{discount.discountPrice.toLocaleString()}(税込¥
                  {Math.ceil(
                    discount.discountPrice * (1 + TAX)
                  ).toLocaleString()}
                  )
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-9">
        <p className="text-center text-xl font-bold">基本情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">氏名</p>
            <p className="pl-3 font-bold">{`${lastName} ${firstName}(${lastNameKana} ${firstNameKana})  `}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">生年月日</p>
            <p className="pl-3 font-bold">{birthDay.toLocaleDateString()}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">身長</p>
            <p className="pl-3 font-bold">{height}cm</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">体重</p>
            <p className="pl-3 font-bold">{weight}kg</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">住まい</p>
            <p className="pl-3 font-bold">{prefecture}</p>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <p className="text-center text-xl font-bold">ログイン情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">ログインID(メールアドレス)</p>
            <p className="pl-3 font-bold">{email}</p>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <p className="text-center text-xl font-bold">お支払い情報</p>
        <div className="pt-3">
          <div>
            <p className="text-xs">カード番号</p>
            <p className="pl-3 font-bold">{maskedCardNumber}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs">クーポンコード</p>
            <p className="pl-3 font-bold">{serialCode ?? "なし"}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          id={`register-${plan.enName}`}
          onClick={handleSubmit}
          disabled={isLoading}
          className={`relative mt-12 inline-block w-full rounded-full p-3 text-center text-base font-medium text-slate-200 ${
            isLoading ? "bg-[#c8c9c3]" : "bg-themeGray"
          }`}
        >
          会員登録をする
        </button>
        <div onClick={onBack} className="pb-24 pt-6 text-center text-xs">
          <span className="border-b-[1px] border-themeGray">
            お支払い情報登録に戻る
          </span>
        </div>
      </div>
    </div>
  );
};
