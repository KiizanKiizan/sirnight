import Link from "next/link";

type TProps = {
  link: string;
};
export const LinkIcon = ({ link }: TProps) => {
  return (
    <Link href={link}>
      <img
        src="/images/icons/link.svg"
        alt="copy-icon"
        className="h-8 w-8 hover:opacity-40"
      />
    </Link>
  );
};
