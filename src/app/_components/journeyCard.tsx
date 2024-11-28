import Image from "next/image";
import { IconBaseProps } from "react-icons";

type JourneyCardPropsAgain = {
  text: string | undefined;
  journey: string | undefined;
  icon: React.ComponentType<IconBaseProps>;
  bg: boolean | undefined;
  id: number;
};

const JourneyCard: React.FC<JourneyCardPropsAgain> = ({
  text,
  journey,
  icon: Icon,
  bg,
  id,
}) => {
  return (
    <div className="flex items-center gap-3 font-Mont text-xs text-white/70 duration-500 transition-all">
      <div
        className={`w-12 h-12 text-center flex justify-center items-center  ${
          bg ? "bg-lightport/70" : "border border-dashed border-liteport/70"
        } rounded-lg duration-500 transition-all`}
      >
        {id == 3 ? (
          <Image src="/freelance.svg" alt="frellancer" width={32} height={32} className="flex justify-center items-center"/>
        ) : (
          <Icon size={24} className="text-liteport" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h6 className=" capitalize text-white text-xs">{journey}</h6>
        <p className="capitalize text-lightport text-[.75rem]">{text}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
