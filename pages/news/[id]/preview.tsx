import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { ArticleLayout } from "../../../src/components/article/ArticleLayout";
import { NewsContentWrapper } from "../../../src/components/news/NewsContentWrapper";
import {
  TNewsContent,
  uwearClient,
} from "../../../src/lib/microCMS/uwearClient";
import { NextPageWithLayout } from "../../_app";

// publishedAtとrevisedAtをoptionalにする
export type TDraftNewsContent = Omit<
  TNewsContent,
  "publishedAt" | "revisedAt"
> &
  Partial<Pick<TNewsContent, "publishedAt" | "revisedAt">>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.params?.id;
  const draftKey = context.query.draftKey
    ? (context.query.draftKey as string)
    : undefined;
  const article = await uwearClient.get<TDraftNewsContent>({
    endpoint: `news/${articleId}`,
    queries: { draftKey },
  });
  // 下書きの場合、publishedAtとrevisedAtが存在しないため公開日を現在時刻にする
  const draftDate = {
    publishedAt: article.publishedAt
      ? article.publishedAt
      : new Date().toISOString(),
    revisedAt: article.revisedAt ? article.revisedAt : new Date().toISOString(),
  };
  const draftArticle = { ...article, ...draftDate };
  return {
    props: draftArticle,
  };
};

const NewsContentPreview: NextPageWithLayout<TNewsContent> = (
  article: TNewsContent
) => {
  return (
    <div className="h-full">
      <NextSeo
        title={`プレビュー | ${article.title}`}
        openGraph={{
          images: [
            {
              url: article.image
                ? `${article.image.url}?txt=${article.title}&txt-pad=90&txt-color=475156&txt-size=48&txt-align=middle,center&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt-fit=max`
                : `https://uwear.jp/images/meta/ogp.jpg`,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ],
        }}
      />
      <div className="bg-red py-12 text-center text-2xl sm:mt-[64px]">
        プレビュー画面
      </div>
      <NewsContentWrapper article={article} />
    </div>
  );
};

NewsContentPreview.getLayout = function getLayout(page: ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default NewsContentPreview;
