import { ProjectType } from "@/app/_types/model";
import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import axios from "axios";

export default function Project() {
  const [project, setProject] = useState<ProjectType[]>();

  const fetchProject = async () => {
    try {
      const response = await axios.get("/api/project", {
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        setProject(response.data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className="sticky bg-green-950 min-dvh top-1/6">
      {project &&
        project.map((item) => <ProjectItem item={item} key={item.title} />)}
    </div>
  );
}
