import { Priority } from "./priority";
import { State } from "./state";

export interface Task {
  id: number;
  priority: Priority;
  state: State;
  title: string;
  description: string;
}
