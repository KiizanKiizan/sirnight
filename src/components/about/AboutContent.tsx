import { TNormalText, TTalkText } from "../../lib/microCMS/uwearAboutClient";
import { SpeechBalloon } from "../baseParts/SpeechBalloon";

type TProps = {
  readonly body: (TNormalText | TTalkText)[];
};

export const AboutContent = ({ body }: TProps) => {
  return (
    <>
      {body.map((content, _) => {
        return content.fieldId === "talkText" ? (
          <SpeechBalloon
            text={content.text}
            name={content.name}
            image={content.image.url}
            isLeft={content.isLeft}
          />
        ) : (
          <div
            className="newsContent border-b-[1px] border-[#D8D8D2] pb-12"
            dangerouslySetInnerHTML={{
              __html: content.text,
            }}
          />
        );
      })}
    </>
  );
};
