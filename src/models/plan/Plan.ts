import { TAX } from "../shared/Tax";

export const LIGHT_PLAN = {
  id: 11,
  jpName: "ライト",
  enName: "light",
  price: {
    withTax: 6800 + 6800 * TAX,
    withoutTax: 6800,
  },
  targets: ["プライベートで使いたい方", "カジュアルな仕事着で利用したい方"],
  scenes: ["公園", "カフェ", "ショッピング"],
  coordinateNum: 1,
  itemNum: 3,
  topsNum: 2,
  bottomsNum: 1,
  description: "お試しではじめてみたい方",
  isJacketAvailable: false,
  point: 500,
} as const;

export const STANDARD_PLAN = {
  id: 12,
  jpName: "スタンダード",
  enName: "standard",
  price: {
    withTax: 9800 + 9800 * TAX,
    withoutTax: 9800,
  },
  targets: [
    "プライベートでもビジネスでも使いたい方",
    "大事なビジネスシーンや婚活で利用したい方",
  ],
  scenes: [
    "パーティー",
    "商談",
    "高級レストラン",
    { main: "婚活", sub: "お見合い/デート" },
  ],
  coordinateNum: 1,
  itemNum: 4,
  topsNum: 2,
  bottomsNum: 1,
  description: "幅広いシーンで着たい方",
  isJacketAvailable: true,
  point: 1000,
} as const;

export const PREMIUM_PLAN = {
  id: 13,
  jpName: "プレミアム",
  enName: "premium",
  price: {
    withTax: 14800 + 14800 * TAX,
    withoutTax: 14800,
  },
  targets: [
    "複数のシーンで使いたい方",
    "プライベートでもビジネスでも使いたい方",
    "大事なビジネスシーンや婚活で利用したい方",
  ],
  scenes: [
    "パーティー",
    "商談",
    "高級レストラン",
    { main: "婚活", sub: "お見合い/デート" },
  ],
  coordinateNum: 2,
  itemNum: 7,
  topsNum: 4,
  bottomsNum: 2,
  description: "お得にたくさん着回したい方",
  isJacketAvailable: true,
  point: 2000,
} as const;

export const ONE_SHOT = {
  id: undefined,
  jpName: "単発利用",
  enName: "one_shot",
  price: {
    withTax: 5000 + 5000 * TAX,
    withoutTax: 5000,
  },
  discountedPrice: {
    withTax: 3000 + 3000 * TAX,
    withoutTax: 3000,
  },
} as const;
export type TOneShot = typeof ONE_SHOT;

export type TPlan =
  | typeof LIGHT_PLAN
  | typeof STANDARD_PLAN
  | typeof PREMIUM_PLAN;

export const isTPlan = (value: TPlan | TOneShot): value is TPlan => {
  return value.id !== undefined;
};

export const findPlanById = (planId: number): TPlan => {
  if (planId === LIGHT_PLAN.id) {
    return LIGHT_PLAN;
  }
  if (planId === STANDARD_PLAN.id) {
    return STANDARD_PLAN;
  }
  if (planId === PREMIUM_PLAN.id) {
    return PREMIUM_PLAN;
  }
  throw Error("存在しないプランです");
};

export const findPlanByName = (name: string): TPlan => {
  if (name === LIGHT_PLAN.enName) {
    return LIGHT_PLAN;
  }
  if (name === STANDARD_PLAN.enName) {
    return STANDARD_PLAN;
  }
  if (name === PREMIUM_PLAN.enName) {
    return PREMIUM_PLAN;
  }
  throw Error("存在しないプランです");
};
