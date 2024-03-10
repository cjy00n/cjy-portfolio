import { ProjectType } from "@/app/_types/model";
import Image from "next/image";

const ProjectItem = ({ item }: { item: ProjectType }) => {
  const { title, subTitle, period_end, period_start, stacks, photo } = item;

  return (
    <div className="p-2">
      {photo.map((p, idx) => (
        <Image
          src={p}
          key={p}
          alt={title + " 사진 " + idx}
          width={100}
          height={100}
        />
      ))}
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>
        {period_start} ~ {period_end}
      </p>
      <p>
        {stacks.map((stack) => (
          <span key={item + stack} className="mr-2 bg-orange-300">
            {stack}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProjectItem;
