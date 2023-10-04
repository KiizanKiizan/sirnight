import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Typography } from "../../src/components/baseParts/Typography";
import { Breadcrumb } from "../../src/components/plan/Breadcrumb";
import { FooterMenu } from "../../src/components/top/FooterMenu";
import {
  TCategory,
  uwearFaqClient,
} from "../../src/lib/microCMS/uwearFaqClient";

type TProps = {
  faqData: TCategory;
};
const index: NextPage<TProps> = ({ faqData }) => {
  return (
    <div>
      <NextSeo title="FAQ" />
      <div className="h-full min-h-screen text-themeGray">
        <Breadcrumb lists={[{ name: "FAQ" }]} />
        <div className="mx-auto w-4/5 pb-40 pt-14">
          <p className="mb-14 text-center text-3xl font-extrabold">FAQ</p>
          {faqData.contents.map((content, index) => (
            <Link
              href={`/faq/${content.id}`}
              key={content.id}
              className={`block border-t border-[#D8D8D2] py-10 ${
                index === faqData.contents.length - 1
                  ? "border-b border-[#D8D8D2]"
                  : ""
              }`}
            >
              <Typography size="sm" className="block" component="span">
                {content.name}
              </Typography>
            </Link>
          ))}
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const faqData = await uwearFaqClient.get<TCategory>({
    endpoint: "category",
    queries: { limit: 100 },
  });
  return {
    props: {
      faqData,
    },
  };
};
export default index;
