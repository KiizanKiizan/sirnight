import { createClient } from "microcms-js-sdk";

export const uwearClient = createClient({
  serviceDomain: "uwear",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_UWEAR_API_KEY}`,
});

export type TNews = {
  contents: TNewsContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TNewsContent = {
  id: string;
  title: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};