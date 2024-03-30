"use client";

import { useEffect, useRef, useState } from "react";
import {
  IoPersonCircle,
  IoHome,
  IoMail,
  IoConstructSharp,
  IoAppsSharp,
} from "react-icons/io5";
import { NavItem, NavItemValue } from "./_types/NavItem";
import Contact from "./_components/Contact";
import About from "./_components/About";
import Project from "./_components/Project";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Skill from "./_components/Skill";

const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemValue>("main");

  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const headerHeight = 40;
    if (ref.current) {
      const elementHeight = ref.current.offsetTop;
      window.scrollTo({
        top: elementHeight - headerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // 뷰포트 중앙 기준으로 현재 스크롤

      const aboutPositioin = aboutRef.current?.offsetTop || 0;
      const skillPosition = skillRef.current?.offsetTop || 0;
      const projectPosition = projectRef.current?.offsetTop || 0;
      const contactPosition = contactRef.current?.offsetTop || 0;

      if (scrollPosition >= 0 && scrollPosition < aboutPositioin) {
        setActiveNavItem("main");
      } else if (
        scrollPosition >= aboutPositioin &&
        scrollPosition < skillPosition
      ) {
        setActiveNavItem("about");
      } else if (
        scrollPosition >= skillPosition &&
        scrollPosition < projectPosition
      ) {
        setActiveNavItem("skill");
      } else if (
        scrollPosition >= projectPosition &&
        scrollPosition < contactPosition
      ) {
        setActiveNavItem("project");
      } else if (scrollPosition >= contactPosition) {
        setActiveNavItem("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    {
      name: "JUNG YOON",
      value: "main",
      onClick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      icon: <IoHome />,
    },
    {
      name: "ABOUT",
      value: "about",
      onClick: () => scrollToSection(aboutRef),
      icon: <IoPersonCircle />,
    },
    {
      name: "SKILL",
      value: "skill",
      onClick: () => scrollToSection(skillRef),
      icon: <IoConstructSharp />,
    },
    {
      name: "PROJECT",
      value: "project",
      onClick: () => scrollToSection(projectRef),
      icon: <IoAppsSharp />,
    },
    {
      name: "CONTACT",
      value: "contact",
      onClick: () => scrollToSection(contactRef),
      icon: <IoMail />,
    },
  ];

  return (
    <div className="flex">
      <section>
        <section ref={mainRef}>
          <Main />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={skillRef}>
          <Skill />
        </section>
        <section ref={projectRef}>
          <Project />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </section>
      <Header navItems={navItems} activeNavItem={activeNavItem} />
    </div>
  );
};

export default Home;
