"use client";

import { useEffect, useRef, useState } from "react";
import { IoPersonCircle, IoMail, IoLaptopOutline } from "react-icons/io5";
import Contact from "./_components/Contact";
import About from "./_components/About";
import Project from "./_components/Project";
import Header from "./_components/Header";
import Main from "./_components/Main";
import { NavItem, NavItemValue } from "./_types/NavItem";

const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemValue>("main");

  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
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
      const projectPosition = projectRef.current?.offsetTop || 0;
      const contactPosition = contactRef.current?.offsetTop || 0;

      if (scrollPosition >= 0 && scrollPosition < aboutPositioin) {
        setActiveNavItem("main");
      } else if (
        scrollPosition >= aboutPositioin &&
        scrollPosition < projectPosition
      ) {
        setActiveNavItem("about");
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
      name: "CHOI JUNG YOON",
      value: "main",
      onClick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      icon: <IoPersonCircle />,
    },
    {
      name: "ABOUT",
      value: "about",
      onClick: () => scrollToSection(aboutRef),
      icon: <IoPersonCircle />,
    },
    {
      name: "PROJECT",
      value: "project",
      onClick: () => scrollToSection(projectRef),
      icon: <IoLaptopOutline />,
    },
    {
      name: "CONTACT",
      value: "contact",
      onClick: () => scrollToSection(contactRef),
      icon: <IoMail />,
    },
  ];

  return (
    <div>
      <Header navItems={navItems} activeNavItem={activeNavItem} />
      <section ref={mainRef}>
        <Main />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectRef}>
        <Project />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
