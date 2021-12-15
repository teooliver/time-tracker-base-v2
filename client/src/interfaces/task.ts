//Task format for the Task Document we get back from the db after agregation.
export interface IDbTask {
  _id: string;
  name: string;
  project?: string;
  project_color?: string;
  client: string;
  initial_time: Date | null;
  end_time: Date | null;
}

export interface TaskGroupDates {
  _id: string;
  tasks: IDbTask[];
  total_time: number;
}

export interface TaskAfterGroupedResult {
  results: TaskGroupDates[];
  pagination: {
    previous: string | null;
    next: string | null;
    total_pages: number;
    total_items: number;
    size: number;
    start: number;
  };
}
