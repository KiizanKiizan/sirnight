import { ReactNode } from "react";

type TProps = {
  number: number;
  imagePath: string;
  title: ReactNode;
  className?: string;
};

export const StepUse = ({ number, imagePath, title, className }: TProps) => {
  return (
    <li className={`w-fit flex-none snap-center snap-always p-3 ${className}`}>
      <div className="mx-auto w-full text-center">
        <span className="font-lora font-medium">STEP 0{number}</span>
        <hr className="mx-auto mb-5 mt-1 h-[1px] w-[5%] border-b border-dashed border-white"></hr>
        <span className="text-[3.7vw] font-medium sm:text-xl">{title}</span>
      </div>
      <img
        src={imagePath}
        alt={`howToUse-${number}`}
        className="mx-auto mt-7 block w-[80vw] rounded-[15px] sm:h-[70vh] sm:w-auto"
      />
    </li>
  );
};
