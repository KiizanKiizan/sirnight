import { createClient } from "microcms-js-sdk";

export const uwearAboutClient = createClient({
  serviceDomain: "uwear-about",
  apiKey: `${process.env.NEXT_PUBLIC_MICRO_CMS_UWEAR_ABOUT_API_KEY}`,
});

export type TAbout = {
  contents: TAboutContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TTalkText = {
  fieldId: "talkText";
  name: string;
  image: {
    url: string;
  };
  text: string;
  isLeft: boolean;
};

export type TNormalText = {
  fieldId: "normalText";
  text: string;
};

export type TAboutContent = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  body: (TNormalText | TTalkText)[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: {
    id: string;
    name: string;
  }[];
};

export const CATEGORIES = {
  COORDINATE: "coordinate",
  ITEM: "item",
} as const;
