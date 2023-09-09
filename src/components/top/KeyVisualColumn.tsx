import Image from "next/image";

type TProps = {
  imageNames: {
    left: string;
    right: string;
  };
  rightAnimateClass?: string;
  leftAnimateClass?: string;
  isLeftSquare: boolean;
};

export const KeyVisualColumn = ({
  imageNames,
  rightAnimateClass,
  leftAnimateClass,
  isLeftSquare,
}: TProps) => {
  return (
    <div className="flex">
      <div className="relative">
        {leftAnimateClass !== undefined ? (
          <div
            className={`w-full h-full z-10 absolute inset-0 bg-clay ${leftAnimateClass}`}
          ></div>
        ) : (
          <></>
        )}
        <Image
          src={`/images/keyVisuals/main/${imageNames.left}.webp`}
          alt={`key-visual-${imageNames.left}`}
          width={425}
          height={425}
          className={`${isLeftSquare ? "w-[425px]" : "w-[212px]"} h-auto`}
          priority
        />
      </div>
      <div className="relative">
        {rightAnimateClass !== undefined ? (
          <div
            className={`w-full h-full z-10 absolute inset-0 bg-clay ${rightAnimateClass}`}
          ></div>
        ) : (
          <></>
        )}
        <Image
          src={`/images/keyVisuals/main/${imageNames.right}.webp`}
          alt={`key-visual-${imageNames.right}`}
          width={425}
          height={425}
          className={`${isLeftSquare ? "w-[212px]" : "w-[425px]"} h-auto`}
          priority
        />
      </div>
    </div>
  );
};
