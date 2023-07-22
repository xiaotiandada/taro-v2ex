export interface IThread {
  node: IThreadNode;
  member: IThreadMember;
  last_reply_by: string;
  last_touched: number;
  title: string;
  url: string;
  created: number;
  deleted: number;
  content: string;
  content_rendered: string;
  last_modified: number;
  replies: number;
  id: number;
}

export interface IThreadNode {
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
  aliases: any[];
  root: boolean;
  id: number;
  parent_node_name: string;
}

export interface IThreadMember {
  id: number;
  username: string;
  url: string;
  website?: string;
  twitter?: string;
  psn?: string;
  github?: string;
  btc?: string;
  location?: string;
  tagline?: string;
  bio?: string;
  avatar_mini: string;
  avatar_normal: string;
  avatar_large: string;
  avatar_xlarge?: string;
  avatar_xxlarge?: string;
  avatar_xxxlarge?: string;
  created: number;
  last_modified: number;
}
