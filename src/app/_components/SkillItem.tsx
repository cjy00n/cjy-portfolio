import Image from "next/image";
import { useState } from "react";

interface SkillItemProps {
  name: string;
  logoSrc: string;
  content: string;
  position: number[];
  bgColor: string;
  textColor: string;
}

const SkillItem = ({
  name,
  logoSrc,
  content,
  position,
  bgColor,
  textColor,
}: SkillItemProps) => {
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    top: position[0],
    left: position[1],
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full transition-all duration-500 hover:z-10 hover:h-60 hover:w-60`}
      style={containerStyle}
    >
      <div
        className={`absolute text-center text-lg font-bold  transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <h1>{name}</h1>
        <p>{content}</p>
      </div>
      <Image
        src={logoSrc}
        alt={`logo-${name}`}
        height={100}
        width={100}
        className={`transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default SkillItem;
