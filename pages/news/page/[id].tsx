import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { NewsLinkList } from "../../../src/components/news/NewsLinkList";
import { Pagination } from "../../../src/components/news/Pagination";
import { Breadcrumb } from "../../../src/components/plan/Breadcrumb";
import { FooterMenu } from "../../../src/components/top/FooterMenu";
import { TNews, uwearClient } from "../../../src/lib/microCMS/uwearClient";

export const PER_PAGE = 10;

type TProps = {
  articlesData: TNews;
  pageId: number;
};

const NewsPageId: NextPage<TProps> = ({ articlesData, pageId }: TProps) => {
  return (
    <div>
      <NextSeo title="お知らせ" />
      <div className="h-full min-h-screen text-themeGray">
        <Breadcrumb lists={[{ name: "お知らせ" }]} />
        <div className="mx-auto w-4/5 pb-40 pt-14">
          <p className="mb-14 text-center text-3xl font-extrabold">お知らせ</p>
          <NewsLinkList data={articlesData} />
          <Pagination
            totalCount={articlesData.totalCount}
            currentPageId={pageId}
          />
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await uwearClient.get<TNews>({ endpoint: "news" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (page) => `/news/page/${page}`
  );

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = Number(context.params?.id);

  const data = await uwearClient.get<TNews>({
    endpoint: "news",
    queries: {
      offset: (Number(pageId) - 1) * PER_PAGE,
      limit: PER_PAGE,
      filters: "unlisted[equals]false",
    },
  });

  return {
    props: {
      articlesData: data,
      pageId,
    },
    revalidate: 60,
  };
};

export default NewsPageId;
