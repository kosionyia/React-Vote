export type Candidate = {
  id: number;
  name: string;
  votes: number;
};


export type VoteStatus =
  | "idle"
  | "success"
  | "already-voted"
  | "missing-name";