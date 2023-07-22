export interface IThread {
  node: INode;
  member: IMember;
  last_reply_by: string;
  last_touched: number;
  title: string;
  url: string;
  created: number;
  content: string;
  content_rendered: string;
  last_modified: number;
  replies: number;
  id: number;
}

export interface INode {
  avatar_large: string;
  name: string;
  avatar_normal: string;
  title: string;
  url: string;
  topics: number;
  footer: string;
  header: string;
  title_alternative: string;
  avatar_mini: string;
  stars: number;
  root: boolean;
  id: number;
  parent_node_name: string;
}

export interface IMember {
  username: string;
  website?: null;
  github?: null;
  psn?: null;
  avatar_normal: string;
  bio?: null;
  url: string;
  tagline?: null;
  twitter?: null;
  created: number;
  avatar_large: string;
  avatar_mini: string;
  location?: null;
  btc?: null;
  id: number;
}
