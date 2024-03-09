"use client";

import { Project } from "@/types/model";
import { useEffect, useState } from "react";

const Home = () => {
  const [project, setProject] = useState<Project[]>();

  const fetchProject = async () => {
    try {
      const response = await fetch("/api/temp", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        setProject(data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div>
      {project &&
        project.map((item) => (
          <div key={item.title} className="p-2">
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>
              {item.period_start} ~ {item.period_end}
            </p>
            <p>
              {item.stacks.map((stack) => (
                <span key={item + stack} className="mr-2 bg-orange-300">
                  {stack}
                </span>
              ))}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Home;
