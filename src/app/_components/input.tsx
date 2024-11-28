import React from "react";

type Props = {
  name: string;
  type: string;
  value: string;
  handle: () => void;
};

const Input = ({ name, type, handle, value }: Props) => {
  return (
    <input
      className="bg-transparent z-50 text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
      type={type}
      name={name}
      id={name}
      placeholder={name}
      onChange={handle}
      required
      value={value}
    />
  );
};
export default Input;

type TextareaProps = {
  name: string;
  value: string;
  handle: () => void;
};

export function Textarea({ name, handle, value }: TextareaProps) {
  return (
    <textarea
      className="bg-transparent text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
      name={name}
      id={name}
      placeholder={name}
      onChange={handle}
      required
      value={value}
      cols={3}
      rows={3}
    ></textarea>
  );
}
