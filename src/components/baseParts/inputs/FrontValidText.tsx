type TProps = {
  readonly text: string;
  readonly className?: string;
};
export const FrontValidText = ({ text, className }: TProps) => {
  return <p className={`text-xs text-[#CB5F58] ${className ?? ""}`}>{text}</p>;
};
