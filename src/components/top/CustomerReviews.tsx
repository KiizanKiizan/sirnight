import { ReviewCard } from "./ReviewCard";

export const CustomerReviews = () => {
  return (
    <div className="bg-[#F4F3EF] px-[6%] py-28">
      <p className="mb-14 text-center text-[6vw] font-extrabold sm:text-2xl">
        ご利用者の声
      </p>
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/3.webp",
          initial: "M",
          age: 35,
          address: "東京",
        }}
        content={
          <>
            アパレルショップで試着せずに買っちゃうことがあって、家に帰って着てみたら「あんまり似合わなかった！」とか「結局あんまり使わなかった！」というのがなくなりました。
          </>
        }
        type="right"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/1.webp",
          initial: "S",
          age: 39,
          address: "神奈川",
        }}
        content={
          <>
            毎月違うバリエーションの服が届くので、マンネリ感もないし、「これとあれを着ようかな」と服を選ぶのが楽になりましたね。
          </>
        }
        type="left"
      />
      <ReviewCard
        customer={{
          imagePath: "/images/customerReviews/2.webp",
          initial: "K",
          age: 41,
          address: "千葉",
        }}
        content={
          <>
            スタイリストが選んだコーデが毎月届くので、服を買いに行く手間がなくなりました。
          </>
        }
        type="right"
      />
    </div>
  );
};
