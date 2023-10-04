import { StepUse } from "./StepUse";

export const HowToUse = () => {
  return (
    <div id="flow">
      <div className="relative h-[133.33vw] sm:h-[666.66px]">
        <img
          src="/images/keyVisuals/sub/2.webp"
          alt="keyVisuals-5"
          className="absolute"
        />
        <div className="absolute bottom-0 left-1/2 h-[50%] w-full translate-x-[-50%] bg-gradient-to-b from-transparent to-black/80 text-center text-[6vw] text-white sm:text-3xl">
          <div className="absolute bottom-0 mb-[12vw] w-full font-medium leading-[1.5em] sm:mb-16">
            <p className="mb-1">スタイリストが</p>
            <p className="mb-1 inline-block border border-dashed border-white bg-themeGray px-4 py-2">
              あなたに最適なコーデ
            </p>
            <p>を提案します</p>
          </div>
        </div>
      </div>
      <div className="bg-themeGray pb-[20vw] pt-[12vw] text-white sm:pb-24 sm:pt-16">
        <ul className="hidden-scrollbar flex snap-x snap-mandatory overflow-x-scroll">
          <StepUse
            number={1}
            imagePath="/images/howToUse/1.gif"
            title={
              <>
                コーデの利用シーンを
                <br />
                お聞きします。
              </>
            }
            className="pl-[10vw] sm:pl-14"
          />
          <StepUse
            number={2}
            imagePath="/images/howToUse/2.gif"
            title={
              <>
                利用シーンにあわせた
                <br />
                コーデを提案します
              </>
            }
          />
          <StepUse
            number={3}
            imagePath="/images/howToUse/3.gif"
            title={
              <>
                今回のコーデが
                <br />
                あなたに最適な理由を説明します
              </>
            }
          />
          <StepUse
            number={4}
            imagePath="/images/howToUse/4.webp"
            title={
              <>
                利用した感想をお聞きし、
                <br />
                次回以降のコーデをより良くします
              </>
            }
            className="pr-[10vw] sm:pr-14"
          />
        </ul>
      </div>
    </div>
  );
};
