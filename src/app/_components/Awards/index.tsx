import { AwardsType } from "@/app/_types/model";
import axios from "axios";
import { useEffect, useState } from "react";

const Awards = () => {
  const [award, setAwards] = useState<AwardsType[]>();

  const fetchAwards = async () => {
    try {
      const response = await axios.get("/api/awards", {
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        setAwards(response.data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  return (
    <div className="sticky top-10 h-dvh bg-green-900">
      {award?.map((item) => (
        <div key={item.title}>
          <p>{item.title}</p>
          <span>{item.etc}</span>
          <p>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Awards;
