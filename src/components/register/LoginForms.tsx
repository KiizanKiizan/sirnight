import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TValidationLoginResponse } from "../../api/validations/TValidationLoginResponse";
import { useValidationsLogin } from "../../api/validations/useValidationsLogin";
import { analyzeEvent } from "../../lib/gtag";
import { TLoginRegisterData } from "../../models/register/TLoginRegisterData";
import { FrontValidText } from "../baseParts/inputs/FrontValidText";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Stepper } from "./Stepper";

type TProps = {
  readonly onSubmit: ({ email, memberId }: TLoginRegisterData) => void;
  readonly onBack: () => void;
};

export const LoginForms = ({ onSubmit, onBack }: TProps) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { mutate, isLoading } = useValidationsLogin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [errors]);

  const PASSWORD_REGAX = /^[a-zA-Z0-9!-/:-@¥\[`\{-~]{8,16}$/;
  const EMAIL_REGAX = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const canRegistered =
    !!email && EMAIL_REGAX.test(email) && !!password && PASSWORD_REGAX.test(password);

  const handleSubmit = () => {
    if (canRegistered) {
      mutate(
        { email, password },
        {
          onSuccess: (data: void | AxiosResponse<TValidationLoginResponse>) => {
            if (!data) return;
            if (data.data.isRegistered) {
              router.push(`${process.env.NEXT_PUBLIC_HOST_URL}/mypage`);
              return;
            }
            if (data.data.errors.length > 0) {
              setErrors(data.data.errors);
              return;
            }
            const memberId = data.data.memberId;
            if (memberId === null) {
              setErrors(["予期せぬエラーが発生しました。お手数ですが再度入力お願い致します"]);
              return;
            }
            analyzeEvent({ action: "submit", category: "login" }).then(() =>
              onSubmit({
                email,
                memberId: memberId,
              }),
            );
          },
          onError: () => {
            setErrors(["予期せぬエラーが発生しました。お手数ですが再度入力お願い致します"]);
          },
        },
      );
    }
  };

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="login" />
      </div>
      <div className="mt-12 px-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
          <p>同じLINEアカウントでは複数登録できません</p>
        </div>
        <div className="mt-12">
          {errors.map((error) => (
            <p key={error} className="my-1 bg-[#CB5F58] p-3 text-sm text-clay">
              {error}
            </p>
          ))}
        </div>
        <div className="flex flex-col pt-12">
          <div className="pt-8">
            <label htmlFor="email">
              メールアドレス <span className="text-[#CB5F58]">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="info@leeap.jp"
              className="my-3 w-full resize-none rounded-md border border-themeGray bg-clay p-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email ?? ""}
            ></input>
            {!EMAIL_REGAX.test(email ?? "") && (
              <FrontValidText text="正しいフォーマットで入力してください" />
            )}
          </div>
          <div className="relative pt-8">
            <label>
              パスワード <span className="text-[#CB5F58]">*</span>
            </label>
            {isVisible ? (
              <>
                <TextAreaAlt
                  onChange={(e) => setPassword(e.target.value)}
                  value={password ?? ""}
                  placeholder="半角英数字・記号、8~16文字以内"
                  className="mt-3"
                />
                <div
                  onClick={() => setIsVisible(false)}
                  className="absolute right-[10px] top-[82px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <input
                  type="password"
                  placeholder="半角英数字・記号、8~16文字以内"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password ?? ""}
                  className="mb-[6px] mt-3 w-full resize-none rounded-md border border-themeGray bg-clay p-3"
                ></input>
                <div
                  onClick={() => setIsVisible(true)}
                  className="absolute right-[10px] top-[82px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </div>
              </>
            )}
            {!PASSWORD_REGAX.test(password ?? "") && (
              <FrontValidText text="半角英数字・記号、8~16文字で入力してください" />
            )}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!canRegistered || isLoading}
            className={`relative mt-12 inline-block w-full rounded-full p-3 text-center text-base font-medium text-slate-200  ${
              !canRegistered || isLoading ? "bg-[#c8c9c3]" : "bg-themeGray"
            }`}
          >
            お支払い情報の入力へ
          </button>
          <div onClick={onBack} className="mt-6 pb-24 text-center text-xs">
            <span className="border-b-[1px] border-themeGray">基本情報入力に戻る</span>
          </div>
        </div>
      </div>
    </div>
  );
};
