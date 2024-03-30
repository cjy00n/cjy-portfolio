import { ProjectType } from "@/app/_types/model";
import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import axios from "axios";
import Layout from "./Layout";

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
    <Layout>
      {project &&
        project.map((item) => <ProjectItem item={item} key={item.title} />)}
    </Layout>
  );
}
