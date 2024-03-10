export interface ProjectType {
  title: string;
  subTitle: string;
  period_end: string;
  period_start: string;
  stacks: string[];
  description: string;
  role: string;
  gitHub_url: string;
  page_url?: string;
  notion_url: string;
  photo: string[];
}

export interface StudyType {
  title: string;
  etc: string;
  period_end: string;
  period_start: string;
  description: string;
}

export interface AwardsType {
  title: string;
  etc: string;
  date: string;
  description: string;
}

export interface StacksType {
  title: string;
  description: string;
}

export interface MyInfoType {
  title: string;
  description: string;
}
