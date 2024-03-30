import Layout from "./Layout";
import Image from "next/image";

const About = () => {
  return (
    <Layout backGround="default">
      <div className="flex text-lg">
        <Image
          src={"/profile.PNG"}
          alt={"profile-image"}
          width={300}
          height={300}
          className="mx-2 my-auto"
        />
        <div className="mx-2 my-2 flex flex-col">
          <span className="text-lg font-bold text-accent-200">I am</span>
          <p>
            안녕하세요,
            <span className="mx-1 text-accent-200">
              프론트엔드 개발자 최정윤
            </span>
            입니다.
          </p>
          <p>
            성취감을 발판삼아 한계단씩
            <span className="mx-1 text-accent-200">꾸준히 성장하고</span>
            있습니다.
          </p>
          <p>
            여기에
            <span className="mx-1 text-accent-200">어떤 문장을</span>넣을까요옹
          </p>
          <div className="my-2 flex flex-col">
            <span className="text-lg font-bold text-accent-200">Career</span>
            <h1>2019.03 ~ 2024.08 건국대학교 컴퓨터공학부</h1>
            <h1>2023.08 ~ 2023.12 엘리스 SW트랙 6기</h1>
          </div>
          <div className="my-2 flex flex-col">
            <span className="text-lg font-bold text-accent-200">
              Certificate
            </span>
            <h1>2022.06 정보처리기사 (과학기술정보통신부)</h1>
            <h1>2023.04 SQLD (한국데이터산업진흥원)</h1>
          </div>
          <div className="my-2 flex flex-col">
            <span className="text-lg font-bold text-accent-200">Awards</span>
            <h1>2023.11 건국대학교 SW경진대회 장려상🥉</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
