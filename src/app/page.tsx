"use client";

import Awards from "./_components/Awards";
import Contact from "./_components/Contact";
import MyInfo from "./_components/MyInfo";
import Project from "./_components/Project";
import Study from "./_components/Study";

const Home = () => {
  return (
    <div className="h-dvh overflow-x-hidden">
      <header className="fixed top-0 w-full h-10 bg-red-300 z-10">헤더</header>
      <MyInfo />
      <Study />
      <Awards />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
