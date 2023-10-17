export const getInstagramPosts = async () => {
  const res = await fetch(
    `https://graph.facebook.com/v18.0/${process.env.INSTAGRAM_BUSINESS_ID}/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  ).catch((err) => {
    throw new Error(err);
  });

  const data = await res.json();
  return data;
};

export type TInstagramResponse = {
  data: TInstagramPost[];
};

type TInstagramPost = {
  id: string;
  media_url: string;
};
