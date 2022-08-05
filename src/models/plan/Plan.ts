import { TAX } from "../shared/Tax";

export const LIGHT_PLAN = {
  id: 11,
  name: "ライト",
  price: {
    withTax: 6800 + 6800 * TAX,
    withoutTax: 6800,
  },
  targets: ["プライベートで使用したい方", "カジュアルな仕事着で利用したい方"],
  scenes: ["公園", "カフェ", "ショッピング"],
  coordinateNum: 1,
  itemNum: 3,
} as const;

export const STANDARD_PLAN = {
  id: 12,
  name: "スタンダード",
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
  itemNum: 3,
};

export const PREMIUM_PLAN = {
  id: 13,
  name: "プレミアム",
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
  itemNum: 6,
};

export type TPlan =
  | typeof LIGHT_PLAN
  | typeof STANDARD_PLAN
  | typeof PREMIUM_PLAN;

export const findPlan = (planId: number): TPlan => {
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
