import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "../src/components/baseParts/Layout";
import { NewsContent } from "../src/components/news/NewsContent";
import { Breadcrumb } from "../src/components/plan/Breadcrumb";
import { FooterMenu } from "../src/components/top/FooterMenu";
import {
  COMPANY_PATHS,
  TCompanyContent,
  TCompanyPaths,
  uwearClient,
} from "../src/lib/microCMS/uwearClient";

export const getStaticPaths = async () => {
  const paths = Object.values(COMPANY_PATHS).map((path: TCompanyPaths) => path);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (content) => {
  const data = await uwearClient.get<TCompanyContent>({
    endpoint: `company/${content.params?.id}`,
  });
  return { props: data, revalidate: 60 };
};

const CompanyContent: NextPage<TCompanyContent> = (
  article: TCompanyContent
) => {
  return (
    <div>
      <NextSeo title={article.title} />
      <div
        id="container"
        className="inset-0 h-full min-h-screen text-themeGray"
      >
        <Breadcrumb lists={[{ name: article.title }]} />
        <Layout title={article.title}>
          <NewsContent content={article.content} />
        </Layout>
        <FooterMenu />
      </div>
    </div>
  );
};
export default CompanyContent;
