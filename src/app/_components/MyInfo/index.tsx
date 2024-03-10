import { MyInfoType } from "@/app/_types/model";
import { useEffect, useState } from "react";
import MyInfoItem from "./MyInfoItem";
import axios from "axios";

const MyInfo = () => {
  const [myInfo, setMyInfo] = useState<MyInfoType[]>();

  const fetchMyInfo = async () => {
    try {
      const response = await axios.get("/api/myInfo", {
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        setMyInfo(response.data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  return (
    <div className="sticky top-10 h-dvh bg-green-800">
      {myInfo?.map((item) => (
        <MyInfoItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MyInfo;
