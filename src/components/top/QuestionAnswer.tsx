import { useEffect, useState } from "react";
import { LinkIcon } from "../baseParts/LinkIcon";
type TProps = {
  contentId?: string;
  question: string;
  answer: string;
};

export const QuestionAnswer = ({ contentId, question, answer }: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prevState) => !prevState);
  useEffect(() => {
    if (contentId === window.location.hash.split("#")[1]) {
      setIsActive(true);
    }
  }, [contentId]);

  return (
    <div
      className="border-t-2 border-solid border-[#D8D8D2] px-[5%] text-sm"
      id={contentId}
    >
      <div className="grid grid-cols-8 items-center py-8">
        <span className="col-span-1 justify-self-center">
          <LinkIcon link={`#${contentId}`} />
        </span>
        <div className="col-span-7">
          <div
            className="flex cursor-pointer flex-row justify-between"
            onClick={handleClick}
          >
            <p>{question}</p>
            <img
              src="/images/icons/arrow.svg"
              alt="arrow-icon"
              className={`${isActive ? "rotate-180" : ""} ps-5`}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8">
        <div
          className={`col-start-2 col-end-8 pb-8 font-normal leading-6 ${
            isActive ? "" : "hidden"
          }`}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
    </div>
  );
};
