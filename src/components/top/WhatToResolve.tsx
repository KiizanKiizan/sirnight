import Image from "next/image";
import { ItemCard } from "../baseParts/ItemCard";

export const WhatToResolve = () => {
  return (
    <div className="relative mb-32 w-full" id="service-value">
      <div className="relative">
        <Image
          src="/images/resolves/1.webp"
          alt="resolve"
          width={640}
          height={853}
        />
        <div className="absolute bottom-0 left-1/2 h-[250px] w-full translate-x-[-50%] bg-gradient-to-b from-transparent to-black pt-14 text-center text-slate-50">
          <p className="text-3xl font-medium tracking-wider">
            UWearで出来ること
          </p>
          <p className="mx-auto mt-3 w-fit border-b border-dashed border-white font-lora font-medium">
            Service Value
          </p>
        </div>
      </div>
      <div className="mx-auto w-[75%]">
        <ItemCard
          className="absolute -mt-16 mb-10 "
          imageFileName="/images/resolves/2.webp"
          title={"コーデをトータルにサポートできます"}
          description="好印象のコーデは靴や小物なども合わせたトータルバランスも重要です。着るシーンに合った靴や小物もご提案します。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/3.webp"
          title={"品質にこだわった洋服が届きます"}
          description="UWearはプロのデザイナー、スタイリストが監修した洋服づくりをしています。さまざまなシーンに最適なだけではなく、機能性も兼ね備えたオリジナルの洋服をお届けします。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/4.webp"
          title={"着こなしシートをコーデに同封します"}
          description="お届けするコーデにあわせた着こなしが書かれた着こなしシートを同封しています。また着こなしに悩んだらスタイリストにコーデの着こなしを相談できます。"
        />
        <ItemCard
          className="my-10"
          imageFileName="/images/resolves/5.webp"
          title={"気に入ったコーデはお安く利用できます"}
          description="お届けしたコーデが気に入って、コーデ交換が不要な場合は、翌月以降の月額料金が25%割引になります。また気に入ったコーデは、割引価格で購入できます。"
        />
      </div>
    </div>
  );
};
