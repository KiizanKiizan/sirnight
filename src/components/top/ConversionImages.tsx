import Image from "next/image";

type TProps = {
  number: number;
  leftImagePath: string;
  rightImagePath: string;
};

export const ConversionImages = ({
  number,
  leftImagePath,
  rightImagePath,
}: TProps) => {
  return (
    <div className="relative z-0 h-auto w-full">
      <div id={`conversion-left-${number}`} className="origin-[50%_300%]">
        <Image
          src={leftImagePath}
          alt="conversion"
          className="relative -z-10 mx-auto w-4/5 rotate-6"
          width={420}
          height={582}
        />
      </div>
      <div className="absolute inset-0">
        <div id={`conversion-right-${number}`} className="origin-[50%_300%]">
          <Image
            src={rightImagePath}
            alt="conversion"
            className="relative z-0 mx-auto w-4/5 -rotate-6 transition"
            width={420}
            height={582}
          />
        </div>
      </div>
    </div>
  );
};
