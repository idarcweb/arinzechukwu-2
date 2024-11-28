const H1 = ({ children, cn }: { children: React.ReactNode; cn: string }) => {
  return (
    <h1
      className={`z-10 font-Fredoka text-xl lg:text-2xl text-white/70 font-semibold ${cn}`}
    >
      {children}
    </h1>
  );
};

export default H1;
