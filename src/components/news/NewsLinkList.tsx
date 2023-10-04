import Link from "next/link";
import { handleDate } from "../../lib/microCMS/handleDate";
import { TNews } from "../../lib/microCMS/uwearClient";
import { Typography } from "../baseParts/Typography";

type TProps = {
  data: TNews;
};

export const NewsLinkList = ({ data }: TProps) => {
  return (
    <>
      {data.contents.map((content, index) => (
        <Link
          href={`/news/${content.id}`}
          key={index}
          className={`block border-t border-[#D8D8D2] py-10 ${
            index === data.contents.length - 1
              ? "border-b border-[#D8D8D2]"
              : ""
          }`}
        >
          <Typography size="sm" className="mb-3 block" component="span">
            {content.title}
          </Typography>
          <Typography className="block font-lora" size="sm" component="span">
            {handleDate({ date: content.publishedAt })}
          </Typography>
        </Link>
      ))}
    </>
  );
};
