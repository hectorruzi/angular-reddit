export interface Post {
  kind: string;
  data: {
    title: string,
    created_utc: number,
    num_comments: number,
    author: string,
    id: string,
    clicked: boolean,
    hidden: boolean
  };
}
