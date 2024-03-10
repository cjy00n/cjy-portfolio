import { StudyType } from "@/app/_types/model";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Study() {
  const [study, setStudy] = useState<StudyType[]>();

  const fetchStudy = async () => {
    try {
      const response = await axios.get("/api/study", {
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        setStudy(response.data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchStudy();
  }, []);
  console.log(study, "study");

  return (
    <div className="sticky top-10 h-dvh bg-gray-600">
      {study?.map(({ title, etc, description, period_end, period_start }) => (
        <div key={title}>
          <p>{title}</p>
          <span>{etc}</span>
          <p>
            {period_start}
            {period_end}
          </p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
