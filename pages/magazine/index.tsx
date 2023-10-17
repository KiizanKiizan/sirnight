import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TInstagramResponse,
  getInstagramPosts,
} from "../../src/lib/instagram/instagramClient";
import { handleDate } from "../../src/lib/microCMS/handleDate";
import {
  CATEGORIES,
  TAbout,
  uwearAboutClient,
} from "../../src/lib/microCMS/uwearAboutClient";
import {
  TYouTubeChannel,
  getYouTubeChannel,
} from "../../src/lib/youtube/youTubeClient";

type TProps = {
  aboutData: TAbout;
  itemData: TAbout;
  channelData: TYouTubeChannel;
  instagramData: TInstagramResponse;
};

export const getStaticProps = async () => {
  const aboutData = await uwearAboutClient.get<TAbout>({
    endpoint: "about",
    queries: { filters: `category[contains]${CATEGORIES.COORDINATE}` },
  });
  const itemData = await uwearAboutClient.get<TAbout>({
    endpoint: "about",
    queries: { filters: `category[contains]${CATEGORIES.ITEM}` },
  });

  const channelData = await getYouTubeChannel();
  const instagramData = await getInstagramPosts();
  return {
    props: {
      aboutData,
      channelData,
      itemData,
      instagramData,
    },
    revalidate: 60,
  };
};

const Magazine: NextPage<TProps> = ({
  aboutData,
  channelData,
  itemData,
  instagramData,
}) => {
  return (
    <div className="min-h-screen py-4 text-themeGray">
      {aboutData && aboutData.contents.length > 0 && (
        <>
          <div className="my-12 px-6">
            <h2 className="mb-12 text-3xl">最新の記事</h2>
            <div className="mt-4 text-sm">
              <Link href={`/about/${aboutData.contents[0].id}`}>
                <Image
                  src={aboutData.contents[0].image.url}
                  alt="最新記事の写真"
                  className="w-full rounded-md"
                  width={1000}
                  height={1000}
                />
                <p className="my-2 text-gray">
                  {handleDate({ date: aboutData.contents[0].publishedAt })}
                </p>
                <p>{aboutData.contents[0].title}</p>
              </Link>
            </div>
          </div>
          <div className="h-[300px] w-full bg-themeGray" />
          <div>
            <ul className="hidden-scrollbar mt-[-250px] flex snap-x snap-mandatory gap-x-6 overflow-x-scroll px-12">
              {aboutData.contents
                .filter((_, i) => i !== 0)
                .map((content) => (
                  <Link
                    href={`/about/${content.id}`}
                    key={content.id}
                    className={`flex-none snap-always rounded-md active:brightness-125 `}
                  >
                    <li
                      className="flex h-full flex-col justify-between"
                      key={content.id}
                    >
                      <Image
                        src={content.image.url}
                        alt={content.title}
                        width={300}
                        height={300}
                        className="rounded-md object-cover"
                      />
                      <div className="h-[75px] w-[300px]">
                        <p className="overflow-hidden text-ellipsis">
                          {content.title}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </>
      )}
      {itemData && itemData.contents.length > 0 && (
        <>
          <div className="mb-12 mt-36 px-6">
            <h2 className="mb-12 text-3xl">新作のアイテム</h2>
            <div className="mb-8 mt-4 text-sm">
              <Link href={`/about/${itemData.contents[0].id}`}>
                <Image
                  src={itemData.contents[0].image.url}
                  alt="最新記事の写真"
                  className="w-full rounded-md"
                  width={1000}
                  height={1000}
                />
                <p className="my-2 text-gray">
                  {handleDate({ date: itemData.contents[0].publishedAt })}
                </p>
                <p>{itemData.contents[0].title}</p>
              </Link>
            </div>
          </div>
          <div className="h-[300px] w-full bg-themeGray" />
          <div>
            <ul className="hidden-scrollbar mt-[-250px] flex snap-x snap-mandatory gap-x-6 overflow-x-scroll px-12">
              {itemData.contents
                .filter((_, i) => i !== 0)
                .map((content) => (
                  <Link
                    href={`/about/${content.id}`}
                    key={content.id}
                    className={`flex-none snap-always rounded-md active:brightness-125 `}
                  >
                    <li
                      className="flex h-full flex-col justify-between"
                      key={content.id}
                    >
                      <Image
                        src={content.image.url}
                        alt={content.title}
                        width={300}
                        height={300}
                        className="rounded-md object-cover"
                      />
                      <div className="h-[75px] w-[300px]">
                        <p className="overflow-hidden text-ellipsis">
                          {content.title}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </>
      )}
      <div className="mb-12 mt-36 px-6">
        <h2 className="mb-12 text-3xl">最新の動画</h2>
        <div className="mb-8 mt-4 text-sm">
          <Link
            href={`https://www.youtube.com/watch?v=${channelData.items[0].snippet.resourceId.videoId}`}
            target="_blank"
          >
            <img
              src={channelData.items[0].snippet.thumbnails.high.url}
              alt={channelData.items[0].snippet.title}
              className="w-full rounded-md"
              width={1000}
              height={1000}
            />
            <p className="my-2 text-gray">
              {handleDate({ date: channelData.items[0].snippet.publishedAt })}
            </p>
            <p>{channelData.items[0].snippet.title}</p>
          </Link>
        </div>
      </div>
      <div className="h-[200px] w-full bg-themeGray sm:h-[300px]" />
      <ul className="hidden-scrollbar mt-[-150px] flex snap-x snap-mandatory gap-x-6 overflow-x-scroll px-12 sm:mt-[-250px]">
        {channelData.items
          .filter((_, i) => i !== 0)
          .map((item) => (
            <Link
              href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
              target="_blank"
              key={item.snippet.resourceId.videoId}
              className={`flex-none snap-always rounded-md active:brightness-125`}
            >
              <li className="flex h-full flex-col justify-between">
                <img
                  src={item.snippet.thumbnails.high.url}
                  className="h-[210px] w-[280px] rounded-md sm:h-[270px] sm:w-[360px]"
                  width={500}
                  height={200}
                  alt={item.snippet.title}
                />
                <div className="h-[75px] w-[280px] sm:w-[360px]">
                  <p className="overflow-hidden text-ellipsis">
                    {item.snippet.title}
                  </p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
      <div className="mb-24 mt-36 px-6">
        <h2 className="mb-12 text-3xl">Instagram</h2>
        <ul className="hidden-scrollbar flex snap-x snap-mandatory gap-x-6 overflow-x-scroll px-12">
          {instagramData.data.map((post) => (
            <Link
              href="https://www.instagram.com/uwearjp/"
              target="_blank"
              key={post.id}
              className={`flex-none snap-always rounded-md active:brightness-125`}
            >
              <li className="flex h-full flex-col justify-between">
                <img
                  src={post.media_url}
                  className="w-[250px] rounded-md "
                  width={500}
                  height={500}
                  alt="uwearjp"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <footer className="text-center">UWear</footer>
    </div>
  );
};

export default Magazine;
