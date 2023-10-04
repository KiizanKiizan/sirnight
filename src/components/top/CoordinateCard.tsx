import Image from "next/image";

type TProps = {
  readonly imageFilePath: string;
  readonly coordinateNumber: string;
  readonly title: string;
  readonly mainText: React.ReactNode;
  readonly subText: React.ReactNode;
  readonly isBlur?: boolean;
};

export const CoordinateCard = ({
  imageFilePath,
  coordinateNumber,
  title,
  mainText,
  subText,
  isBlur = false,
}: TProps) => {
  return (
    <>
      {isBlur ? (
        <div className="relative">
          <figure>
            <Image
              src={imageFilePath}
              alt="coordinate"
              className="h-[50vw] w-full object-cover object-top blur sm:h-[250px]"
              width={640}
              height={1062}
            />
          </figure>
          <div className="absolute -bottom-1 h-[40vw] w-full bg-gradient-to-b from-transparent to-clay sm:h-[200px]"></div>
        </div>
      ) : (
        <div className="grid w-full grid-rows-[var(--firstViewHeight)_1fr]">
          <figure className="sticky left-0 top-0 z-10 h-[calc(100vh-70px)]">
            <Image
              src={imageFilePath}
              alt="coordinate"
              className="h-[calc(100vh-70px)] w-full object-cover object-top"
              width={640}
              height={1062}
            />
          </figure>
          <div className="z-30 -mb-1 mt-[25vh] h-fit [transform:translate3d(0,0,0)]">
            <div className="flex w-full flex-row border-y border-themeGray text-[2.5vw] font-medium sm:text-sm">
              <p className="w-1/4 bg-themeGray py-2.5 text-center text-[3vw] text-clay sm:text-sm">
                {coordinateNumber}
              </p>
              <p className="w-3/4 bg-clay px-5 py-2.5 text-[3vw] sm:text-sm">
                {title}
              </p>
            </div>
            <div className="bg-clay p-[5vw] sm:p-7">
              <p className="text-[min(4vw,15px)] font-bold leading-[8vw] sm:text-xl sm:leading-10">
                <span className="whitespace-pre-wrap border-b-[1.5px] border-dashed border-themeGray pb-1 sm:border-b-2">
                  {mainText}
                </span>
              </p>
              <p className="mt-5 text-[3vw] sm:text-sm">{subText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
