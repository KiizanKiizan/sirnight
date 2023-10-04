import Link from "next/link";
import { TFaq } from "../../lib/microCMS/uwearFaqClient";
import { QuestionAnswer } from "./QuestionAnswer";

type TProps = {
  data: TFaq;
};

export const Faq = ({ data }: TProps) => {
  return (
    <div className="bg-clay py-28" id="faq">
      <p className="mb-14 text-center text-[6vw] font-extrabold sm:text-2xl">
        よくあるご質問
      </p>
      <div className="border-b-2 border-solid border-[#D8D8D2]">
        {data.contents.map((content, index) => (
          <QuestionAnswer
            question={content.question}
            answer={content.answer}
            key={index}
          />
        ))}
      </div>
      <div className="mx-auto mt-10 w-4/5 bg-clay text-right  font-medium text-themeGray">
        <Link href={{ pathname: "/faq" }} className="relative inline-block">
          <span className="absolute left-[-20%] top-[20%] mr-2 text-xs">
            &#9679;
          </span>
          もっと見る
        </Link>
      </div>
    </div>
  );
};
