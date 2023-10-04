import { StepStart } from "./StepStart";

export const HowToStart = () => {
  return (
    <div className="mt-8 pb-28 pt-24 text-center" id="how-to-start">
      <span className="border-b-2 border-dashed border-themeGray pb-2 text-[6vw] font-medium sm:text-2xl">
        UWearのはじめ方
      </span>
      <ul className="hidden-scrollbar flex snap-x snap-mandatory overflow-x-scroll whitespace-nowrap pt-16">
        <StepStart
          number={1}
          title="会員登録とLINEお友達登録"
          subTitle={
            <>
              サイトから会員登録をし、UWearの
              <br />
              LINEアカウントをお友達追加します。
            </>
          }
          className="ml-12"
        />
        <StepStart
          number={2}
          title="利用したいシーンを回答"
          subTitle={
            <>
              コーデを利用したいシーンを
              <br />
              選択します。
            </>
          }
        />
        <StepStart
          number={3}
          title="コーデの受け取り"
          subTitle={
            <>
              指定した配送先で
              <br />
              コーデを受け取ります。
            </>
          }
        />
        <StepStart
          number={4}
          title="着こなしの不安を解消し利用開始"
          subTitle={
            <>
              コーデを試着し、不安な点をスタイリストに相談し
              <br />
              解消してからコーデの利用を開始します。
            </>
          }
          className="pr-12"
        />
      </ul>
    </div>
  );
};
