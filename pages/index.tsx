import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { About } from "../src/components/top/About";
import { CatchCopy } from "../src/components/top/CatchCopy";
import { Conversion } from "../src/components/top/Conversion";
import { CustomerReviews } from "../src/components/top/CustomerReviews";
import { Faq } from "../src/components/top/Faq";
import { Footer } from "../src/components/top/Footer";
import { FooterMenu } from "../src/components/top/FooterMenu";
import { HowToStart } from "../src/components/top/HowToStart";
import { ItemList } from "../src/components/top/ItemList";
import { KeyVisual } from "../src/components/top/KeyVisual";
import { News } from "../src/components/top/News";
import { OpeningPage } from "../src/components/top/OpeningPage";
import { PointDescription } from "../src/components/top/PointDescription";
import { SceneCoordinates } from "../src/components/top/SceneCoordinates";
import { ServiceDescription } from "../src/components/top/ServiceDescription";
import { ServiceValue } from "../src/components/top/ServiceValue";
import { Sympathy } from "../src/components/top/Sympathy";
import { WhatToResolve } from "../src/components/top/WhatToResolve";
import { TAbout, uwearAboutClient } from "../src/lib/microCMS/uwearAboutClient";
import {
  TCoordinate,
  TNews,
  uwearClient,
} from "../src/lib/microCMS/uwearClient";
import { TFaq, uwearFaqClient } from "../src/lib/microCMS/uwearFaqClient";

type TProps = {
  articlesData: TNews;
  faqData: TFaq;
  aboutData: TAbout;
  coordinatesData: TCoordinate;
};

const forbidScroll = () => {
  document.addEventListener("mousewheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
};

const allowScroll = () => {
  document.removeEventListener("mousewheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
};

const preventScroll = (e: Event) => {
  e.preventDefault();
};

const Home: NextPage<TProps> = ({
  articlesData,
  faqData,
  aboutData,
  coordinatesData,
}) => {
  const [isOpeningVisible, setIsOpeningVisible] = useState(true);

  // オープニング画面を表示判定
  useEffect(() => {
    if (window.location.hash !== "") {
      setIsOpeningVisible(false);
      return;
    }
    forbidScroll();
    setTimeout(() => {
      allowScroll();
    }, 3000);
  }, []);

  return (
    <>
      {isOpeningVisible && <OpeningPage className="z-50" />}
      <div id="container" className="relative text-themeGray z-40">
        {/* 夏の初月半額キャンペーン */}
        {/* TODO: キャンペーン期間が過ぎたら削除 */}
        {new Date() < new Date(2023, 9, 1) &&
          new Date() >= new Date(2023, 5, 26) && (
            <div className="sticky top-0 z-50 text-center bg-red font-lora w-full text-clay py-1">
              9/30まで初月半額キャンペーン中！！
            </div>
          )}
        <KeyVisual />
        <CatchCopy />
        <ServiceDescription />
        <div className="overflow-hidden z-10">
          <ItemList type="tops" />
          <ItemList type="bottoms" />
        </div>
        <PointDescription className="my-24" />
        <WhatToResolve />
        <SceneCoordinates coordinatesData={coordinatesData} />
        <Conversion
          number={1}
          leftImagePath="/images/conversions/1/1.webp"
          rightImagePath="/images/conversions/1/2.webp"
        />
        <Sympathy className="mt-24" />
        <HowToStart />
        <Conversion
          number={2}
          leftImagePath="/images/conversions/2/1.webp"
          rightImagePath="/images/conversions/2/2.webp"
        />
        <ServiceValue />
        <CustomerReviews />
        <Faq data={faqData} />
        <Conversion
          number={3}
          leftImagePath="/images/conversions/3/1.webp"
          rightImagePath="/images/conversions/3/2.webp"
        />
        <News data={articlesData} />
        <About aboutData={aboutData} />
        <Footer />
        <FooterMenu />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const articlesData = await uwearClient.get<TNews>({
    endpoint: "news",
    queries: {
      limit: 6,
      filters: "unlisted[equals]false",
    },
  });
  const faqData = await uwearFaqClient.get<TFaq>({
    endpoint: "faq",
    queries: {
      filters: "isDisplayTop[equals]true",
    },
  });
  const aboutData = await uwearAboutClient.get<TAbout>({
    endpoint: "about",
  });
  const coordinatesData = await uwearClient.get<TCoordinate>({
    endpoint: "coordinates",
  });
  return {
    props: {
      articlesData,
      faqData,
      aboutData,
      coordinatesData,
    },
  };
};

export default Home;
