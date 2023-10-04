import Image from "next/image";
import { Animation } from "./Animation";

type TProps = {
  readonly imageFileName: string;
  readonly title: React.ReactNode;
  readonly description: React.ReactNode;
  readonly className?: string;
};
export const ItemCard = ({
  imageFileName,
  title,
  description,
  className,
}: TProps) => {
  let titleSplit: string[];
  if (title) {
    titleSplit = title.toString().split("<br />");
  } else {
    titleSplit = [];
  }

  return (
    <Animation options={{ threshold: 0.5, triggerOnce: true }}>
      <div
        className={`relative rounded-[6px] border border-themeGray ${
          className ?? ""
        }`}
      >
        <div className="relative">
          <div className="relative">
            <Image
              src={imageFileName}
              alt="service-value"
              className="rounded-[6px]"
              width={640}
              height={426}
            />
            {titleSplit.map((title, index) => (
              <p
                key={index}
                className={`absolute ${
                  index === 0 ? "-bottom-3" : ""
                } w-fit bg-themeGray p-2 text-[4vw] font-medium sm:text-lg`}
              >
                <span className="text-slate-50">{title}</span>
              </p>
            ))}
          </div>
          <div
            className={`p-[6vw] sm:p-6 ${
              titleSplit.length === 1 ? "mt-4" : "mt-12"
            } text-sm`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Animation>
  );
};
