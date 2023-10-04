type TProps = {
  readonly content: string;
};

export const NewsContent = ({ content }: TProps) => {
  return (
    <div
      className="newsContent border-b-[1px] border-[#D8D8D2] pb-12"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
