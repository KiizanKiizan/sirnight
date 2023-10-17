export const getYouTubeChannel = async () => {
  const playlistId = "PL0v3hbkT2-HWWacpIckuSUv36u-duM22k";

  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems" +
      "?part=snippet" +
      `&playlistId=${playlistId}` +
      `&key=${process.env.YOUTUBE_V3_API_KEY}`
  );
  const data = await res.json();
  return data;
};

export type TYouTubeChannel = {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: TItem[];
};

export type TItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
};
