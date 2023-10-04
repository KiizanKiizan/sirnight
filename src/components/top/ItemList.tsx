import Image from "next/image";

type TProps = {
  type: "tops" | "bottoms";
};

export const ItemList = ({ type }: TProps) => {
  return (
    <div
      className={`${type === "tops" ? "w-[500%]" : "w-[300%]"} flex first:mb-7`}
    >
      <ul
        className={`flex w-1/2 bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        <li className="mx-2">
          {type === "tops" ? (
            <Image
              src={`/images/items/tops.webp`}
              alt={`tops-image`}
              width={1579}
              height={262}
            />
          ) : (
            <Image
              src={`/images/items/bottoms.webp`}
              alt={`bottoms-image`}
              width={941}
              height={325}
            />
          )}
        </li>
      </ul>
      <ul
        className={`flex w-1/2 bg-clay ${
          type === "tops"
            ? "animate-infiniteSlideLeft"
            : "animate-infiniteSlideRight"
        }`}
      >
        <li className="mx-2">
          <Image
            src={`/images/items/${type}.webp`}
            alt={`${type}-image`}
            width={2000}
            height={332}
          />
        </li>
      </ul>
    </div>
  );
};
