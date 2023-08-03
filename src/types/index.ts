export type skill = {
  name: string;
  level: string;
  color: string;
};

export type experienceProp = {
  companyName: string;
  duration: string;
  position: string;
  roles: string[];
};

export type projectProp = {
  name: string;
  icon: string;
  stack: string[];
  description: string;
  left: boolean;
  link: string;
};

export type InfoProp = {
  title: string;
  list?: string[];
  texts?: string;
};

export type InfoImageProp = {
  avatar_url: string;
  login: string;
  id: string;
  description: string;
};
