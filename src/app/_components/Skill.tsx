import { useState } from "react";
import Layout from "./Layout";
import SkillItem from "./SkillItem";

const Skill = () => {
  const skills = [
    {
      name: "React",
      logoSrc: "/react.png",
      content: "상태관리 라이브러리 사용 경험이 있습니다.",
      position: [-100, -150],
      bgColor: "#222222",
      textColor: "#61DAFB",
    },
    {
      name: "Next",
      logoSrc: "/next.webp",
      content: "상태관리 라이브러리 사용 경험이 있습니다.",
      position: [-10, 20],
      bgColor: "white",
      textColor: "black",
    },
  ];
  return (
    <Layout backGround="dark">
      <div className="relative">
        {skills.map((item, idx) => (
          <SkillItem
            key={`skill-${idx}`}
            name={item.name}
            content={item.content}
            logoSrc={item.logoSrc}
            position={item.position}
            bgColor={item.bgColor}
            textColor={item.textColor}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skill;
