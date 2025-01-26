import { Project } from "@/types/types";
import { Link } from "react-router-dom";

type ProjectCardProps = Project & {
  id: number;
};

const MAX_DESCRIPTION_LENGTH = 100;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  images,
  id,
  description,
}) => {
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "…"
      : description;

  return (
    <Link
      to={`/project/${id}`}
      className="w-full h-full display flex flex-col gap-4"
    >
      <div className="group relative w-full h-48">
        <img
          src={images[0]}
          alt={`${name} cover image`}
          className="w-full h-full object-cover group-hover:opacity-85 rounded-lg transition-opacity duration-300 ease-out"
        />
      </div>
      <h3 className="font-bold text-lg tracking-wider border-b border-b-white pb-2">
        {name}
      </h3>
      <p className="font-mono text-xs">{truncatedDescription}</p>
    </Link>
  );
};

export default ProjectCard;
