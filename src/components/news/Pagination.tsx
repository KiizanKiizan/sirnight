import Link from "next/link";
import { PER_PAGE } from "../../../pages/news/page/[id]";

type TProps = {
  totalCount: number;
  currentPageId: number;
};

export const Pagination = ({ totalCount, currentPageId }: TProps) => {
  const minPageId = 1;
  const maxPageId = Math.ceil(totalCount / PER_PAGE);

  return (
    <div className="mt-10 flex h-14 justify-between">
      {currentPageId === minPageId ? (
        <span className="relative inline-block w-14 rounded-full bg-[#D8D8D2] text-center">
          <img
            src="/images/icons/vector.svg"
            alt="previous-page-icon"
            className="absolute left-5 top-6 w-4 rotate-180 opacity-50"
          />
        </span>
      ) : (
        <Link
          href={`/news/page/${currentPageId - 1}`}
          className="relative inline-block w-14 rounded-full bg-[#F4F3EF] text-center"
        >
          <img
            src="/images/icons/vector.svg"
            alt="previous-page-icon"
            className="absolute left-5 top-6 inline w-4 rotate-180"
          />
        </Link>
      )}
      <div className="flex items-center justify-center">
        <div className="flex">
          <p>{currentPageId}</p>
          <span>／</span>
          <p>{maxPageId}</p>
        </div>
      </div>
      {currentPageId === maxPageId ? (
        <span className="relative inline-block w-14 rounded-full bg-[#D8D8D2] text-center">
          <img
            src="/images/icons/vector.svg"
            alt="next-page-icon"
            className="absolute left-5 top-6 inline w-4 opacity-50"
          />
        </span>
      ) : (
        <Link
          href={`/news/page/${currentPageId + 1}`}
          className="relative inline-block w-14 rounded-full bg-[#F4F3EF] text-center"
        >
          <img
            src="/images/icons/vector.svg"
            alt="next-page-icon"
            className="absolute left-5 top-6 inline w-4"
          />
        </Link>
      )}
    </div>
  );
};
