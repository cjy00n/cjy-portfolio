import Layout from "./Layout";

const Main = () => {
  return (
    <Layout backGround="light">
      <span className="font-bg-100 text-6xl font-bold">안녕하세요, </span>
      <h1 className="text-7xl font-extrabold">프론트엔드 개발자</h1>
      <h1 className="text-7xl font-extrabold">
        <span className="text-accent-200">최정윤</span>입니다.
      </h1>
    </Layout>
  );
};

export default Main;
