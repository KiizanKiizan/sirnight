type TProps = {
  children: React.ReactNode;
};

export const ArticleLayout = ({ children }: TProps) => {
  return (
    <div className="relative z-40 h-full w-screen bg-clay font-medium">
      {children}
    </div>
  );
};
