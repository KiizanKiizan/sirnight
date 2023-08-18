import { handleDate } from "../../lib/microCMS/handleDate";
import { TNewsContent } from "../../lib/microCMS/uwearClient";
import { LinkButton } from "../baseParts/LinkButton";
import { Header } from "../plan/Header";
import { FooterMenu } from "../top/FooterMenu";
import { NewsContent } from "./NewsContent";

type TProps = {
  article: TNewsContent;
};

export const NewsContentWrapper = ({ article }: TProps) => {
  return (
    <div id="container" className="h-full min-h-screen inset-0 text-themeGray">
      <Header
        lists={[
          { name: "お知らせ", path: `/news/page/${1}` },
          { name: `${article.title}` },
        ]}
      />
      <div className="px-4">
        <div className="py-12 border-b-[1px] border-[#D8D8D2]">
          <p className="text-xs">{handleDate({ date: article.publishedAt })}</p>
          <h2 className="pt-2 text-xl font-bold">{`${article.title}`}</h2>
        </div>
        <div className="pt-12 text-sm">
          <div className="text-right pb-12">
            <p>{handleDate({ date: article.publishedAt, type: "kanji" })}</p>
            <p>株式会社kiizankiizan</p>
          </div>
          <NewsContent content={article?.body} />
          <LinkButton
            href={`/news/page/${1}`}
            variant="text"
            className="w-full font-bold text-base mt-12 mb-48 rounded-full border"
          >
            お知らせ一覧に戻る
          </LinkButton>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};