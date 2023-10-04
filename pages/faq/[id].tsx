import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { LinkButton } from "../../src/components/baseParts/LinkButton";
import { Breadcrumb } from "../../src/components/plan/Breadcrumb";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import { QuestionAnswer } from "../../src/components/top/QuestionAnswer";
import {
  TCategory,
  TCategoryContent,
  TFaq,
  uwearFaqClient,
} from "../../src/lib/microCMS/uwearFaqClient";
type TProps = {
  faqContents: TFaq;
  faqCategoryName: TCategoryContent;
};
export const FaqCategoryName: NextPage<TProps> = ({
  faqContents,
  faqCategoryName,
}) => {
  return (
    <div className="h-full">
      <NextSeo title={`${faqCategoryName.name}`} />
      <div
        id="container"
        className="inset-0 h-full min-h-screen text-themeGray"
      >
        <Breadcrumb
          lists={[
            { name: "FAQ", path: "/faq" },
            { name: `${faqCategoryName.name}` },
          ]}
        />
        <div>
          <div className="bg-clay py-28" id="faq">
            <p className="mb-14 text-center text-[6vw] font-extrabold sm:text-2xl">{`${faqCategoryName.name}`}</p>
            <div>
              {faqContents.contents.map((content) => {
                return (
                  <QuestionAnswer
                    contentId={content.id}
                    question={content.question}
                    answer={content.answer}
                    key={content.id}
                  />
                );
              })}
            </div>
            <div className="text-center">
              <LinkButton
                href={"/faq"}
                variant="text"
                className="mb-48 mt-12 w-3/4 rounded-full border text-base font-bold"
              >
                FAQ一覧に戻る
              </LinkButton>
            </div>
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const faqData = await uwearFaqClient.get<TCategory>({
    endpoint: "category",
    queries: { limit: 100 },
  });
  const paths = faqData.contents.map(
    (data: TCategoryContent) => `/faq/${data.id}`
  );
  return {
    paths: paths,
    fallback: "blocking",
  };
};

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const LIMIT = 1000;
  const faqContents = await uwearFaqClient.get<TFaq>({
    endpoint: "faq",
    queries: {
      limit: LIMIT,
      filters: `category[equals]${context.params?.id}`,
    },
  });
  const faqCategoryName = await uwearFaqClient.get<TCategoryContent>({
    endpoint: "category",
    contentId: `${context.params?.id}`,
  });
  return {
    props: {
      faqContents,
      faqCategoryName,
    },
  };
};
export default FaqCategoryName;
