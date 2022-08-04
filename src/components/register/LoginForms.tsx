import { AxiosResponse } from "axios";
import Link from "next/link";
import { useState } from "react";
import { TValidationLoginResponse } from "../../api/validations/TValidationLoginResponse";
import { useValidationsLogin } from "../../api/validations/useValidationsLogin";
import { FrontValidText } from "../baseParts/inputs/FrontValidText";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Stepper } from "./Stepper";

type TProps = {
  readonly onSubmit: () => void;
};

export const LoginForms = ({ onSubmit }: TProps) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const { mutate, isLoading } = useValidationsLogin();

  const PASSWORD_REGAX = /^[a-zA-Z0-9!-/:-@¥\[`\{-~]{8,16}$/;
  const EMAIL_REGAX =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const canRegistered =
    !!email &&
    EMAIL_REGAX.test(email) &&
    !!password &&
    PASSWORD_REGAX.test(password);

  const handleSubmit = () => {
    if (canRegistered) {
      mutate(
        { email, password },
        {
          onSuccess: (data: AxiosResponse<TValidationLoginResponse>) => {
            if (data.data.errors.length > 0) {
              setErrors(data.data.errors);
              return;
            }
            if (data.data.isRegistered) {
              window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/mypage`;
              return;
            }
            onSubmit();
          },
          onError: () => {
            setErrors(["予期せぬエラーが発生しました"]);
          },
        }
      );
    }
  };

  return (
    <div className="h-full">
      <div className="px-6">
        <Stepper step="login" />
      </div>
      <div className="px-12 mt-12">
        <div className="text-sm text-[#CB5F58]">
          <p>*の項目は入力必須です</p>
          <p>同じLINEアカウントでは複数登録できません</p>
        </div>
        <div className="mt-12">
          {errors.map((error) => (
            <p className="bg-[#CB5F58] text-clay p-3">{error}</p>
          ))}
        </div>
        <div className="pt-12 flex flex-col">
          <div className="pt-8">
            <label htmlFor="email">
              メールアドレス <span className="text-[#CB5F58]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="info@leeap.jp"
              className="p-3 my-3 w-full rounded-md border border-themeGray bg-clay resize-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="mb-[6px] mt-3 p-3 w-full rounded-md border border-themeGray bg-clay resize-none"
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
            className={`relative inline-block p-3 text-center w-full font-medium text-base mt-12 rounded-full bg-themeGray text-slate-200  ${
              (!canRegistered || isLoading) && "bg-[#C8C9C3]"
            }`}
          >
            お支払い情報の入力へ
          </button>
          <div className="text-center text-xs pt-6 pb-24">
            <Link href="/">
              <span className="border-b-[1px] border-themeGray">
                基本情報入力に戻る
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
