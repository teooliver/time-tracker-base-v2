export interface ProjectsGroupByClient {
  _id: string;
  projects: ProjectAfterAgregation[];
}

export interface ProjectAfterAgregation {
  _id: string;
  name: string;
  color: string;
  client_name: string;
  estimate: string;
  status: string;
}

export interface IDbProject {
  _id: string;
  client: string;
  name: string;
  color: string;
  created_at: Date;
  updated_at: Date;
}
