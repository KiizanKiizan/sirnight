import Link from "next/link";
import { TNews } from "../../lib/microCMS/uwearClient";
import { NewsLinkList } from "../news/NewsLinkList";

type TProps = {
  data: TNews;
};

export const News = ({ data }: TProps) => {
  return (
    <div className="mx-auto w-4/5 bg-clay py-28" id="news">
      <p className="mb-14 text-center text-[6vw] font-extrabold sm:text-2xl">
        お知らせ
      </p>
      <div>
        <NewsLinkList data={data} />
        <div className="mt-10 bg-clay text-right font-medium text-themeGray">
          <Link
            href={{ pathname: "/news/page/1" }}
            className="relative inline-block"
          >
            <span className="absolute left-[-20%] top-[20%] mr-2 text-xs">
              &#9679;
            </span>
            もっと見る
          </Link>
        </div>
      </div>
    </div>
  );
};
