type TProps = {
  readonly step: "base" | "login" | "payment";
};
export const Stepper = ({ step }: TProps) => {
  let baseClass = "";
  let loginClass = "";
  let paymentClass = "";
  if (step === "base") {
    baseClass = "border-themeGray text-white bg-themeGray";
  } else if (step === "login") {
    baseClass = "border-[#C8C9C3] text-white bg-[#C8C9C3]";
    loginClass = "border-themeGray text-white bg-themeGray";
  } else if (step === "payment") {
    baseClass = "border-[#C8C9C3] text-white bg-[#C8C9C3]";
    loginClass = "border-[#C8C9C3] text-white bg-[#C8C9C3]";
    paymentClass = "border-themeGray text-white bg-themeGray";
  }

  return (
    <div className="w-full p-4">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <div
            className={`h-12 w-12 rounded-full border-2 py-2 text-center text-xl ${baseClass}`}
          >
            <span>1</span>
          </div>
          <div
            className={`absolute top-0 -ml-10 mt-16 w-32 text-center text-xs font-medium ${
              step === "base" ? "text-themeGray" : "text-[#C8C9C3]"
            }`}
          >
            基本情報
          </div>
        </div>
        <div className="flex-auto border-t-2 border-dotted border-themeGray"></div>
        <div className="relative flex items-center text-[#C8C9C3]">
          <div
            className={`h-12 w-12 rounded-full border-[1px] border-[#C8C9C3] py-2 text-center text-xl ${loginClass}`}
          >
            <span>2</span>
          </div>
          <div
            className={`absolute top-0 -ml-10 mt-16 w-32 text-center text-xs font-medium ${
              step === "login" ? "text-themeGray" : "text-[#C8C9C3]"
            }`}
          >
            ログイン情報
          </div>
        </div>
        <div className="flex-auto border-t-2 border-dotted border-themeGray"></div>
        <div className="relative flex items-center text-[#C8C9C3]">
          <div
            className={`h-12 w-12 rounded-full border-[1px] border-[#C8C9C3] py-2 text-center text-xl ${paymentClass}`}
          >
            <span>3</span>
          </div>
          <div
            className={`absolute top-0 -ml-10 mt-16 w-32 text-center text-xs font-medium ${
              step === "payment" ? "text-themeGray" : "text-[#C8C9C3]"
            }`}
          >
            お支払い情報
          </div>
        </div>
      </div>
    </div>
  );
};
