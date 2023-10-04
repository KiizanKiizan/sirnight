import Image from "next/image";

type TProps = {
  readonly text: string;
  readonly name: string;
  readonly image: string;
  readonly isLeft: boolean;
};
export const SpeechBalloon = ({ text, name, image, isLeft }: TProps) => {
  return isLeft ? (
    <div className="mb-12 flex min-h-[80px] w-full">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <p>{name}</p>
      </div>
      <div className="ml-[16px] w-[calc(100%-50px)] rounded-lg bg-white">
        <div
          className="flex h-full items-center p-4"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
    </div>
  ) : (
    <div className="mb-12 flex min-h-[80px] w-full justify-end">
      <div className="mr-[16px] w-[calc(100%-50px)] rounded-lg bg-white">
        <div
          className="flex h-full items-center p-4"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <p>{name}</p>
      </div>
    </div>
  );
};
