import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FooterMenu } from "../src/components/top/FooterMenu";

const Custom404: NextPage = () => {
  return (
    <div>
      <NextSeo title="ページが見つかりません" />
      <div className="inset-0 h-full min-h-screen text-themeGray">
        <div className="flex h-[calc(100vh_-_70px)] flex-wrap content-center items-center justify-center space-y-8 text-center">
          <div className="flex items-center">
            <h1 className="m-0 mr-4 inline-block border-r border-themeGray/50 py-3 pr-5 text-[6vw] font-medium sm:text-2xl">
              404
            </h1>
            <p className="text-lg font-medium">ページが見つかりません</p>
          </div>
          <p className="w-full text-xs">You Where?</p>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
};

export default Custom404;
