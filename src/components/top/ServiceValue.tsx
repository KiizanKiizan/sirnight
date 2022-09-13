import { Animation } from "../baseParts/Animation";

export const ServiceValue = () => {
  return (
    <div className="w-full py-28">
      <div className="w-[83%] mx-auto leading-relaxed tracking-wide text-[8vw] font-bold sm:text-4xl sm:[80%]">
        <p className="my-3">
          毎日の
          <span className="px-3 py-2 mx-2 border border-dashed border-themeGray">
            着る
          </span>
          が
        </p>
        <p className="text-right mt-5 sm:mt-10">もっと良くなるように</p>
      </div>
      <div className="w-full my-14">
        <img src="/images/serviceValue/1.webp" alt="service-value" />
      </div>
      <div className="w-[73%] mx-auto font-medium text-[max(3vw,0.85em)] text-primary leading-6 sm:text-base sm:leading-loose">
        <Animation>
          <p className="mb-5">
            UWear（ユーウェア）は、
            <br />
            「服の面倒」をなくすサービスです。
          </p>
        </Animation>
        <Animation>
          <p className="mb-10">
            スタイリストが、あなたの「服の面倒」に寄り添って、服の面倒を一緒に解決します。
          </p>
        </Animation>
        <Animation>
          <p className="mb-5">
            そして服の面倒がなくなった先に、顔なじみの美容師のように、あなたのことを理解したうえで、あなたの着るを良くしていきたいと考えています。
          </p>
        </Animation>
        <Animation>
          <p className="mb-5">
            UWearは
            <br />
            YOU(あなた)とWEAR(着る)を
            <br />
            掛け合わせた造語です。
          </p>
        </Animation>
        <Animation>
          <p className="mb-5">
            あなたの毎日の着るをもっと良くするサービスを目指していきます。
          </p>
        </Animation>
      </div>
    </div>
  );
};
