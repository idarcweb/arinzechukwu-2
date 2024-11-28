export default function Button({
  children,
  className,
  outline,
}: {
  children: React.ReactNode;
  className: string | undefined;
  outline: boolean | undefined;
}) {
  return (
    <button
      className={`${className} ${
        outline
          ? "relative animate-border-grow duration-1000 transition-all  bg-none border-liteport hover:text-black/90 hover:border-transparent text-liteport"
          : "bg-liteport/70 text-black/90 "
      } hover:bg-darkport  text-center rounded-md w-36 p-1 px-2 transition-all duration-500`}
    >
      {children}
    </button>
  );
}
