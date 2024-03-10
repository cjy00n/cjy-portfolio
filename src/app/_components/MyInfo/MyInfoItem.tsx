import { MyInfoType } from "@/app/_types/model";

const MyInfoItem = ({ title, description }: MyInfoType) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default MyInfoItem;
