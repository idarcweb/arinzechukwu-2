"use client";
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string | undefined;
  handleClick?: () => void | null;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex w-full md:w-60 md:mt-10 h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#4A8BDF_50%,#E2CBFF_100%)]" />
      <span
        className={`z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
             bg-mint-blaccblue px-7 text-md font-medium font-Avenir text-royal-Pale backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

export function MagicButtonNoFunction({
  title,
  otherClasses,
}: {
  title: string;
  otherClasses?: string | undefined;
}) {
  return (
    <button className="relative inline-flex p-[1px] w-full overflow-hidden rounded-md  focus:outline-none ">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#acdb53_0%,#153e2e_50%,#207c49_100%)]" />
      <span
        className={`z-10  h-full cursor-pointer items-center justify-center 
             bg-thickport px-2 py-2  text-center rounded-md w-36 text-white/70 backdrop-blur-3xl hover:text-darkport font-Mont gap-2 ${otherClasses}`}
      >
        {title}
      </span>
    </button>
  );
}

