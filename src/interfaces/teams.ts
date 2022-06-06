import { Member } from "./tasks";

export interface Team {
  name: string;
  tag: string;
  photo: {
    url: string;
  };
  members: Array<Member>;
}
