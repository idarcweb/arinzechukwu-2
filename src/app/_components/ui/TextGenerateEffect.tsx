"use client";

import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  delay?: number;
}

export const TextGenerateEffect: React.FC<TypingEffectProps> = ({
  text,
  delay = 0.05,
}) => {
  const textArray = Array.from(text);
  return (
    <div style={{ display: "inline-block" }}>
      {textArray.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: idx * delay, // Delay based on the character index
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
