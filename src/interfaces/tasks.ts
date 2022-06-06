export interface Task {
  readonly title: string;
  readonly slug: string;
  readonly members: Array<Member>;
}

export interface Member {
  readonly name: string;
  readonly photo: {
    url: string;
  } | null;
}
