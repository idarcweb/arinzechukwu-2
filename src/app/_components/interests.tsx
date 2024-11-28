import React from "react";
import { IconBaseProps } from "react-icons";

type Props = {
  icon: React.ComponentType<IconBaseProps>;
  text: string;
};

export default function Interests({ icon: Icon, text }: Props) {
  return (
    <div className="flex items-center gap-1 font-Mont text-white/70">
      <Icon size={32} className="text-liteport/70 font-light text-sm" /> {text}
    </div>
  );
}