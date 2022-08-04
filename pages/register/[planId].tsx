import Head from "next/head";
import { useState } from "react";
import { BaseForms } from "../../src/components/register/BaseForms";
import { LoginForms } from "../../src/components/register/LoginForms";
import { PaymentForms } from "../../src/components/register/PaymentForms";
import { RegisterConfirm } from "../../src/components/register/RegisterConfirm";
import { useRegisterIndexHandler } from "../../src/hooks/register/useRegisterIndexHandler";
import { TBaseRegisterData } from "../../src/models/register/TBaseRegisterData";
import { TLoginRegisterData } from "../../src/models/register/TLoginRegisterData";
import { TPaymentRegisterData } from "../../src/models/register/TPaymentRegisterData";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { planId: "11" } },
      { params: { planId: "12" } },
      { params: { planId: "13" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { planId: "11" | "12" | "13" };
}) => {
  const { planId } = params;
  return { props: { planId } };
};

const Register = ({ planId }: { planId: "11" | "12" | "13" }) => {
  const [step, setStep] =
    useState<"base" | "login" | "payment" | "confirm">("base");
  const [baseData, setBaseData] = useState<TBaseRegisterData>();
  const [loginData, setLoginData] = useState<TLoginRegisterData>();
  const [paymentData, setPaymentData] = useState<TPaymentRegisterData>();

  const {
    handleSubmitBase,
    handleSubmitLogin,
    handleSubmitPayment,
    handleBack,
  } = useRegisterIndexHandler({
    step,
    setStep,
    setBaseData,
    setLoginData,
    setPaymentData,
  });

  let forms;
  switch (step) {
    case "base": {
      forms = <BaseForms onSubmit={handleSubmitBase} />;
      break;
    }
    case "login": {
      forms = <LoginForms onSubmit={handleSubmitLogin} onBack={handleBack} />;
      break;
    }
    case "payment": {
      if (loginData === undefined) {
        throw Error("ログイン情報を入力していません");
      }
      forms = (
        <PaymentForms
          memberId={loginData.memberId}
          onSubmit={handleSubmitPayment}
          onBack={handleBack}
        />
      );
      break;
    }
    case "confirm": {
      if (baseData === undefined) {
        throw Error("基本情報を入力していません");
      }
      if (loginData === undefined) {
        throw Error("ログイン情報を入力していません");
      }
      if (paymentData === undefined) {
        throw Error("お支払い情報を入力していません");
      }
      forms = (
        <RegisterConfirm
          memberId={loginData.memberId}
          planId={Number(planId)}
          firstName={baseData.firstName}
          lastName={baseData.lastName}
          firstNameKana={baseData.firstNameKana}
          lastNameKana={baseData.lastNameKana}
          birthDay={baseData.birthDay}
          height={baseData.height}
          weight={baseData.weight}
          prefecture={baseData.prefecture}
          email={loginData.email}
          password={loginData.password}
          maskedCardNumber={paymentData.maskedCardNumber}
          serialCode={paymentData.serialCode}
          customerCardId={paymentData.customerCardId}
          onBack={handleBack}
        />
      );
      break;
    }
  }

  return (
    <div>
      <Head>
        <title>会員登録 | UWear公式サイト</title>
        <meta
          name="description"
          content="メンズファッションレンタルサービスUWear"
        />
        <script
          type="text/javascript"
          src={`${process.env.NEXT_PUBLIC_PAYGENT_URL}/js/PaygentToken.js`}
          async
        />
        <link rel="icon" href="/favicon/favicon_head.png" />
      </Head>
      <div
        id="container"
        className="h-full min-h-screen bg-clay sm:w-[500px] inset-0 text-themeGray"
      >
        <h2 className="text-3xl font-bold text-center py-12">会員情報登録</h2>
        {forms}
      </div>
    </div>
  );
};
export default Register;
