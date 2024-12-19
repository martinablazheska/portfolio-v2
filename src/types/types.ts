export type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type Technology = {
  title: string;
  progress: number;
  icon: React.ReactNode;
  categories?: string[];
  description: string;
  projects?: Project[];
};

export type Project = {
  name: string;
};

export type Experience = {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  skills?: string[];
  projects?: string[];
  technologies?: string[];
};
