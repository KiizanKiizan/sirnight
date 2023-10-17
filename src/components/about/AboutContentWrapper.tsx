import Image from "next/image";
import Link from "next/link";
import { TAbout, TAboutContent } from "../../lib/microCMS/uwearAboutClient";
import { Header } from "../baseParts/Header";
import { Breadcrumb } from "../plan/Breadcrumb";
import { FooterMenu } from "../top/FooterMenu";
import { AboutContent } from "./AboutContent";

type TProps = {
  article: TAboutContent;
  aboutData: TAbout;
};

export const AboutContentWrapper = ({ article, aboutData }: TProps) => {
  return (
    <div id="container" className="inset-0 h-full min-h-screen text-themeGray">
      {/* PCのみ表示する */}
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="mx-auto md:w-[750px]">
        <Breadcrumb
          lists={[
            { name: "Magazine", path: "/magazine" },
            { name: `${article.title}` },
          ]}
          className="mt-0 sm:mt-[64px]"
        />
        <Image
          src={article.image.url}
          alt={article.title}
          className="mx-auto w-full sm:h-[400px] sm:w-auto"
          width={638}
          height={638}
        />
        <div className="px-4">
          <div className="w-full border-b-[1px] border-[#D8D8D2] py-12">
            <h2 className="pt-2 text-xl font-bold md:text-3xl">{`${article.title}`}</h2>
          </div>
          <div className="text-sm">
            <AboutContent body={article.body} />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full pb-24 md:w-[750px] xl:w-[1200px]">
        <h3 className="mx-4 border-b-[1px] border-[#D8D8D2] py-4 text-center text-3xl">
          関連記事
        </h3>
        <div className="flex w-full flex-wrap justify-between">
          {aboutData.contents.map((data, i) => (
            <Link
              href={`/about/${data.id}`}
              key={data.id}
              className="w-full sm:w-[350px]"
            >
              <div
                className={`mx-4 border-[#D8D8D2] p-8 ${
                  aboutData.contents.length - 1 !== i ? "border-b-[2px]" : ""
                }`}
              >
                <Image
                  src={data.image.url}
                  alt={data.title}
                  className="mx-auto w-[70%] rounded-lg object-cover hover:-translate-y-1 sm:w-[85%]"
                  width={380}
                  height={380}
                />
                <p className="mt-2 h-[100px] overflow-hidden text-center text-2xl sm:h-[84px] sm:text-lg">
                  {data.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* スマホのみ表示する */}
      <div className="sm:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};
