import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { AboutContentWrapper } from "../../../src/components/about/AboutContentWrapper";
import { ArticleLayout } from "../../../src/components/article/ArticleLayout";
import {
  TAbout,
  TAboutContent,
  uwearAboutClient,
} from "../../../src/lib/microCMS/uwearAboutClient";
import { NextPageWithLayout } from "../../_app";

// publishedAtとrevisedAtをoptionalにする
export type TDraftAboutContent = Omit<
  TAboutContent,
  "publishedAt" | "revisedAt"
> &
  Partial<Pick<TAboutContent, "publishedAt" | "revisedAt">>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articleId = context.params?.id;
  const draftKey = context.query.draftKey
    ? (context.query.draftKey as string)
    : undefined;
  const article = await uwearAboutClient.get<TDraftAboutContent>({
    endpoint: `about/${articleId}`,
    queries: { draftKey },
  });
  const aboutData = await uwearAboutClient.get<TAbout>({
    endpoint: `about`,
    queries: { filters: `id[not_equals]${articleId}` },
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
    props: { draftArticle, aboutData },
  };
};

type TProps = {
  draftArticle: TAboutContent;
  aboutData: TAbout;
};

const AboutContentPreview: NextPageWithLayout<TProps> = ({
  draftArticle,
  aboutData,
}: TProps) => {
  return (
    <div className="h-full">
      <NextSeo
        title={`プレビュー | ${draftArticle.title}`}
        openGraph={{
          images: [
            {
              url: draftArticle.image
                ? `${draftArticle.image.url}`
                : `https://uwear.jp/images/meta/ogp.jpg`,
              width: 1200,
              height: 630,
              alt: draftArticle.title,
            },
          ],
        }}
      />
      <div className="bg-red py-12 text-center text-2xl sm:mt-[64px]">
        プレビュー画面
      </div>
      <AboutContentWrapper article={draftArticle} aboutData={aboutData} />
    </div>
  );
};

AboutContentPreview.getLayout = function getLayout(page: ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default AboutContentPreview;
